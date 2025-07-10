using CommunityToolkit.Mvvm.Messaging;
using Epsiloner.Cooldowns;
using Newtonsoft.Json.Linq;
using RemoteController.WinUi.Messages;

namespace RemoteController.WinUi.ViewModels.Pages.SoundDevices;

public partial class DeviceViewModel : ObservableObject
{
    private readonly EventCooldown _lockedVolumeCooldown;

    public IMessenger Messenger { get; set; }

    public required string Name { get; init; }

    public bool IsInput { get; init; }

    /// <summary>
    /// Indicates if enabled for switch command.
    /// </summary>
    [ObservableProperty]
    private bool _isSelected;

    /// <summary>
    /// Indicates if this device is used as default system sound device.
    /// </summary>
    [ObservableProperty]
    private bool _isSystemDefault;

    /// <summary>
    /// Device volume in 0..100 range.
    /// </summary>
    [ObservableProperty]
    private int _volume;

    /// <summary>
    /// Device volume in 0..100 range to be always forced to be set.
    /// </summary>
    [ObservableProperty]
    private int? _lockedVolume;

    public DeviceViewModel(IMessenger messenger)
    {
        Messenger = messenger;
        var delay = TimeSpan.FromMicroseconds(200);
        _lockedVolumeCooldown = new EventCooldown(delay, ApplyLockedVolume, delay);
    }

    partial void OnIsSelectedChanged(bool value)
    {
        Messenger.Send(new DeviceIsSelectedChanged() { Device = this });
    }

    partial void OnVolumeChanged(int value)
    {
        Messenger.Send(new ChangeVolumeForDeviceRequest()
        {
            Device = this,
            Volume = LockedVolume ?? value
        });

        if (LockedVolume.HasValue && LockedVolume != Volume)
            _lockedVolumeCooldown.Accumulate();
    }

    [RelayCommand]
    private void MakeSystemDefault()
    {
        Messenger.Send(new SystemDefaultSoundDeviceRequest() { Device = this });
    }

    [RelayCommand]
    private void ToggleLockVolume()
    {
        LockedVolume = LockedVolume is null
            ? Volume
            : null;
    }

    private void ApplyLockedVolume()
    {
        Task.Run(ApplyLockedVolumeAsync)
            .GetAwaiter()
            .GetResult();
    }

    private async Task ApplyLockedVolumeAsync()
    {
        if (LockedVolume is null)
            return;
        if (LockedVolume == Volume)
            return;

        var vol = LockedVolume.Value;

        do
        {
            Messenger.Send(new ChangeVolumeForDeviceRequest()
            {
                Device = this,
                Volume = vol
            });

            await Task.Delay(200);
        } while (Volume != vol);
    }
}
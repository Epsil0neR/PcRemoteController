using CommunityToolkit.Mvvm.Messaging;
using CommunityToolkit.WinUI;
using Epsiloner.WinUi.Services;
using RemoteController.Informer;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.HostedServices;
using RemoteController.WinUi.HotKeys.Items;
using RemoteController.WinUi.Messages;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Services;

namespace RemoteController.WinUi.ViewModels.Pages.SoundDevices;

public partial class SoundDevicesViewModel :
    ActivatableViewModel,
    IDisposable,
    IRecipient<DeviceIsSelectedChanged>,
    IRecipient<SystemDefaultSoundDeviceRequest>,
    IRecipient<ChangeVolumeForDeviceRequest>,
    IRecipient<LockVolumeForDeviceRequest>
{
    private readonly DispatcherQueue _dispatcher;
    private readonly ILogger<SoundDevicesViewModel> _logger;
    private bool _updatingDevices;

    /// <summary>
    /// Sound output devices like phones, headset, speakers, etc.
    /// </summary>
    [ObservableProperty]
    private IReadOnlyList<DeviceViewModel> _outputDevices = Array.Empty<DeviceViewModel>();

    /// <summary>
    /// Sound input devices like microphone, etc.
    /// </summary>
    [ObservableProperty]
    private IReadOnlyList<DeviceViewModel> _inputDevices = Array.Empty<DeviceViewModel>();

    public IMessenger Messenger { get; }

    public IWritableOptions<SoundDevicesOptions> SoundDevicesOptions { get; }

    public ISoundDevicesService Service { get; }
    public LockedSoundDeviceVolumeHostedService LockedSoundDeviceVolumeHostedService { get; }

    public IHotkeysService HotkeysService { get; }

    public SwitchSoundOutputHotkey SwitchSoundOutputHotkey { get; }

    public SwitchSoundInputHotkey SwitchSoundInputHotkey { get; }

    public SoundInformer SoundInformer { get; }

    public SoundDevicesViewModel(
        ILogger<SoundDevicesViewModel> logger,
        SoundInformer soundInformer,
        IMessenger messenger,
        IWritableOptions<SoundDevicesOptions> soundDevicesOptions,
        ISoundDevicesService service,
        LockedSoundDeviceVolumeHostedService lockedSoundDeviceVolumeHostedService,
        IHotkeysService hotkeysService,
        SwitchSoundOutputHotkey switchSoundOutputHotkey,
        SwitchSoundInputHotkey switchSoundInputHotkey)
    {
        _dispatcher = DispatcherQueue.GetForCurrentThread();
        _logger = logger;
        Messenger = messenger ?? throw new ArgumentNullException(nameof(messenger));
        SoundDevicesOptions = soundDevicesOptions ?? throw new ArgumentNullException(nameof(soundDevicesOptions));
        Service = service ?? throw new ArgumentNullException(nameof(service));
        LockedSoundDeviceVolumeHostedService = lockedSoundDeviceVolumeHostedService ?? throw new ArgumentNullException(nameof(lockedSoundDeviceVolumeHostedService));
        HotkeysService = hotkeysService ?? throw new ArgumentNullException(nameof(hotkeysService));
        SwitchSoundOutputHotkey = switchSoundOutputHotkey ?? throw new ArgumentNullException(nameof(switchSoundOutputHotkey));
        SwitchSoundInputHotkey = switchSoundInputHotkey ?? throw new ArgumentNullException(nameof(switchSoundInputHotkey));
        SoundInformer = soundInformer ?? throw new ArgumentNullException(nameof(soundInformer));

        UpdateDevices();
    }

    public void Dispose()
    {
        Deactivate();
    }

    [RelayCommand]
    private void ForceCheckChanges()
    {
        SoundInformer.CheckForChanges(true);
    }

    private void SoundInformerOnChanged(object? sender, EventArgs e)
    {
        UpdateDevices();
    }

    private void UpdateDevices()
    {
        _dispatcher.EnqueueAsync(() =>
        {
            _updatingDevices = true;
            try
            {
                foreach (var info in SoundInformer.InputDeviceList)
                    AddOrUpdate(info, true);
                foreach (var info in SoundInformer.OutputDeviceList)
                    AddOrUpdate(info, false);
            }
            finally
            {
                _updatingDevices = false;
            }
        }, DispatcherQueuePriority.High);
    }

    private void AddOrUpdate(SoundDeviceInfo info, bool isInput)
    {
        var options = isInput
            ? SoundDevicesOptions.Value.Inputs
            : SoundDevicesOptions.Value.Outputs;
        var option = options.FirstOrDefault(x => x.DeviceName == info.Name);
        var defaultDevice = isInput
            ? SoundInformer.InputDevice
            : SoundInformer.OutputDevice;
        var devices = isInput
            ? InputDevices
            : OutputDevices;
        var device = devices.FirstOrDefault(x => x.Name == info.Name);
        var add = device is null;

        device ??= new(Messenger)
        {
            Name = info.Name,
            IsInput = isInput,
        };

        device.IsSelected = option?.SwitchCommand ?? false;
        device.IsSystemDefault = string.Equals(defaultDevice, info.Name);
        device.Volume = (int)info.Volume;
        if (option?.LockedVolume is not null)
            device.LockedVolume = option.LockedVolume;

        if (add)
        {
            var newList = devices.ToList();
            newList.Add(device);
            if (isInput)
                InputDevices = newList;
            else
                OutputDevices = newList;
        }
    }

    public void Receive(DeviceIsSelectedChanged message)
    {
        if (_updatingDevices)
            return;
        
        SoundDevicesOptions.Update(x =>
        {
            UpdateOptions(x.Inputs, InputDevices);
            UpdateOptions(x.Outputs, OutputDevices);
        });
    }

    public void Receive(SystemDefaultSoundDeviceRequest message)
    {
        if (!message.Device.IsInput)
            Service.OutputDevice = message.Device.Name;
        else
            Service.InputDevice = message.Device.Name;
    }

    public void Receive(ChangeVolumeForDeviceRequest message)
    {
        if (_updatingDevices)
            return;

        if (message.Device.IsInput)
            SoundInformer.ChangeInputVolume(message.Device.Name, message.Volume);
        else
            SoundInformer.ChangeOutputVolume(message.Device.Name, message.Volume);
    }

    public void Receive(LockVolumeForDeviceRequest message)
    {
        LockedSoundDeviceVolumeHostedService.LockVolume(message.Device.Name, message.Device.IsInput, message.LockedVolume);
    }

    private void UpdateOptions(List<SoundDeviceData> options, IReadOnlyList<DeviceViewModel> items)
    {
        foreach (var item in items)
        {
            var option = options.Find(x => x.DeviceName == item.Name);
            if (option is null && item.IsSelected)
            {
                option = new SoundDeviceData()
                {
                    DeviceName = item.Name,
                    SwitchCommand = item.IsSelected
                };
                options.Add(option);
            }
            else if (option is not null)
            {
                option.SwitchCommand = item.IsSelected;
            }
        }
    }

    protected override void OnActivated()
    {
        SoundInformer.Changed += SoundInformerOnChanged;
        Messenger.RegisterAll(this);
    }

    protected override void OnDeactivated()
    {
        Messenger.UnregisterAll(this);
        SoundInformer.Changed -= SoundInformerOnChanged;
    }
}
using RemoteController.Informer;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Services;

namespace RemoteController.WinUi.HotKeys.Items;

// ReSharper disable once ClassNeverInstantiated.Global
public class SwitchSoundOutputHotkey : HotkeyItem
{
    private readonly IWritableOptions<SoundDevicesOptions> _soundDevicesOptions;
    private readonly ISoundDevicesService _soundDevicesService;
    private readonly InformersManager _informersManager;
    private readonly SoundInformer _soundInformer;

    public SwitchSoundOutputHotkey(
        IWritableOptions<SoundDevicesOptions> soundDevicesOptions,
        ISoundDevicesService soundDevicesService,
        InformersManager informersManager)
    {
        _soundDevicesOptions = soundDevicesOptions ?? throw new ArgumentNullException(nameof(soundDevicesOptions));
        _soundDevicesService = soundDevicesService ?? throw new ArgumentNullException(nameof(soundDevicesService));
        _informersManager = informersManager ?? throw new ArgumentNullException(nameof(informersManager));
        _soundInformer = _informersManager.Informer<SoundInformer>() ?? throw new ArgumentException(@"Sound informer is not available in manager.", nameof(informersManager));
    }

    public override HotkeyGroup Group => HotkeyGroup.Sound;
    public override uint Priority => 0;
    public override string CodeName => "Sound.Switch.Output";
    public override string Title => "Switch sound output";
    public override string Description => "Switches in order selected sound output devices (headphones, headset, speakers, etc..)";

    public override void Execute()
    {
        var devices = _soundDevicesOptions.Value.Outputs;
        var current = _soundDevicesService.OutputDevice;
        var activeDevices = _soundInformer.OutputDeviceList
            .Select(x => x.Name)
            .ToArray();
        
        // Ignore non-active devices
        devices.RemoveAll(x => !activeDevices.Contains(x.DeviceName));

        var selected = devices.FirstOrDefault(x => x.DeviceName == current);
        if (selected is null)
        {
            var first = devices.FirstOrDefault(x => x.SwitchCommand);
            if (first is not null)
                _soundDevicesService.OutputDevice = first.DeviceName;
            return;
        }

        var ind = devices.IndexOf(selected);
        var list = devices.Skip(ind).ToList();
        list.AddRange(devices.Take(ind).ToList());

        // Remove selected item and non-active items.
        list.Remove(selected);
        list.RemoveAll(x => !x.SwitchCommand);

        var next = list.FirstOrDefault();
        if (next is null)
            return;

        _soundDevicesService.OutputDevice = next.DeviceName;
    }
}
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Services;

namespace RemoteController.WinUi.HotKeys.Items;

// ReSharper disable once ClassNeverInstantiated.Global
public class SwitchSoundInputHotkey(
    IWritableOptions<SoundDevicesOptions> soundDevicesOptions,
    ISoundDevicesService soundDevicesService)
    : HotkeyItem
{
    public override HotkeyGroup Group => HotkeyGroup.Sound;
    public override uint Priority => 1;
    public override string CodeName => "Sound.Switch.Input";
    public override string Title => "Switch sound input";
    public override string Description => "Switches in order selected sound input devices (headset mic, microphone, etc..)";

    public override void Execute()
    {
        var devices = soundDevicesOptions.Value.Inputs;
        var selectedName = soundDevicesService.InputDevice;
        var selected = devices.FirstOrDefault(x => x.DeviceName == selectedName);
        if (selected is null)
        {
            var first = devices.FirstOrDefault(x => x.SwitchCommand);
            if (first is not null)
                soundDevicesService.InputDevice = first.DeviceName;
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

        soundDevicesService.InputDevice = next.DeviceName;
    }
}
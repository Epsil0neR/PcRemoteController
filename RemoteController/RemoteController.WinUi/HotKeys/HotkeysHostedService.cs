using Microsoft.Extensions.DependencyInjection;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.HotKeys;

public class HotkeysHostedService : IHostedService
{
    private readonly IServiceProvider _provider;
    private readonly IWritableOptions<HotkeyGesturesOptions> _options;
    private bool _initiated = false;

    public HotkeysHostedService(IServiceProvider provider, IWritableOptions<HotkeyGesturesOptions> options)
    {
        _provider = provider;
        _options = options;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        _initiated = true;
        var hotkeys = _provider.GetServices<IHotkeyItem>();
        ;
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
    }
}

public class SwitchSoundOutputHotkey : HotkeyItem
{
    public override HotkeyGroup Group => HotkeyGroup.Sound;
    public override uint Priority => 0;
    public override string CodeName => "Sound.Switch.Output";
    public override string Title => "Switch sound output";
    public override string Description => "Switches in order selected sound output devices (headphones, headset, speakers, etc..)";

    public SwitchSoundOutputHotkey()
    {
    }

    public override Task Execute()
    {
        return Task.CompletedTask;
    }
}

public class SwitchSoundInputHotkey : HotkeyItem
{
    public override HotkeyGroup Group => HotkeyGroup.Sound;
    public override uint Priority => 1;
    public override string CodeName => "Sound.Switch.Input";
    public override string Title => "Switch sound input";
    public override string Description => "Switches in order selected sound input devices (headset mic, microphone, etc..)";

    public SwitchSoundInputHotkey()
    {
    }

    public override Task Execute()
    {
        return Task.CompletedTask;
    }
}


/* SAMPLE:
 *
 * Name: SoundDevices.Switch.Output
 * Title: Switch sound output devices
 * Gesture: F24
 *
 *
 * Name: SoundDevices.Switch.Input
 * Title: Switch sound input devices
 * Gesture: Shift+F24
 *
 * Name: SoundDevices.Output
 * Title: Switch sound output device to
 * Param: Speakers //TODO: new idea - commands with params
 * Gesture: Ctrl+F24
 *
 *
 * Name: SoundDevices.Input
 * Title: Switch sound input device to
 * Param: Headset //TODO: new idea - commands with params
 * Gesture: Alt+F24
 *
 *
 * Name: Keyboard.Layout.Next
 * Title: Switch keyboard language
 * Gesture: F23
 *
 *
 * Name: Keyboard.Layout.Prev
 * Title: Switch keyboard language (reverse)
 * Gesture: Shift+F23
 *
 *
 * Name: Keyboard.Layout
 * Title: Switch keyboard layout to language
 * Param: ru-RU //TODO: new idea - commands with params
 * Gesture: ALT+R + ALT+U
 */
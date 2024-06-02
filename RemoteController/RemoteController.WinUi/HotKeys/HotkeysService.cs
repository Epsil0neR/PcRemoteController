using Epsiloner.WinUi.Gestures;
using RemoteController.Informer;
using RemoteController.WinUi.Services;

namespace RemoteController.WinUi.HotKeys;

public enum HotkeyGroup
{
    General,
    Sound,
}

[ObservableObject]
public abstract partial class HotkeyItem
{
    /// <summary>
    /// Group for hotkey.
    /// </summary>
    public abstract HotkeyGroup Group { get; }

    /// <summary>
    /// Ascending priority of item in <see cref="Group"/>.
    /// </summary>
    public abstract uint Priority { get; }

    /// <summary>
    /// Unique name.
    /// </summary>
    public abstract string CodeName { get; }

    /// <summary>
    /// Title to show in UI.
    /// </summary>
    public abstract string Title { get; }

    /// <summary>
    /// Description to show in UI.
    /// </summary>
    public abstract string Description { get; }

    /// <summary>
    /// Gesture that is bound to this Hotkey.
    /// </summary>
    [ObservableProperty]
    private MultiKeyGesture _gesture;

    /// <summary>
    /// Hotkey execution handler.
    /// </summary>
    public abstract Task Execute();
}

public class SwitchSoundOutputHotkey : HotkeyItem
{
    public override HotkeyGroup Group => HotkeyGroup.Sound;
    public override uint Priority => 0;
    public override string CodeName => "Sound.Switch.Output";
    public override string Title => "Switch sound output";
    public override string Description => "Switches in order selected sound output devices.";

    public SwitchSoundOutputHotkey()
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
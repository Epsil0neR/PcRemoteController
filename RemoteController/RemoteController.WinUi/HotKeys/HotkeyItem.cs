using Epsiloner.WinUi.Gestures;

namespace RemoteController.WinUi.HotKeys;

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
    public abstract void Execute();
}
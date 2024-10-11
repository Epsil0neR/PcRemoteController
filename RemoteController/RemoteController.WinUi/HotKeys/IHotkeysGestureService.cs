using Epsiloner.WinUi.Gestures;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.HotKeys;

/// <summary>
/// Service that provides interaction between <see cref="HotkeyItem"/> and <see cref="Gesture"/>.
/// </summary>
public interface IHotkeysGestureService
{
    /// <summary>
    /// Managed hotkeys.
    /// </summary>
    IEnumerable<HotkeyItem> Hotkeys { get; }

    /// <summary>
    /// Loads gestures from <see cref="HotkeyGesturesOptions"/>.
    /// </summary>
    void Load();

    /// <summary>
    /// Saves gestures to <see cref="HotkeyGesturesOptions"/>.
    /// </summary>
    /// <param name="codeName">Hotkey code name.</param>
    /// <param name="gesture">Gesture to apply.</param>
    void Save(string codeName, MultiKeyGesture gesture);

    void StartWatch();

    void StopWatch();
}
using Windows.System;

namespace RemoteController.WinUi.Extensions;

public static class VirtualKeyModifiersExtensions
{
    /// <summary>
    /// Converts single flag to <see cref="VirtualKey"/>.
    /// </summary>
    /// <param name="virtualKeyModifier">Value to convert.</param>
    public static VirtualKey ToVirtualKey(this VirtualKeyModifiers virtualKeyModifier)
    {
        return virtualKeyModifier switch
        {
            VirtualKeyModifiers.Control => VirtualKey.Control,
            VirtualKeyModifiers.Menu => VirtualKey.Menu,
            VirtualKeyModifiers.Shift => VirtualKey.Shift,
            VirtualKeyModifiers.Windows => VirtualKey.LeftWindows,
            _ => VirtualKey.None,
        };
    }
}
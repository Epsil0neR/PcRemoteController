using Windows.System;
using Epsiloner.Helpers;
using Epsiloner.WinUi.Gestures;

namespace RemoteController.WinUi.Extensions;

public static class GestureExtensions
{
    /// <summary>
    /// Converts <see cref="Gesture"/> to list of <see cref="VirtualKey"/> including all <see cref="VirtualKeyModifiers"/> converted to <see cref="VirtualKey"/>.
    /// </summary>
    /// <param name="gesture">Value to convert.</param>
    public static List<VirtualKey> ToVirtualKeys(this Gesture? gesture)
    {
        var rv = new List<VirtualKey>();
        if (gesture is null)
            return rv;

        foreach (VirtualKeyModifiers m in gesture.Modifiers.GetFlags())
        {
            var vk = m.ToVirtualKey();
            if (vk != VirtualKey.None)
                rv.Add(vk);
        }
        
        rv.Add(gesture.Key);

        return rv;
    }
}
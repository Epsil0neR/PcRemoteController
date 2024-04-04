using Windows.System;
using Epsiloner.Helpers;
using Epsiloner.WinUi.Gestures;
using Microsoft.UI.Xaml.Data;

namespace RemoteController.WinUi.Converters;

public class GestureToVirtualKeysConverter : IValueConverter
{
    public object? Convert(object value, Type targetType, object parameter, string language)
    {
        if (value is not Gesture g)
            return null;

        var rv = new List<VirtualKey> {g.Key};

        foreach (VirtualKeyModifiers modifier in g.Modifiers.GetFlags())
        {
            if (modifier is VirtualKeyModifiers.None)
                continue;

            var vk = ToVirtualKey(modifier);
            if (vk != VirtualKey.None)
                rv.Add(vk);
        }

        return rv;
    }

    private VirtualKey ToVirtualKey(VirtualKeyModifiers modifier)
    {
        return modifier switch
        {
            VirtualKeyModifiers.Control => VirtualKey.Control,
            VirtualKeyModifiers.Menu => VirtualKey.Menu,
            VirtualKeyModifiers.Shift => VirtualKey.Shift,
            VirtualKeyModifiers.Windows => VirtualKey.LeftWindows,
            _ => VirtualKey.None
        };
    }

    public object ConvertBack(object value, Type targetType, object parameter, string language)
    {
        throw new NotImplementedException();
    }
}
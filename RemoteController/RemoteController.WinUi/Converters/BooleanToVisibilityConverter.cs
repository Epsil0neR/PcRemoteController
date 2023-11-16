using Microsoft.UI.Xaml.Data;

namespace RemoteController.WinUi.Converters;

public class BooleanToVisibilityConverter : IValueConverter
{
    public Visibility TrueVisibility { get; set; } = Visibility.Visible;
    public Visibility FalseVisibility { get; set; } = Visibility.Collapsed;
    public Visibility NullVisibility { get; set; } = Visibility.Collapsed;

    public object Convert(object value, Type targetType, object parameter, string language)
    {
        if (value is bool b)
            return b ? TrueVisibility : FalseVisibility;

        return NullVisibility;
    }

    public object ConvertBack(object value, Type targetType, object parameter, string language)
    {
        if (value is Visibility v)
        {
            if (v == TrueVisibility)
                return true;
            if (v == FalseVisibility)
                return false;
        }
        return (bool?) null;
    }
}
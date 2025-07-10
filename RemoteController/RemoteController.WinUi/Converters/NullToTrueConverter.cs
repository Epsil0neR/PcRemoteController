using Microsoft.UI.Xaml.Data;

namespace RemoteController.WinUi.Converters;

public class NullToTrueConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        return ReferenceEquals(value, null);
    }

    public object ConvertBack(object value, Type targetType, object parameter, string language)
    {
        throw new NotImplementedException();
    }
}
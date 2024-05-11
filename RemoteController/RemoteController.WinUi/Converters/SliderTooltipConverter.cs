using Microsoft.UI.Xaml.Data;

namespace RemoteController.WinUi.Converters;

public class SliderTooltipConverter : IValueConverter
{
    public string LeftPart { get; set; }

    public string RightPart { get; set; }

    public object Convert(object value, Type targetType, object parameter, string language)
    {
        return $"{LeftPart}{value}{RightPart}";
    }

    public object ConvertBack(object value, Type targetType, object parameter, string language)
    {
        throw new NotImplementedException();
    }
}
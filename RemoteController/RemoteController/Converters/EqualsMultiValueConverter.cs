using System;
using System.Globalization;
using System.Linq;
using System.Windows.Data;

namespace RemoteController.Converters;

public class EqualsMultiValueConverter : IMultiValueConverter
{
    public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
    {
        if (values.Length < 2)
            return false;

        var first = values.First();
        var result = values.Skip(1).All(x => Equals(first, x));

        return result;
    }

    public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}
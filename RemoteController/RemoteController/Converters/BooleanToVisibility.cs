using System;
using System.Globalization;
using System.Windows;
using System.Windows.Data;

namespace RemoteController.Converters
{
    public class BooleanToVisibility : IValueConverter
    {
        public Visibility TrueVisibility { get; set; } = Visibility.Visible;
        public Visibility FalseVisibility { get; set; } = Visibility.Collapsed;
        public Visibility NullVisibility { get; set; } = Visibility.Collapsed;

        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if (value is bool b)
                return b ? TrueVisibility : FalseVisibility;

            return NullVisibility;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if (value is Visibility v)
            {
                if (v == TrueVisibility)
                    return true;
                if (v == FalseVisibility)
                    return false;
            }
            return (bool?)null;
        }
    }
}
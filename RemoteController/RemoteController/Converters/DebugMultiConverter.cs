using System;
using System.Diagnostics;
using System.Globalization;
using System.Windows.Data;

namespace RemoteController.Converters
{
    public class DebugMultiConverter : IMultiValueConverter
    {
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            Debugger.Break();
            return values;
        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
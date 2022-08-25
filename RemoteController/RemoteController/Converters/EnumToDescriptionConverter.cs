using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Windows.Data;

namespace RemoteController.Converters;

public class EnumToDescriptionConverter : IValueConverter
{
    private static readonly Dictionary<Type, IReadOnlyDictionary<Enum, string>> Cache = new Dictionary<Type, IReadOnlyDictionary<Enum, string>>();

    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        if (!(value is Enum val))
            return null;

        var type = val.GetType();
        if (Cache.TryGetValue(type, out var cache) && cache.TryGetValue(val, out var result))
            return result;

        var values = Enum.GetValues(type);
        var dictionary = new Dictionary<Enum, string>();
        var attrType = typeof(DescriptionAttribute);
        foreach (var item in values)
        {
            var text = item.ToString();
            var info = type.GetField(text);
            var description = info.GetCustomAttributes(attrType, false)
                .OfType<DescriptionAttribute>()
                .FirstOrDefault(x => !string.IsNullOrWhiteSpace(x.Description))
                ?.Description;
            if (!string.IsNullOrWhiteSpace(description))
                text = description;

            dictionary[(Enum)item] = text;
        }
        Cache[type] = dictionary;

        return dictionary[val];
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}
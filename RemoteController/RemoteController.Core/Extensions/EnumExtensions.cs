using System;
using System.ComponentModel;
using System.Reflection;

namespace RemoteController.Extensions;

public static class EnumExtensions
{
    public static string ToDescription(this Enum @enum)
    {
        var rv = @enum.ToString();
        FieldInfo fieldInfo = @enum.GetType().GetField(rv);

        var attrs = fieldInfo?.GetCustomAttributes(false);
        if (attrs == null || attrs.Length == 0)
            return rv;

        var attr = attrs[0] as DescriptionAttribute;
        return string.IsNullOrWhiteSpace(attr?.Description) 
            ? rv 
            : attr.Description;
    }

}
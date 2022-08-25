using System;
using System.IO;

namespace RemoteController.Extensions;

public static class StringExtensions
{
    public static bool IsValidRootName(this string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            return false;

        if (name.IndexOfAny(Path.GetInvalidFileNameChars()) >= 0)
            return false;

        return true;
    }

    public static string ReplaceFirst(this string text, string search, string replace)
    {
        if (string.IsNullOrEmpty(text) || string.IsNullOrEmpty(search))
            return text;

        var pos = text.IndexOf(search, StringComparison.Ordinal);
        if (pos < 0)
            return text;

        return text.Substring(0, pos) + replace + text.Substring(pos + search.Length);
    }
}
using System.IO;

namespace RemoteController.Extensions
{
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
    }
}

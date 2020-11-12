using System;
using System.Collections.Generic;
using System.Linq;
using RemoteController.Extensions;

namespace RemoteController.Manipulator.Contexts
{
    /// <summary>
    /// Represents paths for <see cref="FileSystemManipulation"/>.
    /// </summary>
    public class FileSystemPath
    {
        /// <summary>
        /// Unique name for path.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Actual path.
        /// </summary>
        public string Path { get; set; }

        /// <summary>
        /// Converts fake path to actual path.
        /// </summary>
        /// <param name="fakePath">Fake path to file or directory.</param>
        /// <returns></returns>
        public string ToActualPath(string fakePath)
        {
            if (string.IsNullOrWhiteSpace(fakePath))
                return null;

            if (string.Equals(fakePath, Name, StringComparison.InvariantCultureIgnoreCase))
                return Path;

            var relative = fakePath.Substring(Name.Length + 1);
            var rv = System.IO.Path.Combine(Path, relative);
            return rv;
        }

        /// <summary>
        /// Converts actual path to fake.
        /// </summary>
        /// <param name="actualPath">Actual path to file or directory.</param>
        /// <returns></returns>
        public string ToFakePath(string actualPath)
        {
            return actualPath.ReplaceFirst(Path, Name);
        }
    }

    public class FileSystemPaths : List<FileSystemPath>
    {
        /// <summary>
        /// Checks if specified <paramref name="name"/> can be added to this list.
        /// Name must be unique per <see cref="FileSystemPaths"/>.
        /// </summary>
        /// <param name="name">Unique name.</param>
        /// <returns></returns>
        public bool CanAdd(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
                return false;

            if (!name.IsValidRootName())
                return false;

            return Find(name) == null;
        }

        /// <summary>
        /// Finds <see cref="FileSystemPath"/> by <see cref="FileSystemPath.Name"/>.
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public FileSystemPath Find(string name)
        {
            return this.FirstOrDefault(x => string.Equals(x.Name, name, StringComparison.InvariantCultureIgnoreCase));
        }

        /// <summary>
        /// Removes the first occurrence of <see cref="FileSystemPath"/> with specific <paramref name="name"/>. 
        /// </summary>
        /// <param name="name">Name of <seealso cref="FileSystemPath"/>.</param>
        /// <returns></returns>
        public bool Remove(string name)
        {
            var item = Find(name);
            if (item == null)
                return false;

            return Remove(item);
        }
    }
}
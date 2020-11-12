using System;
using System.Collections.Generic;
using System.Linq;

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
    }

    public class FileSystemPaths : List<FileSystemPath>
    {
        /// <summary>
        /// Checks if specified <paramref name="name"/> is already in use.
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public bool IsNameInUse(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
                return true;

            return Find(name) != null;
        }

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
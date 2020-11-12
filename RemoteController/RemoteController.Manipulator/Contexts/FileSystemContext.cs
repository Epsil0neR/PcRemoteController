using System;
using System.Collections.Generic;

namespace RemoteController.Manipulator.Contexts
{
    public class FileSystemContext
    {
        /// <summary>
        /// Dictionary of folder name to root.
        /// </summary>
        public FileSystemPaths Roots { get; set; }

        public Func<string, bool> FolderFilter { get; set; }

        public Func<string, bool> FileFilter { get; set; }

        public string FileSearchPattern { get; set; }
    }
}

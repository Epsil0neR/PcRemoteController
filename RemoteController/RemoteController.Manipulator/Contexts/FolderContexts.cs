using System;
using System.Collections.Generic;

namespace RemoteController.Manipulator.Contexts
{
    public class FolderContexts
    {
        public List<string> Roots { get; set; }

        public Func<string, bool> FolderFilter { get; set; }

        public Func<string, bool> FileFilter { get; set; }

        public string FileSearchPattern { get; set; }
    }
}

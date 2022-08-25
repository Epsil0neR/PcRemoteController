using System;

namespace RemoteController.Manipulator.Contexts;

public class FileSystemContext
{
    public FileSystemPaths Roots { get; set; }

    public Func<string, bool> FolderFilter { get; set; }

    public Func<string, bool> FileFilter { get; set; }

    public string FileSearchPattern { get; set; }
}
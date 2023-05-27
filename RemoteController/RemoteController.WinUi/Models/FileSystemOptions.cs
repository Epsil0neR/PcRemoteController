using RemoteController.Manipulator.Contexts;

namespace RemoteController.WinUi.Models;

public class FileSystemOptions
{
    public FileSystemPaths Roots { get; set; } = new FileSystemPaths();
}
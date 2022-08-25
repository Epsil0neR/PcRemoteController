using Epsiloner.OptionsModule;
using RemoteController.Manipulator.Contexts;

namespace RemoteController.Configs;

public class FileSystemConfig : IOptionsSection
{
    public FileSystemPaths Roots { get; set; } = new FileSystemPaths();
}
using Epsiloner.OptionsModule;
using RemoteController.Attributes;
using RemoteController.Manipulator.Contexts;

namespace RemoteController.Configs
{
    [ConfigSection("FileSystem")]
    public class FileSystemConfig : IOptionsSection
    {
        public FileSystemPaths Roots { get; set; } = new FileSystemPaths();
    }
}

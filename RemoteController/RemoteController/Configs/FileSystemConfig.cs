using Epsiloner.OptionsModule;
using RemoteController.Attributes;

namespace RemoteController.Configs
{
    [ConfigSection("FileSystem")]
    public class FileSystemConfig : IOptionsSection
    {
        public DictionaryOfStringToString Roots { get; set; } = new DictionaryOfStringToString();
    }
}

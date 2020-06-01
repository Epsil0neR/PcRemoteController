using System.Collections.Generic;
using RemoteController.Attributes;

namespace RemoteController.Configs
{
    [ConfigSection("FileSystem")]
    public class FileSystemConfig
    {
        public Dictionary<string, string> Roots { get; set; } = new Dictionary<string, string>();
    }
}

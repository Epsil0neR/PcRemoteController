using System.Collections.Generic;

namespace RemoteController.Service.Configs
{
    public class FileSystemConfig
    {
        public Dictionary<string, string> Roots { get; set; } = new Dictionary<string, string>();
    }
}

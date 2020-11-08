using Epsiloner.OptionsModule;
using RemoteController.Attributes;

namespace RemoteController.Configs
{
    [ConfigSection("Server")]
    public class ServerConfig : IOptionsSection
    {
        public bool AutoConnect { get; set; }
        public ushort Port { get; set; } = 6431;
    }
}
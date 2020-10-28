using RemoteController.Attributes;

namespace RemoteController.Configs
{
    [ConfigSection("Server")]
    public class ServerConfig
    {
        public bool AutoConnect { get; set; }
        public ushort Port { get; set; } = 6431;
    }
}
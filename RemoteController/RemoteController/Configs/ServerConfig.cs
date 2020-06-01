using RemoteController.Attributes;

namespace RemoteController.Configs
{
    [ConfigSection("Server")]
    public class ServerConfig
    {
        public ushort Port { get; set; } = 6431;
    }
}
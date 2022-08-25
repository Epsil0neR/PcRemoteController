using Epsiloner.OptionsModule;

namespace RemoteController.Configs;

public class ServerConfig : IOptionsSection
{
    public bool AutoConnect { get; set; }
    public ushort Port { get; set; } = 443;
    public bool StartupWithOs { get; set; }
}
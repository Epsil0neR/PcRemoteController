using System;
using System.Windows.Input;
using Epsiloner.OptionsModule;
using RemoteController.Configs;
using RemoteController.Utils;
using RemoteController.WebSocket;

namespace RemoteController.ViewModels.Pages;

public class OverviewPageViewModel : BasePageViewModel
{
    private bool _autoConnect;
    private bool _startupWithOs;
    public WsServer WsServer { get; } //TODO: Remove
    public ServerConfig ServerConfig { get; } //TODO: Remove
    public FileSystemConfig FileSystemConfig { get; } //TODO: Remove
    public Options Options { get; }


    public bool AutoConnect
    {
        get => _autoConnect;
        set
        {
            if (Set(ref _autoConnect, value) && ServerConfig.AutoConnect != value)
            {
                ServerConfig.AutoConnect = value;
                Options.Save(ServerConfig);
            }
        }
    }

    public bool StartupWithOs
    {
        get => _startupWithOs;
        set
        {
            if (Set(ref _startupWithOs, value))
            {
                var changed = ServerConfig.StartupWithOs != value;
                ServerConfig.StartupWithOs = value;
                Options.Save(ServerConfig);

                if (!changed)
                    return;

                if (value)
                    AppStartupUtils.AddToStartup();
                else
                    AppStartupUtils.RemoveFromStartup();
            }
        }
    }

    public OverviewPageViewModel(
        WsServer wsServer,
        ServerConfig serverConfig,
        FileSystemConfig fileSystemConfig,
        Options options)
        : base(PageName.Overview)
    {
        WsServer = wsServer ?? throw new ArgumentNullException(nameof(wsServer));
        ServerConfig = serverConfig ?? throw new ArgumentNullException(nameof(serverConfig));
        FileSystemConfig = fileSystemConfig ?? throw new ArgumentNullException(nameof(fileSystemConfig));
        Options = options;

        AutoConnect = ServerConfig.AutoConnect;
        StartupWithOs = ServerConfig.StartupWithOs;
    }

    /// <summary>
    /// TODO: Count of currently connected clients.
    /// </summary>
    public int Connections { get; }

    public bool IsServerRunning { get; }
    public ICommand StopServerCommand { get; }
    public ICommand StartServerCommand { get; }
}
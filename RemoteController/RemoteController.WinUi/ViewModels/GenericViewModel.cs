using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using RemoteController.WebSocket;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Utils;

namespace RemoteController.WinUi.ViewModels;

public class GenericViewModel : ObservableRecipient
{
    private readonly IWritableOptions<ServerOptions> _serverOptions;
    private bool _autoStartup;
    private int _serverPort;

    public WsServer Server { get; }

    public GenericViewModel(
        IWritableOptions<ServerOptions> serverOptions,
        WsServer server
        )
    {
        _serverOptions = serverOptions;
        _autoStartup = WindowsUtils.IsAutoStartupEnabled();
        Server = server;
        _serverPort = server.Http.Port;

        ToggleAutoStartupCommand = new RelayCommand(ToggleAutoStartup);

        Server.Started += ServerOnStartedStopped;
        Server.Stopped += ServerOnStartedStopped;
    }

    public bool AutoStartup
    {
        get => _autoStartup;
        set
        {
            if (value)
                WindowsUtils.EnableAutoStartup();
            else
                WindowsUtils.DisableAutoStartup();

            _autoStartup = value;
            OnPropertyChanged();
        }
    }

    public ICommand ToggleAutoStartupCommand { get; }

    public bool IsServerRunning
    {
        get => Server.IsStarted;
        set
        {
            if (value)
                Server.StartServer();
            else
                Server.StopServer();
            OnPropertyChanged();
        }
    }

    public bool IsServerStartsWithApp
    {
        get => _serverOptions.Value.StartWithApp;
        set
        {
            _serverOptions.Update(o => o.StartWithApp = value);
            OnPropertyChanged();
        }
    }

    public int ServerPort
    {
        get => _serverPort;
        set
        {
            if (value == _serverPort) 
                return;

            _serverPort = value;
            _serverOptions.Update(o => o.Port = value);
            OnPropertyChanged();
            OnPropertyChanged(nameof(IsServerPortChanged));
        }
    }

    public bool IsServerPortChanged => ServerPort != Server.Http.Port;

    private void ToggleAutoStartup()
    {
        AutoStartup = !AutoStartup;
    }

    private void ServerOnStartedStopped(object? sender, EventArgs e)
    {
        OnPropertyChanged(nameof(IsServerRunning));
    }
}

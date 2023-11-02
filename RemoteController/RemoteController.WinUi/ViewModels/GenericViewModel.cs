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
    private readonly WsServer _server;
    private bool _autoStartup;

    public WsServer Server => _server;

    public GenericViewModel(
        IWritableOptions<ServerOptions> serverOptions,
        WsServer server
        )
    {
        _serverOptions = serverOptions;
        _server = server;
        _autoStartup = WindowsUtils.IsAutoStartupEnabled();

        ToggleAutoStartupCommand = new RelayCommand(ToggleAutoStartup);

        _server.Started += ServerOnStartedStopped;
        _server.Stopped += ServerOnStartedStopped;
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
        get => _server.IsStarted;
        set
        {
            if (value)
                _server.StartServer();
            else
                _server.StopServer();
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

    private void ToggleAutoStartup()
    {
        AutoStartup = !AutoStartup;
    }

    private void ServerOnStartedStopped(object? sender, EventArgs e)
    {
        OnPropertyChanged(nameof(IsServerRunning));
    }
}

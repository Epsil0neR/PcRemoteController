using System.Windows.Input;
using RemoteController.WebSocket;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Utils;

namespace RemoteController.WinUi.ViewModels;

public class GenericViewModel : ObservableRecipient
{
    private readonly IWritableOptions<ServerOptions> _serverOptions;
    private bool _autoStartup;

    public WsServer Server { get; }

    public GenericViewModel(
        IWritableOptions<ServerOptions> serverOptions,
        WsServer server
        )
    {
        _serverOptions = serverOptions;
        _autoStartup = WindowsUtils.IsAutoStartupEnabled();
        Server = server;

        ToggleAutoStartupCommand = new RelayCommand(ToggleAutoStartup);
        UndoPortChangeCommand = new RelayCommand(UndoPortChange);

        Server.Started += ServerOnStartedStopped;
        Server.Stopped += ServerOnStartedStopped;
    }

    public ICommand ToggleAutoStartupCommand { get; }

    public ICommand UndoPortChangeCommand { get; }

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
        get => _serverOptions.Value.Port;
        set
        {
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

    private void UndoPortChange()
    {
        ServerPort = Server.Http.Port;
    }

    private void ServerOnStartedStopped(object? sender, EventArgs e)
    {
        OnPropertyChanged(nameof(IsServerRunning));
    }
}

using RemoteController.WebSocket;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace RemoteController.WinUi.WebHosting;

public class WebSocketHosting : IHostedService
{
    private bool _wasRunning;

    public WsServer WebSocketServer { get; }
    public IWritableOptions<ServerOptions> Options { get; }

    public WebSocketHosting(WsServer webSocketServer, IWritableOptions<ServerOptions> options)
    {
        WebSocketServer = webSocketServer;
        Options = options;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        WebSocketServer.ClientConnected += ServerOnClientConnected;
        if (Options.Value.StartWithApp || _wasRunning)
        {
            WebSocketServer.StartServer();
        }
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        WebSocketServer.ClientConnected -= ServerOnClientConnected;
        _wasRunning = WebSocketServer.IsStarted;
        WebSocketServer.StopServer();
    }

    private static void ServerOnClientConnected(object? sender, EventArgs e)
    {
        var socket = sender as IWsSocket;
        if (socket is not WebSocketBehavior behavior)
            return;

        var task = Task.Delay(1000);
        task.ConfigureAwait(false);
        task.ContinueWith(t =>
        {
            if (behavior?.State != WebSocketState.Open)
                return;

            //TODO: Priority #1
            //if (IoC.Container.IsRegistered<InformersManager>())
            //{
            //    var informersManager = IoC.Resolve<InformersManager>();
            //    informersManager.Informers.Send(socket);
            //}
        });
    }
}
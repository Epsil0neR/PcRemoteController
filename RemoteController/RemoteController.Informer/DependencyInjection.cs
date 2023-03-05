using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using RemoteController.WebSocket;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace RemoteController.Informer;

public static class DependencyInjection
{
    public static IServiceCollection AddInformerModule(this IServiceCollection sc) => sc
        .AddSingleton<CommandsInformer>()
        .AddSingleton<SoundInformer>()
        .AddSingleton(InformersManagerFactory)
        ;

    private static InformersManager InformersManagerFactory(IServiceProvider provider)
    {
        var informersManager = new InformersManager();
        var server = provider.GetRequiredService<WsServer>();
        informersManager.InformerChanged += (_, informer) => informer.Send(server);
        informersManager.Start();

        server.ClientConnected += ServerOnClientConnected;

        return informersManager;
    }

    private static void ServerOnClientConnected(object? sender, EventArgs e)
    {
        var socket = sender as IWsSocket;
        if (!(socket is WebSocketBehavior behavior))
            return;

        var task = Task.Delay(1000);
        task.ConfigureAwait(false);
        task.ContinueWith(t =>
        {
            if (behavior?.State != WebSocketState.Open)
                return;

            var informersManager = IoC.TryResolve<InformersManager>();
            informersManager?.Informers.Send(socket);
        });
    }
}
using System;
using Microsoft.Extensions.DependencyInjection;
using NLog;
using RemoteController.Services;
using WebSocketSharp.Server;

namespace RemoteController.WebSocket;

public static class DependencyInjection
{
    public static IServiceCollection AddWebSocketModule(this IServiceCollection sc) => sc
        .AddSingleton(WsServerFactory)
        .AddSingleton(WsServiceFactory)
        ;

    private static WsServer WsServerFactory(IServiceProvider provider)
    {
        var httpServer = provider.GetRequiredService<HttpServer>();
        var server = new WsServer(httpServer, "/Testing");

        return server;
    }

    private static WsService WsServiceFactory(IServiceProvider provider)
    {
        var wsServer = provider.GetRequiredService<WsServer>();
        var logger = provider.GetRequiredService<Logger>();
        var rv = new WsService(wsServer, logger);

        rv.RegisterDataTypeForAction<string>("Auth");
        rv.RegisterHandlerForAction("Auth", AuthMessageHandler);
        rv.AddActionFilter(AuthenticationCheck);

        return rv;
    }

    /// <summary>
    /// Checks if message can be handler vai <see cref="RemoteController.WebSocket.WsService.RegisterHandlerForAction"/>.
    /// </summary>
    /// <param name="msg">Message</param>
    /// <returns></returns>
    private static bool AuthenticationCheck(Message msg)
    {
        var rv = msg.Sender.IsAuthenticated || msg.Type != MessageType.Request || msg.ActionName.Equals("Auth", StringComparison.CurrentCultureIgnoreCase);
        var logger = IoC.Resolve<Logger>();

        if (!rv)
            logger.Warn($"Received unauthorized message: Sender:{msg.Sender}, Action:{msg.ActionName}, Type:{msg.Type}.");

        return rv;
    }

    /// <summary>
    /// Authentication message handler.
    /// </summary>
    /// <param name="msg"></param>
    private static void AuthMessageHandler(Message msg)
    {
        var auth = IoC.Resolve<IAuthService>();
        var token = msg.Data?.ToString();

        // Check if sender already authenticated - in that case return error message to sender and exit message handler.
        if (auth.IsAuthorized(msg.Sender.AuthToken))
        {
            var m = new Message
            {
                ActionName = msg.ActionName,
                Hash = msg.Hash,
                Data = "Already authenticated connection.",
                Type = MessageType.Error
            };
            msg.Sender.Send(m);
            return;
        }

        // If no token provided - generate new one and send back to client.
        if (!auth.IsAuthorized(token))
        {
            token = Guid.NewGuid().ToString("N");

            var m = new Message
            {
                ActionName = msg.ActionName,
                Hash = msg.Hash,
                Data = token,
                Type = MessageType.Response
            };
            msg.Sender.Send(m);
        }

        if (auth.TryAuthorize(token))
            msg.Sender.Auth(token);
        else if (auth.Register(token, string.Empty, string.Empty))
            msg.Sender.Auth(token);
    }
}
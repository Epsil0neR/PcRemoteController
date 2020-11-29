using System;
using System.Threading.Tasks;
using RemoteController.Configs;
using RemoteController.Informer;
using RemoteController.Manipulator;
using RemoteController.Services;
using RemoteController.WebSocket;
using Unity;
using WebSocketSharp;
using WebSocketSharp.Server;
using Level = NLog.LogLevel;
using Logger = NLog.Logger;

namespace RemoteController.IoCs
{
    /// <summary>
    /// IoC factories
    /// </summary>
    internal static class Factories
    {
        public static WsService WsService(IUnityContainer c)
        {
            var wsServer = c.Resolve<WsServer>();
            var rv = new WsService(wsServer);

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
            return msg.Sender.IsAuthenticated || msg.Type != MessageType.Request || msg.ActionName.Equals("Auth", StringComparison.CurrentCultureIgnoreCase);
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

        public static WsServer WsServer(IUnityContainer c)
        {
            var httpServer = c.Resolve<HttpServer>();
            var server = new WsServer(httpServer, "/Testing");
            server.ClientConnected += ServerOnClientConnected;
            return server;
        }

        private static void ServerOnClientConnected(object sender, EventArgs e)
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

                if (IoC.Container.IsRegistered<InformersManager>())
                {
                    var informersManager = IoC.Resolve<InformersManager>();
                    informersManager.Informers.Send(socket);
                }
            });
        }

        public static HttpServer HttpServer(IUnityContainer c)
        {
            var config = c.Resolve<ServerConfig>();
            var log = IoC.Resolve<Logger>();
            var http = new HttpServer(config.Port)
            {
                KeepClean = true
            };

            http.Log.Output = (data, s) =>
            {
                var level = data.Level switch
                {
                    LogLevel.Trace => Level.Debug,
                    LogLevel.Debug => Level.Debug,
                    LogLevel.Info => Level.Info,
                    LogLevel.Warn => Level.Warn,
                    LogLevel.Error => Level.Error,
                    LogLevel.Fatal => Level.Fatal,
                    _ => Level.Off
                };
                var m = data.Caller?.GetMethod();
                var separator = data.Message.Contains(Environment.NewLine) ? Environment.NewLine : " | ";
                var text = $"{m?.DeclaringType?.Name ?? "unknown"}.{m?.Name ?? "unknown"}{separator}{data.Message}";
                log.Log(level, text);
            };
#if DEBUG
            http.DocumentRootPath = "../../../../Web";
#else
            http.DocumentRootPath = "./Web";
#endif
            http.OnGet += Http.OnGetSinglePage;
            return http;
        }

        /// <summary>
        /// Depends on <see cref="RemoteController.WebSocket.WsServer"/>.
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        public static InformersManager InformersManager(IUnityContainer c)
        {
            var informersManager = new InformersManager();
            var server = c.Resolve<WsServer>();
            informersManager.InformerChanged +=
                (sender, informer) => informer.Send(server);

            informersManager.Start();

            return informersManager;
        }

        public static ManipulatorsManager ManipulatorsManager(IUnityContainer c)
        {
            var manipulatorsManager = new ManipulatorsManager(Log.Logger);
            manipulatorsManager.ItemStateChanged += ManipulatorsManagerOnItemStateChanged;
            return manipulatorsManager;
        }

        private static void ManipulatorsManagerOnItemStateChanged(object sender, ManipulatorsItemEventArgs e)
        {
            var s = IoC.Resolve<WsService>();
            if (e.Inserted)
                s.RegisterHandlerForAction(e.Manipulation.Name, ManipulationHandler);
            else
                s.UnregisterHandlerForAction(e.Manipulation.Name, ManipulationHandler);
        }

        private static void ManipulationHandler(Message msg)
        {
            if (msg.Type != MessageType.Request)
            {
                msg.Sender.Send(new Message
                {
                    ActionName = msg.ActionName,
                    Hash = msg.Hash,
                    Data = "Only Request message mode support for messages from clients",
                    Type = MessageType.Error
                });
                return;
            }

            var manager = IoC.Resolve<ManipulatorsManager>();
            var data = manager.TryExecute(msg.ActionName, msg.Data?.ToString());

            msg.Sender.Send(new Message
            {
                ActionName = msg.ActionName,
                Hash = msg.Hash,
                Data = data,
                Type = MessageType.Response
            });
        }
    }
}
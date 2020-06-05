using System;
using System.Text;
using System.Threading.Tasks;
using RemoteController.Configs;
using RemoteController.Informer;
using RemoteController.Manipulator;
using RemoteController.WebSocket;
using Unity;
using WebSocketSharp;
using WebSocketSharp.Net;
using WebSocketSharp.Server;
using Logger = NLog.Logger;
using Level = NLog.LogLevel;

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
            return rv;
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

        public static InformersManager InformersManager(IUnityContainer c)
        {
            var informersManager = new InformersManager();
            informersManager.InformerChanged += OnInformerChanged;
            return informersManager;
        }

        public static ManipulatorsManager ManipulatorsManager(IUnityContainer c)
        {
            var manipulatorsManager = new ManipulatorsManager();
            manipulatorsManager.ItemStateChanged += ManipulatorsManagerOnItemStateChanged;
            return manipulatorsManager;
        }

        private static void OnInformerChanged(object sender, BaseInformer informer)
        {
            var server = IoC.Resolve<WsServer>();
            informer.Send(server);
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

    /// <summary>
    /// HTTP server handlers.
    /// </summary>
    internal static class Http
    {
        public static void OnGetMultiPages(object sender, HttpRequestEventArgs e)
        {
            var req = e.Request;
            var res = e.Response;
            var path = req.Url.AbsolutePath;
            if (path == "/")
                path += "index.html";

            if (!e.TryReadFile(path, out var contents))
            {
                res.StatusCode = (int)HttpStatusCode.NotFound;
                return;
            }

            if (path.EndsWith(".html"))
            {
                res.ContentType = "text/html";
                res.ContentEncoding = Encoding.UTF8;
            }
            else if (path.EndsWith(".js"))
            {
                res.ContentType = "application/javascript";
                res.ContentEncoding = Encoding.UTF8;
            }
            else if (path.EndsWith(".css"))
            {
                res.ContentType = "text/css";
                res.ContentEncoding = Encoding.UTF8;
            }

            res.WriteContent(contents);
        }

        public static void OnGetSinglePage(object sender, HttpRequestEventArgs e)
        {
            var req = e.Request;
            var res = e.Response;
            var path = req.Url.AbsolutePath;

            if (e.TryReadFile(path, out var contents))
            {
                if (path.EndsWith(".html"))
                {
                    res.ContentType = "text/html";
                    res.ContentEncoding = Encoding.UTF8;
                }
                else if (path.EndsWith(".js"))
                {
                    res.ContentType = "application/javascript";
                    res.ContentEncoding = Encoding.UTF8;
                }
                else if (path.EndsWith(".css"))
                {
                    res.ContentType = "text/css";
                    res.ContentEncoding = Encoding.UTF8;
                }
            }
            else if (e.TryReadFile("/index.html", out contents))
            {
                res.ContentType = "text/html";
                res.ContentEncoding = Encoding.UTF8;
            }
            else
            {
                res.StatusCode = (int)HttpStatusCode.NotFound;
                return;
            }

            res.WriteContent(contents);
        }
    }

}
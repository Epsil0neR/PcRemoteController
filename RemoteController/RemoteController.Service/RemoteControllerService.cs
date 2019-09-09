using System;
using RemoteController.Manipulator;
using RemoteController.WebSocket;
using Topshelf;
using Topshelf.Logging;
using WebSocketSharp.Server;

namespace RemoteController.Service
{
    public class RemoteControllerService : ServiceControl
    {
        //THIS LINE IS IMPORTANT - this is how we get logger.
        public LogWriter Logger { get; }

        public ManipulatorsManager Manipulators { get; }
        public WsServer Server { get; }
        public WsService Service { get; }


        public RemoteControllerService(LogWriter logger)
        {

            Logger = logger ?? HostLogger.Get<RemoteControllerService>();
            Manipulators = new ManipulatorsManager();
            Http = new HttpServer(6431);
            Server = new WsServer(Http, "/Testing");
            Service = new WsService(Server);

            Configurator.Configure(Manipulators);
            Configurator.Configure(Service, Manipulators);
            Configurator.Web(Http);
        }

        public HttpServer Http { get; }


        public bool Start(HostControl hostControl)
        {
            Configurator.SetContexts(Manipulators);
            Server.StartServer();
            Console.WriteLine($"Starting WS server: {Server.IsStarted}");
            return true;
        }

        public bool Stop(HostControl hostControl)
        {
            Server.StopServer();
            Console.WriteLine($"Stopping WS server: {!Server.IsStarted}");
            Configurator.ClearContexts(Manipulators);
            return true;
        }
    }
}
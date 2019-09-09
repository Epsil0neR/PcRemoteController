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
        public HttpServer Http { get; }

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

        public bool Start(HostControl hostControl)
        {
            Console.WriteLine("Starting service...");
            Configurator.SetContexts(Manipulators);
            Server.StartServer();
            Console.WriteLine($"Started WS server? {Server.IsStarted}");

            return true;
        }

        public bool Stop(HostControl hostControl)
        {
            Console.WriteLine("Stopping service...");
            Server.StopServer();
            Configurator.ClearContexts(Manipulators);
            Console.WriteLine($"Stopped WS server: {!Server.IsStarted}");

            return true;
        }
    }
}
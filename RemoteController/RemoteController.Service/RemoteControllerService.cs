using System;
using System.Linq;
using Epsiloner.Collections;
using RemoteController.Informer;
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
        public ServiceBinding ServiceBinding { get; }
        public ObservableCollection<BaseInformer> Informers { get; }

        public RemoteControllerService(LogWriter logger)
        {
            Logger = logger ?? HostLogger.Get<RemoteControllerService>();
            Manipulators = new ManipulatorsManager();
            Http = new HttpServer(6431);
            Server = new WsServer(Http, "/Testing");
            Service = new WsService(Server);
            ServiceBinding = new ServiceBinding(Service, Manipulators);

            Informers = new ObservableCollection<BaseInformer>();
            Informers.RegisterHandler(InformersHandler, true);

            Configurator.Configure(Manipulators, Service);
            Configurator.Web(Http);
            Configurator.Configure(Informers);
        }

        private void InformersHandler(bool inserted, BaseInformer item, int index)
        {
            if (inserted)
            {
                var n = item.Name;
                if (Informers.Count(x => string.Equals(n, x.Name, StringComparison.InvariantCultureIgnoreCase)) > 1)
                    throw new InvalidOperationException("Informer with same name already registered.");

                item.Changed += InformerOnChanged;
            }
            else
            {
                item.Changed -= InformerOnChanged;
            }
        }

        private void InformerOnChanged(object sender, EventArgs e)
        {
            var informer = (BaseInformer)sender;
            var m = new Message
            {
                ActionName = $"Informer.{informer.Name}",
                Type = MessageType.Notification,
                Data = informer
            };

            Server.Broadcast(m);
        }


        public bool Start(HostControl hostControl)
        {
            Console.WriteLine("Starting service...");
            Configurator.SetContexts(Manipulators);
            Server.StartServer();

            var p = Server.IsStarted ? "started" : "failed to start";
            Console.WriteLine($"WebSocket server {p}");

            return true;
        }

        public bool Stop(HostControl hostControl)
        {
            Console.WriteLine("Stopping service...");
            Server.StopServer();
            Configurator.ClearContexts(Manipulators);

            var p = !Server.IsStarted ? "shut down" : "failed to shut down";
            Console.WriteLine($"WebSocket server {p}");

            return true;
        }
    }
}
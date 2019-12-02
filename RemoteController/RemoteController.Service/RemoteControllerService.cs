using System;
using Microsoft.Extensions.Configuration;
using RemoteController.Informer;
using RemoteController.Manipulator;
using RemoteController.Service.Configs;
using RemoteController.WebSocket;
using Topshelf;
using Topshelf.Logging;
using WebSocketSharp.Server;

namespace RemoteController.Service
{
    public class RemoteControllerService : ServiceControl
    {
        public IConfiguration Config { get; }

        //THIS LINE IS IMPORTANT - this is how we get logger.
        public LogWriter Logger { get; }
        public ManipulatorsManager Manipulators { get; }
        public WsServer Server { get; }
        public WsService Service { get; }
        public HttpServer Http { get; }
        public ServiceBinding ServiceBinding { get; }
        public InformersManager InformersManager { get; }
        public FileSystemConfig FileSystemConfig { get; }
        public ServerConfig ServerConfig { get; }

        public RemoteControllerService(LogWriter logger, IConfiguration config)
        {
            Logger = logger ?? HostLogger.Get<RemoteControllerService>();
            Config = config ?? throw new ArgumentNullException(nameof(config));

            FileSystemConfig = new FileSystemConfig();
            ServerConfig = new ServerConfig();
            config.GetSection("FileSystem").Bind(FileSystemConfig);
            config.GetSection("Server").Bind(ServerConfig);

            Manipulators = new ManipulatorsManager();
            Http = new HttpServer(ServerConfig.Port) { KeepClean = false };
            Server = new WsServer(Http, "/Testing");
            Service = new WsService(Server);
            ServiceBinding = new ServiceBinding(Service, Manipulators);
            InformersManager = new InformersManager();
            InformersManager.InformerChanged += InformersManagerOnInformerChanged;
            Configurator.Configure(InformersManager);
            Configurator.SetContexts(Manipulators, FileSystemConfig);
            Configurator.Configure(Manipulators, Service, InformersManager);
            Configurator.Web(Http);
        }

        private void InformersManagerOnInformerChanged(object sender, BaseInformer informer)
        {
            informer.Send(Server);
        }

        public bool Start(HostControl hostControl)
        {
            Console.WriteLine("Starting service...");
            Configurator.SetContexts(Manipulators, FileSystemConfig);
            Server.StartServer();

            var p = Server.IsStarted ? "started" : "failed to start";
            Console.WriteLine($"WebSocket server {p}");

            InformersManager.Start();

            return true;
        }

        public bool Stop(HostControl hostControl)
        {
            Console.WriteLine("Stopping service...");
            Server.StopServer();
            Configurator.ClearContexts(Manipulators);

            var p = !Server.IsStarted ? "shut down" : "failed to shut down";
            Console.WriteLine($"WebSocket server {p}");

            InformersManager.Stop();

            return true;
        }
    }
}
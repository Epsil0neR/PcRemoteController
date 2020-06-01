using System;
using Microsoft.Extensions.Configuration;
using NLog;
using RemoteController.Informer;
using RemoteController.Manipulator;
using RemoteController.Service.Configs;
using RemoteController.WebSocket;
using Topshelf;
using WebSocketSharp.Server;

namespace RemoteController.Service
{
    public class RemoteControllerService
    {
        public Logger Logger { get; }
        public ManipulatorsManager Manipulators { get; }
        public WsServer Server { get; }
        public WsService Service { get; }
        public HttpServer Http { get; }
        public ServiceBinding ServiceBinding { get; }
        public InformersManager InformersManager { get; }
        public FileSystemConfig FileSystemConfig { get; }
        public ServerConfig ServerConfig { get; }

        public RemoteControllerService(Logger logger, IConfiguration config)
            : this(logger, GetFileSystemConfig(config), GetServerConfig(config))
        {
        }

        public RemoteControllerService(Logger logger, FileSystemConfig fileSystemConfig, ServerConfig serverConfig)
        {
            Logger = logger ?? throw new ArgumentNullException(nameof(logger));
            FileSystemConfig = fileSystemConfig ?? throw new ArgumentNullException(nameof(fileSystemConfig));
            ServerConfig = serverConfig ?? throw new ArgumentNullException(nameof(serverConfig));

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
            Configurator.Web(Http, Logger);
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

        private static FileSystemConfig GetFileSystemConfig(IConfiguration configuration)
        {
            var rv = new FileSystemConfig();
            configuration.GetSection("FileSystem").Bind(rv);
            return rv;
        }
        private static ServerConfig GetServerConfig(IConfiguration configuration)
        {
            var rv = new ServerConfig();
            configuration.GetSection("Server").Bind(rv);
            return rv;
        }
    }
}
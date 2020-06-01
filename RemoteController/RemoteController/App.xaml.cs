using System.Diagnostics;
using System.IO;
using WindowsInput;
using Microsoft.Extensions.Configuration;
using RemoteController.Configs;
using RemoteController.Informer;
using RemoteController.IoCs;
using RemoteController.Manipulator;
using RemoteController.Manipulator.Contexts;
using RemoteController.Service;
using RemoteController.WebSocket;
using WebSocketSharp.Server;

namespace RemoteController
{
    public partial class App
    {
        public App()
        {
            DomainExceptionHandler.HandleDomainExceptions();
            ConfigureIoC();

            ConfigureInformers();
            ConfigureManipulatorContexts();

            //TODO: Line 45: Configurator.Configure(Manipulators, Service, InformersManager);
            //TODO: Line 46: Configurator.Web(Http, Logger);

            var http = IoC.Resolve<HttpServer>();
            http.Start();
            var server = IoC.Resolve<WsServer>();
            server.StartServer();
        }

        /// <summary>
        /// Log method used by NLog. DO NOT REMOVE IT unless it also removed in NLog.config file.
        /// </summary>
        /// <param name="level"></param>
        /// <param name="message"></param>
        // ReSharper disable once UnusedMember.Global
        public static void LogMethod(string level, string message)
        {
            // TODO;
        }

        private void ConfigureIoC()
        {
            IoC.RegisterInstance(Log.Logger);

            var c = CreateConfiguration();
            IoC.RegisterInstance(c);

            var fsc = new FileSystemConfig();
            c.GetSection("FileSystem").Bind(fsc);
            IoC.RegisterInstance(fsc);

            var sc = new ServerConfig();
            c.GetSection("Server").Bind(sc);
            IoC.RegisterInstance(sc);

            IoC.Register<IManipulatorsManager, ManipulatorsManager>();
            IoC.RegisterSingleton(Factories.ManipulatorsManager);
            IoC.RegisterSingleton(Factories.HttpServer);
            IoC.RegisterSingleton(Factories.WsServer);
            IoC.RegisterSingleton(Factories.WsService);
            IoC.RegisterSingleton(Factories.InformersManager);

            //TODO: Get rid of RemoteControl.Service project reference:
            IoC.RegisterSingleton<RemoteControllerService>();
        }

        private static void ConfigureInformers()
        {
            var manager = IoC.Resolve<InformersManager>();
            manager.Register<SoundInformer>();
        }

        private static void ConfigureManipulatorContexts()
        {
            var manager = IoC.Resolve<IManipulatorsManager>();
            var input = IoC.Resolve<InputSimulator>();
            manager.SetContext(input.Keyboard);
            manager.SetContext(input.Mouse);

            var fsc = manager.GetContext<FileSystemContext>();
            var config = IoC.Resolve<FileSystemConfig>();
            if (fsc == null)
            {
                fsc = IoC.Resolve<FileSystemContext>();
                manager.SetContext(fsc);
            }
            fsc.Roots = config.Roots;
        }

        /// <summary>
        /// Configuration from JSON file.
        /// </summary>
        /// <returns></returns>
        private IConfiguration CreateConfiguration()
        {
            var proc = Process.GetCurrentProcess();
            var loc = proc.MainModule?.FileName;
            var dir = Path.GetDirectoryName(loc);

            var configuration = new ConfigurationBuilder()
                .SetBasePath(dir)
                .AddJsonFile("settings.config", true, true)
                .Build();
            return configuration;
        }
    }
}

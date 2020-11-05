using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Windows;
using WindowsInput;
using Epsiloner.Wpf.Attributes;
using Microsoft.Extensions.Configuration;
using NLog;
using RemoteController.Attributes;
using RemoteController.Configs;
using RemoteController.Configurations;
using RemoteController.Informer;
using RemoteController.IoCs;
using RemoteController.Manipulator;
using RemoteController.Manipulator.Contexts;
using RemoteController.Services;
using RemoteController.ViewModels;
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
            ViewForAttribute.ProceedRelatedAssemblies();

            ConfigureInformers();
            ConfigureManipulatorContexts();

            //TODO: Line 45: Configurator.Configure(Manipulators, Service, InformersManager);
            //TODO: Line 46: Configurator.Web(Http, Logger);
        }

        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            ManipulationConfiguration.Configure();

            var serverConfig = IoC.Resolve<ServerConfig>();

            if (serverConfig.AutoConnect) //TODO: Add way to start and stop manually server from GUI.
            {
                IoC.Resolve<HttpServer>().Start();
                IoC.Resolve<WsService>().Server.StartServer();
            }
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
            IoC.RegisterInstance<ILogger>(Log.Logger);

            var configuration = CreateConfiguration();
            IoC.RegisterInstance(configuration);
            ConfigSectionAttribute.Init(configuration);

            IoC.Register<IManipulatorsManager, ManipulatorsManager>();
            IoC.RegisterSingleton<IAuthService, AuthService>();
            IoC.RegisterSingleton(Factories.ManipulatorsManager);
            IoC.RegisterSingleton(Factories.HttpServer);
            IoC.RegisterSingleton(Factories.WsServer);
            IoC.RegisterSingleton(Factories.WsService);
            IoC.RegisterSingleton(Factories.InformersManager);
            IoC.RegisterSingleton<SoundInformer>();

            IoC.Register<IPageViewModel[]>(c => IoC.ResolveAll<IPageViewModel>().ToArray());
            IoC.Register<IEnumerable<IPageViewModel>>(c => IoC.ResolveAll<IPageViewModel>().ToList());
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
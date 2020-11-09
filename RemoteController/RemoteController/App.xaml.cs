using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Windows;
using WindowsInput;
using Epsiloner.OptionsModule;
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
                IoC.Resolve<WsServer>().StartServer();
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
            IoC.RegisterInstance(Dispatcher);
            IoC.RegisterInstance(Log.Logger);
            IoC.RegisterInstance<ILogger>(Log.Logger);

            ConfigureOptions();

            IoC.Register<IManipulatorsManager, ManipulatorsManager>();
            IoC.RegisterSingleton<IAuthService, AuthService>();
            IoC.RegisterSingleton(Factories.ManipulatorsManager);
            IoC.RegisterSingleton(Factories.HttpServer);
            IoC.RegisterSingleton(Factories.WsServer);
            IoC.RegisterSingleton(Factories.WsService);
            IoC.RegisterSingleton(Factories.InformersManager);
            IoC.RegisterSingleton<SoundInformer>();

            IoC.Register<IPageViewModel[]>(c => IoC.ResolveAll<IPageViewModel>().OrderBy(x=>x.Priority).ToArray());
            IoC.Register<IEnumerable<IPageViewModel>>(c => IoC.ResolveAll<IPageViewModel>().OrderBy(x => x.Priority).ToList());
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

        private void ConfigureOptions()
        {
            var proc = Process.GetCurrentProcess();
            var loc = proc.MainModule?.FileName;
            var dir = Path.GetDirectoryName(loc);

            var path = Path.Combine(dir, "Options");
            var options = new Options(path, string.Empty)
            {
                HandlerForSectionLoad = HandlerForSectionLoad
            };
            options.Register<FileSystemConfig>();
            options.Register<ServerConfig>();

            Options.Current = options;
            IoC.RegisterInstance(options);
            IoC.RegisterInstance(options.Section<FileSystemConfig>());
            IoC.RegisterInstance(options.Section<ServerConfig>());
        }

        private static void HandlerForSectionLoad(Type type, Exception ex)
        {
            Log.Logger.Error(ex, $"Failed to load option section of type {type.FullName}");
        }
    }
}
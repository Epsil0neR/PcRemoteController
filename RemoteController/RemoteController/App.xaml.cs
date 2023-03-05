using Epsiloner.OptionsModule;
using Epsiloner.Wpf.Attributes;
using NLog;
using RemoteController.Configs;
using RemoteController.Configurations;
using RemoteController.Informer;
using RemoteController.IoCs;
using RemoteController.Manipulator;
using RemoteController.Manipulator.Contexts;
using RemoteController.Services;
using RemoteController.ViewModels;
using RemoteController.WebSocket;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Windows;
using Microsoft.Extensions.DependencyInjection;
using RemoteController.Keyboard;
using WindowsInput;
using RemoteController.Sound;
using RemoteController.ViewModels.Pages;

namespace RemoteController;

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

    protected override void OnExit(ExitEventArgs e)
    {
        IoC.Dispose();
        base.OnExit(e);
    }

    public static Stream GetIconStream() => typeof(App).Assembly.GetManifestResourceStream("RemoteController.icon.ico");

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
        IoC.CreateBuilder(sc =>
        {
            sc

                .AddTransient<MainViewModel>()

                .AddSingleton(Dispatcher)
                .AddSingleton(Log.Logger)
                .AddSingleton<ILogger>(Log.Logger)
                .AddSingleton<IManipulatorsManager, ManipulatorsManager>()
                .AddSingleton<IAuthService, AuthService>()
                .AddSingleton(Factories.ManipulatorsManager)
                .AddSingleton(Factories.HttpServer)
                .AddSingleton(Factories.WsServer)
                .AddSingleton(Factories.WsService)
                .AddSingleton(Factories.InformersManager)
                .AddSingleton<SoundInformer>()
                .AddSingleton<CommandsInformer>()
                .AddSingleton<PolicyConfigClient>()
                .AddSingleton<KeyboardHookManager>()
                .AddSingleton<ShortcutsService>()
                .AddSingleton<InputSimulator>()
                .AddSingleton<FileSystemContext>()
                
                .AddPages()
                .AddOptions()
                ;

            return sc.BuildServiceProvider();
        });
    }

    private static void ConfigureInformers()
    {
        var manager = IoC.Resolve<InformersManager>();
        manager.Register<SoundInformer>();
        manager.Register<CommandsInformer>();
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


}

public static class IoCBuilderExtensions
{
    public static IServiceCollection AddPages(this IServiceCollection sc)
    {
        sc.AddSingleton<CommandsPageViewModel>();
        sc.AddSingleton<OverviewPageViewModel>();
        sc.AddSingleton<PathsManagerPageViewModel>();
#if DEBUG
        sc.AddSingleton<PlayListPageViewModel>();
#endif
        sc.AddSingleton<SoundDevicesPageViewModel>();
        sc.AddSingleton<IPageViewModel[]>(provider =>
        {
            var pages = provider
                .ResolveAll<IPageViewModel>()
                .OrderBy(x => x.Name)
                .ToArray();

            return pages;
        });
        sc.AddTransient<IEnumerable<IPageViewModel>>(provider => provider.GetRequiredService<IPageViewModel[]>().ToList());
        return sc;
    }


    public static IServiceCollection AddOptions(this IServiceCollection serviceCollection)
    {
        var proc = Process.GetCurrentProcess();
        var loc = proc.MainModule?.FileName;
        var dir = Path.GetDirectoryName(loc)!;
        var path = Path.Combine(dir, "Options");
        var options = new Options(path, string.Empty)
        {
            HandlerForSectionLoad = HandlerForSectionLoad
        };

        options.Register<FileSystemConfig>();
        options.Register<ServerConfig>();
        options.Register<CommandsConfig>();
        options.Register<PlayListsConfig>();
        options.Register<SoundDevicesConfig>();
        options.Register<ShortcutServiceOptions>();

        Options.Current = options;
        serviceCollection.AddSingleton(options);
        serviceCollection.AddSingleton(options.Section<FileSystemConfig>());
        serviceCollection.AddSingleton(options.Section<ServerConfig>());
        serviceCollection.AddSingleton(options.Section<CommandsConfig>());
        serviceCollection.AddSingleton(options.Section<PlayListsConfig>());
        serviceCollection.AddSingleton(options.Section<SoundDevicesConfig>());
        serviceCollection.AddSingleton(options.Section<ShortcutServiceOptions>());

        return serviceCollection;
    }

    private static void HandlerForSectionLoad(Type type, Exception ex)
    {
        Log.Logger.Error(ex, $"Failed to load option section of type {type.FullName}");
    }
}
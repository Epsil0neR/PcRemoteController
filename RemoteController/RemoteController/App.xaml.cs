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
using System.IO;
using System.Windows;
using Microsoft.Extensions.DependencyInjection;
using RemoteController.Keyboard;
using WindowsInput;
using RemoteController.Sound;

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
                .AddSingleton(Dispatcher)
                .AddSingleton(Log.Logger)
                .AddSingleton<ILogger>(Log.Logger)
                .AddSingleton(Factories.HttpServer)

                .AddWebSocketModule()
                .AddInformerModule()
                .AddManipulatorModule()

                .AddSingleton<IAuthService, AuthService>()
                .AddSingleton<PolicyConfigClient>()
                .AddSingleton<KeyboardHookManager>()
                .AddSingleton<ShortcutsService>()
                .AddSingleton<InputSimulator>()
                
                .AddPages()
                .AddOptions()
                .AddTransient<MainViewModel>()
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
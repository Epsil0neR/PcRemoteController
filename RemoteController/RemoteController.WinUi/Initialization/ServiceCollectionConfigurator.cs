using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using Epsiloner.WinUi.Configurations;
using Epsiloner.WinUi.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RemoteController.Informer;
using RemoteController.Keyboard;
using RemoteController.Manipulator;
using RemoteController.Manipulator.Contexts;
using RemoteController.Services;
using RemoteController.Sound;
using RemoteController.WebSocket;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Core.Contracts.Services;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Core.Services;
using RemoteController.WinUi.Extensions;
using RemoteController.WinUi.HostedServices;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Notifications;
using RemoteController.WinUi.Services;
using RemoteController.WinUi.ViewModels;
using RemoteController.WinUi.Views;
using WebSocketSharp.Server;
using WindowsInput;
using Application = Microsoft.UI.Xaml.Application;
using RemoteController.WinUi.Configuration;

namespace RemoteController.WinUi.Initialization;

internal static class ServiceCollectionConfigurator
{
    /// <summary>
    /// Configures all options used in application from appsettings.json file.
    /// </summary>
    /// <param name="services"></param>
    /// <param name="context"></param>
    /// <returns></returns>
    public static IServiceCollection ConfigureOptions(this IServiceCollection services, HostBuilderContext context) => services
        .ConfigureWritable<LocalSettingsOptions>(context)
        .ConfigureWritable<GeneralOptions>(context)
        .ConfigureWritable<ServerOptions>(context)
        .ConfigureWritable<FileSystemOptions>(context)
        .ConfigureWritable<HotkeyGesturesOptions>(context)
    ;

    public static IServiceCollection AddCore(this IServiceCollection services) => services
        .AddSingleton<KeyboardHookManager>()
        .AddSingleton<PolicyConfigClient>();

    public static IServiceCollection AddWinUiCore(this IServiceCollection services) => services
        .AddSingleton<KeyboardHookService>()
        .AddSingleton<IHotkeysService, HotkeysService>()
        .AddSingleton<IHotkeyServiceConfiguration, HotkeyServiceConfiguration>();

    public static IServiceCollection AddServices(this IServiceCollection services) => services
        .AddSingleton<IAppNotificationService, AppNotificationService>()
        .AddSingleton<ILocalSettingsService, LocalSettingsService>()
        .AddSingleton<IThemeSelectorService, ThemeSelectorService>()
        .AddTransient<INavigationViewService, NavigationViewService>()
        .AddSingleton<IActivationService, ActivationService>()
        .AddSingleton<IPageService, PageService>()
        .AddSingleton<INavigationService, NavigationService>()
        .AddSingleton<IFileService, FileService>();

    public static IServiceCollection AddViewModels(this IServiceCollection services) => services
        .AddTransient<SettingsViewModel>()
        .AddTransient<HotkeysViewModel>()
        .AddTransient<SoundDevicesViewModel>()
        .AddTransient<CommandsViewModel>()
        .AddTransient<FoldersViewModel>()
        .AddTransient<GenericViewModel>()
        .AddTransient<ShellViewModel>();

    public static IServiceCollection AddViews(this IServiceCollection services) => services
        // By default all pages are added as Transient.
        .AddSingleton<SettingsPage>()
        .AddSingleton<HotkeysPage>()
        .AddSingleton<SoundDevicesPage>()
        .AddSingleton<CommandsPage>()
        .AddSingleton<FoldersPage>()
        .AddSingleton<GenericPage>()
        .AddTransient<ShellPage>();

    public static IServiceCollection AddWebHosting(this IServiceCollection services, IConfiguration configuration)
    {
        return services
            .AddSingleton(s => Factories.HttpServer(s, s.GetRequiredService<IWritableOptions<ServerOptions>>()))
            .AddSingleton(Factories.WsServer)
            .AddSingleton<WsService>()
            .AddHostedService<WebHosting>()
            ;
    }

    public static IServiceCollection AddInformers(this IServiceCollection services, IConfiguration configuration)
    {
        return services
            .AddSingleton<CommandsInformer>()
            .AddSingleton<SoundInformer>()
            .AddSingleton<InformersManager>(Factories.InformersManager)
            .AddHostedService<InformersHosting>()
            ;
    }

    public static IServiceCollection AddManipulators(this IServiceCollection services, IConfiguration configuration)
    {
        //TODO:
        return services
            .AddSingleton<InputSimulator>()
            .AddSingleton<FileSystemContext>()
            .AddSingleton<IManipulatorsManager, ManipulatorsManager>()
            .AddHostedService<ManipulatorsHosting>()
            ;
    }
}

internal static class Factories
{
    public static HttpServer HttpServer(IServiceProvider services, IWritableOptions<ServerOptions> options)
    {
        var logger = services.GetRequiredService<ILogger<HttpServer>>();
        var cert = new X509Certificate2(
            Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "RemoteController.pfx"),
            "{0x719dca02,0xb331,0x45fb,{0xb8,0xd1,0xbb,0x39,0xec,0x5d,0x39,0x8b}}");
        var http = new HttpServer(options.Value.Port, true)
        {
            KeepClean = true,
            SslConfiguration =
            {
                ServerCertificate = cert,
                EnabledSslProtocols = SslProtocols.Tls12
            },
            Log =
            {
                Output = (data, s) =>
                {
                    var level = data.Level switch
                    {
                        WebSocketSharp.LogLevel.Trace => LogLevel.Debug,
                        WebSocketSharp.LogLevel.Debug => LogLevel.Debug,
                        WebSocketSharp.LogLevel.Info => LogLevel.Information,
                        WebSocketSharp.LogLevel.Warn => LogLevel.Warning,
                        WebSocketSharp.LogLevel.Error => LogLevel.Error,
                        WebSocketSharp.LogLevel.Fatal => LogLevel.Critical,
                        _ => LogLevel.None
                    };
                    var m = data.Caller?.GetMethod();
                    var separator = data.Message.Contains(Environment.NewLine) ? Environment.NewLine : " | ";
                    var text = $"{m?.DeclaringType?.Name ?? "unknown"}.{m?.Name ?? "unknown"}{separator}{data.Message}";
                    logger.Log(level, text);
                }
            }
        };

#if DEBUG
        http.DocumentRootPath = "../../../../../Web"; // Works with unpackaged.
#else
            http.DocumentRootPath = "./Web";
#endif
        //http.OnGet += Http.OnGetSinglePage;
        return http;
    }

    public static WsServer WsServer(IServiceProvider services)
    {
        var httpServer = services.GetRequiredService<HttpServer>();
        var server = new WsServer(httpServer, "/Testing");
        //server.ClientConnected += ServerOnClientConnected;

        return server;
    }

    public static InformersManager InformersManager(IServiceProvider services)
    {
        var manager = new InformersManager();
        manager.Register<CommandsInformer>();
        manager.Register<SoundInformer>();
        return manager;
    }

    public static WsService WsService(IServiceProvider services)
    {
        var wsServer = services.GetRequiredService<WsServer>();
        var logger = services.GetRequiredService<ILogger<WsService>>();
        var rv = new WsService(wsServer, logger);

        rv.RegisterDataTypeForAction<string>("Auth");
        rv.RegisterHandlerForAction("Auth", AuthMessageHandler);
        rv.AddActionFilter(AuthenticationCheck);

        return rv;
    }

    /// <summary>
    /// Checks if message can be handler vai <see cref="RemoteController.WebSocket.WsService.RegisterHandlerForAction"/>.
    /// </summary>
    /// <param name="msg">Message</param>
    /// <returns></returns>
    private static bool AuthenticationCheck(Message msg)
    {
        var rv = msg.Sender.IsAuthenticated 
                 || msg.Type != MessageType.Request 
                 || msg.ActionName.Equals("Auth", StringComparison.CurrentCultureIgnoreCase);

        if (!rv)
        {
            // Migration to WinUI and MS Logging:
            //Log.Logger.Warn($"Received unauthorized message: Sender:{msg.Sender}, Action:{msg.ActionName}, Type:{msg.Type}.");
        }

        return rv;
    }

    /// <summary>
    /// Authentication message handler.
    /// </summary>
    /// <param name="msg"></param>
    private static void AuthMessageHandler(Message msg)
    {
        var auth = Application.Current.Resolve<IAuthService>();
        var token = msg.Data?.ToString();

        // Check if sender already authenticated - in that case return error message to sender and exit message handler.
        if (auth.IsAuthorized(msg.Sender.AuthToken))
        {
            var m = new Message
            {
                ActionName = msg.ActionName,
                Hash = msg.Hash,
                Data = "Already authenticated connection.",
                Type = MessageType.Error
            };
            msg.Sender.Send(m);
            return;
        }

        // If no token provided - generate new one and send back to client.
        if (!auth.IsAuthorized(token))
        {
            token = Guid.NewGuid().ToString("N");

            var m = new Message
            {
                ActionName = msg.ActionName,
                Hash = msg.Hash,
                Data = token,
                Type = MessageType.Response
            };
            msg.Sender.Send(m);
        }

        if (auth.TryAuthorize(token))
            msg.Sender.Auth(token);
        else if (auth.Register(token, string.Empty, string.Empty))
            msg.Sender.Auth(token);
    }
}

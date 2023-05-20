using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Core.Contracts.Services;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Core.Services;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Notifications;
using RemoteController.WinUi.Services;
using RemoteController.WinUi.ViewModels;
using RemoteController.WinUi.Views;
using WebSocketSharp.Server;

namespace RemoteController.WinUi.Initialization;

internal static class ServiceCollectionConfigurator
{
    /// <summary>
    /// Configures all options used in application.
    /// </summary>
    /// <param name="services"></param>
    /// <param name="context"></param>
    /// <returns></returns>
    public static IServiceCollection ConfigureOptions(this IServiceCollection services, HostBuilderContext context) => services
        .ConfigureWritable<LocalSettingsOptions>(context.Configuration.GetSection(nameof(LocalSettingsOptions)))
        .ConfigureWritable<GeneralOptions>(context)
        .ConfigureWritable<ServerOptions>(context);

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
        .AddTransient<SettingsPage>()
        .AddTransient<HotkeysPage>()
        .AddTransient<SoundDevicesPage>()
        .AddTransient<CommandsPage>()
        .AddTransient<FoldersPage>()
        .AddTransient<GenericPage>()
        .AddTransient<ShellPage>();

    [Obsolete("Not implemented yet!")]
    public static IServiceCollection AddHttpServer(this IServiceCollection services, IConfiguration configuration)
    {
        services
            .AddSingleton(s => Factories.HttpServer(s, configuration))
            ;

        //TODO:
        return services;
    }

    [Obsolete("Not implemented yet!")]
    public static IServiceCollection AddWebSocketServer(this IServiceCollection services, IConfiguration configuration)
    {
        //TODO:
        return services;
    }


    [Obsolete("Not implemented yet!")]
    public static IServiceCollection AddWebSocketService(this IServiceCollection services, IConfiguration configuration)
    {
        //TODO:
        return services;
    }


    [Obsolete("Not implemented yet!")]
    public static IServiceCollection AddInformers(this IServiceCollection services, IConfiguration configuration)
    {
        //TODO:
        return services;
    }

    [Obsolete("Not implemented yet!")]
    public static IServiceCollection AddManipulators(this IServiceCollection services, IConfiguration configuration)
    {
        //TODO:
        return services;
    }
}

internal static class Factories
{
    public static HttpServer HttpServer(IServiceProvider services, IConfiguration configuration)
    {
        //var config = c.Resolve<ServerConfig>();
        var logger = services.GetRequiredService<ILogger<HttpServer>>();
        var cert = new X509Certificate2(
            Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "RemoteController.pfx"),
            "{0x719dca02,0xb331,0x45fb,{0xb8,0xd1,0xbb,0x39,0xec,0x5d,0x39,0x8b}}");
        var http = new HttpServer(0, true) //TODO: Customize port.
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
        http.DocumentRootPath = "../../../../Web"; //TODO: Test relative path with WinUI.
#else
            http.DocumentRootPath = "./Web";
#endif
        //http.OnGet += Http.OnGetSinglePage;
        return http;
    }
}

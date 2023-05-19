using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.UI.Xaml;

using RemoteController.WinUi.Activation;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Helpers;
using RemoteController.WinUi.Initialization;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Views;
using Serilog;

namespace RemoteController.WinUi;

// To learn more about WinUI 3, see https://docs.microsoft.com/windows/apps/winui/winui3/.
public partial class App : Application
{
    private readonly ILogger<App> _logger;

    // The .NET Generic Host provides dependency injection, configuration, logging, and other services.
    // https://docs.microsoft.com/dotnet/core/extensions/generic-host
    // https://docs.microsoft.com/dotnet/core/extensions/dependency-injection
    // https://docs.microsoft.com/dotnet/core/extensions/configuration
    // https://docs.microsoft.com/dotnet/core/extensions/logging
    public IHost Host { get; }

    public static T GetService<T>()
        where T : class
    {
        return (Current as App)!.Host.Services.GetService<T>()
            ?? throw new ArgumentException($"{typeof(T)} needs to be registered in ConfigureServices within App.xaml.cs.");
    }

    public static WindowEx MainWindow { get; } = new MainWindow();

    public App()
    {
        InitializeComponent();
        Host = Microsoft.Extensions.Hosting.Host.CreateDefaultBuilder()
            .UseContentRoot(AppContext.BaseDirectory)
#if !IS_NON_PACKAGED
            .UseContentRoot(Windows.Storage.ApplicationData.Current.LocalFolder.Path)
#endif
            .ConfigureServices((context, services) =>
            {
                services
                    // Default Activation Handler
                    .AddTransient<ActivationHandler<LaunchActivatedEventArgs>, DefaultActivationHandler>()
                    // Other Activation Handlers
                    .AddTransient<IActivationHandler, AppNotificationActivationHandler>()
                    // Configuration
                    .Configure<LocalSettingsOptions>(context.Configuration.GetSection(nameof(LocalSettingsOptions)));

                // Views and ViewModels
                services
                    .AddSingleton<GenericPage>()
                    .AddLogging()
                    .AddServices()
                    .AddViewModels()
                    .AddViews()
                    ;
            })
            .UseSerilog((context, services, configuration) =>
            {
                configuration
                    .MinimumLevel.Verbose()
                    .WriteTo.File("Logs/All.log")
                    .WriteTo.Debug()
                    //.ReadFrom.Configuration(context.Configuration)
                    ;
            })
            .Build();

        //Log.Debug("Testing");
        _logger = GetService<ILogger<App>>();
        _logger.Log(LogLevel.Debug, "Hello Epsi!");
        Log.Debug("Hello test 1");

        GetService<IAppNotificationService>().Initialize();

        UnhandledException += App_UnhandledException;
    }

    private void App_UnhandledException(object sender, Microsoft.UI.Xaml.UnhandledExceptionEventArgs e)
    {
        _logger.LogCritical(e.Exception, e.Message);
        e.Handled = true;
        // https://docs.microsoft.com/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.application.unhandledexception.
    }

    protected async override void OnLaunched(LaunchActivatedEventArgs args)
    {
        base.OnLaunched(args);

        //TODO: Uncomment next line to show notification on app launch.
        //GetService<IAppNotificationService>().Show(string.Format("AppNotificationSamplePayload".GetLocalized(), AppContext.BaseDirectory));

        await GetService<IActivationService>().ActivateAsync(args);
    }
}

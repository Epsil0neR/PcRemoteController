using CommunityToolkit.Mvvm.Messaging;
using Microsoft.Extensions.DependencyInjection;
using RemoteController.WinUi.Activation;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Initialization;
using Serilog;

namespace RemoteController.WinUi;

// To learn more about WinUI 3, see https://docs.microsoft.com/windows/apps/winui/winui3/.
public partial class App
{
    public const string AppName = "RemoteController";

    private readonly ILogger<App> _logger;

    // The .NET Generic Host provides dependency injection, configuration, logging, and other services.
    // https://docs.microsoft.com/dotnet/core/extensions/generic-host
    // https://docs.microsoft.com/dotnet/core/extensions/dependency-injection
    // https://docs.microsoft.com/dotnet/core/extensions/configuration
    // https://docs.microsoft.com/dotnet/core/extensions/logging
    public IHost Host { get; }

    /// <summary>
    /// Launch event arguments.
    /// </summary>
    public LaunchActivatedEventArgs? Arguments { get; private set; }

    /// <summary>Gets the service object of the specified type.</summary>
    /// <typeparam name="T">Type of service object to get</typeparam>
    /// <returns>A service object of type <typeparamref name="T"/> or throws <see cref="ArgumentException"/>.</returns>
    public static T GetService<T>()
        where T : class
    {
        return (Current as App)!.Host.Services.GetService<T>()
            ?? throw new ArgumentException($"{typeof(T)} needs to be registered in ConfigureServices within App.xaml.cs.");
    }

    /// <summary>
    /// Main application window. Available also in <see cref="IServiceProvider"/>.
    /// </summary>
    public static WindowEx MainWindow { get; } = new MainWindow();

    public App()
    {
        InitializeComponent();

        UnhandledException += App_UnhandledException;

        Host = Microsoft.Extensions.Hosting.Host.CreateDefaultBuilder()
            .UseContentRoot(AppContext.BaseDirectory)
#if !IS_NON_PACKAGED
            .UseContentRoot(Windows.Storage.ApplicationData.Current.LocalFolder.Path)
#endif
            .ConfigureJson()
            .ConfigureServices((context, services) =>
            {
                services
                    .AddSingleton(this)
                    .AddSingleton<Window>(_ => MainWindow)
                    .AddSingleton<WindowEx>(_ => MainWindow)

                    .AddSingleton<WeakReferenceMessenger>()
                    .AddSingleton<IMessenger, WeakReferenceMessenger>(provider => provider.GetRequiredService<WeakReferenceMessenger>())
                    .AddSingleton<DispatcherQueue>(_ => DispatcherQueue.GetForCurrentThread())

                    // Default Activation Handler
                    .AddTransient<ActivationHandler<LaunchActivatedEventArgs>, DefaultActivationHandler>()
                    // Other Activation Handlers
                    .AddTransient<IActivationHandler, AppNotificationActivationHandler>()
                    // Configuration
                    .ConfigureOptions(context)
                    .ConfigureHotkeys()

                    .AddLogging()
                    .AddCore()
                    .AddWinUiCore()
                    .AddServices()
                    .AddViewModels()
                    .AddViews()

                    .AddWebHosting(context.Configuration)
                    .AddInformers(context.Configuration)
                    ;

                //TODO: Implement these extensions.
                services
                    .AddManipulators(context.Configuration)
                    ;
            })
            .UseSerilog((context, services, configuration) =>
            {
                configuration
#if DEBUG
                    .MinimumLevel.Verbose()
                    .WriteTo.Debug()
#else
                    .MinimumLevel.Information()
#endif
                    .WriteTo.File("Logs/All.log", fileSizeLimitBytes: 100*1024*1024) //Limit: 100 Mb
                    //.ReadFrom.Configuration(context.Configuration)
                    ;
            })
            .Build();

        _logger = GetService<ILogger<App>>();

        GetService<IAppNotificationService>().Initialize();
    }

    private void App_UnhandledException(object sender, Microsoft.UI.Xaml.UnhandledExceptionEventArgs e)
    {
        _logger.LogCritical(e.Exception, e.Message);
        e.Handled = true;
        // https://docs.microsoft.com/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.application.unhandledexception.
    }

    /// <inheritdoc />
    protected override void OnLaunched(LaunchActivatedEventArgs args)
    {
        MainWindow.Closed += MainWindowOnClosed;
        Arguments = args;
        base.OnLaunched(args);

        //TODO: Uncomment next line to show notification on app launch.
        //GetService<IAppNotificationService>().Show(string.Format("AppNotificationSamplePayload".GetLocalized(), AppContext.BaseDirectory));

        Host.StartAsync(CancellationToken.None)
            .ContinueWith(x =>
            {
                if (x.Exception is { } ex)
                    _logger.LogCritical(ex, "Failed to start services!" + Environment.NewLine +ex.Message);
            }, TaskContinuationOptions.OnlyOnFaulted);
    }

    private void MainWindowOnClosed(object sender, WindowEventArgs args)
    {
        Host.StopAsync(CancellationToken.None)
            .ContinueWith(x =>
            {
                if (x.Exception is { } ex)
                    _logger.LogCritical(ex, "Failed to stop services!" + Environment.NewLine + ex.Message);
            }, TaskContinuationOptions.OnlyOnFaulted);
    }
}

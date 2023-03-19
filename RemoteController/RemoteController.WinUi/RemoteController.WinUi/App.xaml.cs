using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.UI.Xaml;
using RemoteController.Attributes;

namespace RemoteController;

public partial class App
{
    private Window? _window;
    private readonly IHost _host;

    public App()
    {
        ViewForAttribute.ProceedRelatedAssemblies();

        var builder = new HostBuilder();
        builder.ConfigureServices(ConfigureServices);
        _host = builder.Build();
        InitializeComponent();
    }

    ~App()
    {
        _host.Dispose();
    }

    private void OnUnhandledException(object sender, UnhandledExceptionEventArgs e)
    {

    }

    private void ConfigureServices(HostBuilderContext context, IServiceCollection serviceCollection)
    {
        serviceCollection.AddSingleton(this);
        serviceCollection.AddSingleton<MainWindow>();
    }

    /// <inheritdoc />
    protected override void OnLaunched(LaunchActivatedEventArgs args)
    {
        _window = _host.Services.GetRequiredService<MainWindow>();
        _window.Activate();
    }
}
using Microsoft.Extensions.DependencyInjection;
using Microsoft.UI.Xaml;

namespace RemoteController;

public partial class App
{
    private Window _window;
    private readonly ServiceProvider _serviceProvider;

    public App()
    {
        var sc = new ServiceCollection();
        ConfigureServices(sc);
        _serviceProvider = sc.BuildServiceProvider();
        InitializeComponent();
    }

    private void ConfigureServices(IServiceCollection serviceCollection)
    {
        serviceCollection.AddSingleton<MainWindow>();
    }

    /// <inheritdoc />
    protected override void OnLaunched(LaunchActivatedEventArgs args)
    {
        _window = _serviceProvider.GetRequiredService<MainWindow>();
        _window.Activate();
    }
}
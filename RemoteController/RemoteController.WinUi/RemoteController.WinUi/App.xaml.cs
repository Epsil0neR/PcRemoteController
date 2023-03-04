// Copyright (c) Microsoft Corporation and Contributors.
// Licensed under the MIT License.

using Microsoft.Extensions.DependencyInjection;
using Microsoft.UI.Xaml;

namespace RemoteController;

public partial class App : Application
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
    protected override void OnLaunched(Microsoft.UI.Xaml.LaunchActivatedEventArgs args)
    {
        _window = _serviceProvider.GetRequiredService<MainWindow>();
        _window.Activate();
    }
}
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.HostedServices;

public class WindowPersistenceHostedService : IHostedService
{
    public IWritableOptions<GeneralOptions> Options { get; }
    public INavigationService NavigationService { get; }
    public IPageService PageService { get; }

    public WindowPersistenceHostedService(
        IWritableOptions<GeneralOptions> options,
        INavigationService navigationService,
        IPageService pageService)
    {
        Options = options;
        NavigationService = navigationService;
        PageService = pageService;
    }

    public Task StartAsync(CancellationToken cancellationToken) => Task.CompletedTask;

    public Task StopAsync(CancellationToken cancellationToken)
    {
        var page = NavigationService.Frame?.SourcePageType;
        var key = PageService.GetKeyFromPage(page);

        if (!string.IsNullOrEmpty(key))
            Options.Update(x => x.DefaultTab = key);

        return Task.CompletedTask;
    }
}
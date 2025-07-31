using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.HostedServices;

public class DefaultTabHostedService : IHostedService
{
    public IWritableOptions<GeneralOptions> Options { get; }
    public INavigationService NavigationService { get; }
    public IPageService PageService { get; }

    public DefaultTabHostedService(
        IWritableOptions<GeneralOptions> options,
        INavigationService navigationService,
        IPageService pageService)
    {
        Options = options;
        NavigationService = navigationService;
        PageService = pageService;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        var page = NavigationService.Frame?.SourcePageType;
        var key = PageService.GetKeyFromPage(page);
        Options.Update(x => x.DefaultTab = key);
    }
}
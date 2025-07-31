using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.ViewModels.Pages;
using RemoteController.WinUi.ViewModels.Pages.SoundDevices;

namespace RemoteController.WinUi.Activation;

public class DefaultActivationHandler : ActivationHandler<LaunchActivatedEventArgs>
{
    private readonly INavigationService _navigationService;
    private readonly IPageService _pageService;
    private readonly IWritableOptions<GeneralOptions> _generalOptions;

    public DefaultActivationHandler(
        INavigationService navigationService,
        IPageService pageService,
        IWritableOptions<GeneralOptions> generalOptions)
    {
        _navigationService = navigationService;
        _pageService = pageService;
        _generalOptions = generalOptions;
    }

    protected override bool CanHandleInternal(LaunchActivatedEventArgs? args)
    {
        // None of the ActivationHandlers has handled the activation.
        return _navigationService.Frame?.Content == null;
    }

    protected override async Task HandleInternalAsync(LaunchActivatedEventArgs? args)
    {
        var tab = _generalOptions.Value.DefaultTab;
        if (string.IsNullOrEmpty(tab) ||
            !_pageService.Contains(tab) ||
            !_navigationService.NavigateTo(tab, args?.Arguments))
        {
            _navigationService.NavigateTo(typeof(GenericViewModel).FullName!, args?.Arguments);
        }

        await Task.CompletedTask;
    }
}

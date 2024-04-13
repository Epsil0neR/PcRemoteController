using Microsoft.UI.Xaml.Navigation;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Controls.Controls;
using RemoteController.WinUi.Views;

namespace RemoteController.WinUi.ViewModels;

public partial class ShellViewModel : ObservableObject
{
    [ObservableProperty]
    private bool _isBackEnabled;

    [ObservableProperty]
    private NavigationViewItem? _selected;

    [ObservableProperty]
    private PageWithHeaderContent? _selectedPage;

    public INavigationService NavigationService { get; }

    public INavigationViewService NavigationViewService { get; }

    public ShellViewModel(INavigationService navigationService, INavigationViewService navigationViewService)
    {
        NavigationService = navigationService;
        NavigationService.Navigated += OnNavigated;
        NavigationViewService = navigationViewService;
    }

    private void OnNavigated(object sender, NavigationEventArgs e)
    {
        IsBackEnabled = NavigationService.CanGoBack;
        SelectedPage = e.Content as PageWithHeaderContent;

        if (e.SourcePageType == typeof(SettingsPage))
        {
            Selected = NavigationViewService.SettingsItem;
            return;
        }
        
        var selectedItem = NavigationViewService.GetSelectedItem(e.SourcePageType);
        if (selectedItem != null)
        {
            Selected = selectedItem;
        }
    }
}

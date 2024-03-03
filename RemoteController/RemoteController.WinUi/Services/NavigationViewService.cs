using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Reflection;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Helpers;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Services;

public class NavigationViewService : INavigationViewService
{
    private readonly INavigationService _navigationService;

    private readonly IPageService _pageService;
    private readonly ILogger<NavigationViewService> _logger;

    private NavigationView? _navigationView;

    public IList<object>? MenuItems => _navigationView?.MenuItems;

    public NavigationViewItem? SettingsItem => _navigationView?.SettingsItem as NavigationViewItem;

    public NavigationViewService(INavigationService navigationService, IPageService pageService, ILogger<NavigationViewService> logger)
    {
        _navigationService = navigationService;
        _pageService = pageService;
        _logger = logger;
    }

    [MemberNotNull(nameof(_navigationView))]
    public void Initialize(NavigationView navigationView)
    {
        _navigationView = navigationView;
        _navigationView.BackRequested += OnBackRequested;
        _navigationView.ItemInvoked += OnItemInvoked;
    }

    public void UnregisterEvents()
    {
        if (_navigationView == null) 
            return;

        _navigationView.BackRequested -= OnBackRequested;
        _navigationView.ItemInvoked -= OnItemInvoked;
    }

    public NavigationViewItem? GetSelectedItem(Type pageType)
    {
        return _navigationView != null
            ? GetSelectedItem(_navigationView.MenuItems, pageType) ??
              GetSelectedItem(_navigationView.FooterMenuItems, pageType)
            : null;
    }

    public IReadOnlyList<NavigationViewItem> GetMenuItems()
    {
        var pages = _pageService.GetPages();
        var rv = new List<NavigationViewItem>();

        string GetContent(Type pageType)
        {
            var attr = pageType.GetCustomAttribute<DescriptionAttribute>(false);
            return attr?.Description 
                   ?? pageType.Name;
        }

        IconElement? GetIcon(Type pageType)
        {
            var attr = pageType.GetCustomAttribute<PageSymbolAttribute>(false);

            return attr is not null
                ? new SymbolIcon(attr.Symbol)
                : null;
        }

        foreach (var (pageType, navigateTo) in pages)
        {
            var item = new NavigationViewItem()
            {
                Content = GetContent(pageType),
                Icon = GetIcon(pageType)
            };
            NavigationHelper.SetNavigateTo(item, navigateTo);
            rv.Add(item);
        }

        return rv;
    }

    private void OnBackRequested(NavigationView sender, NavigationViewBackRequestedEventArgs args) => _navigationService.GoBack();
    
    private void OnItemInvoked(NavigationView sender, NavigationViewItemInvokedEventArgs args)
    {
        if (args.IsSettingsInvoked)
        {
            _navigationService.NavigateTo(typeof(SettingsViewModel).FullName!);
        }
        else
        {
            var selectedItem = args.InvokedItemContainer as NavigationViewItem;

            if (selectedItem?.GetValue(NavigationHelper.NavigateToProperty) is string pageKey)
            {
                _logger.LogDebug($"Navigating to {pageKey}");
                _navigationService.NavigateTo(pageKey);
            }
        }
    }

    private NavigationViewItem? GetSelectedItem(IEnumerable<object> menuItems, Type pageType)
    {
        foreach (var item in menuItems.OfType<NavigationViewItem>())
        {
            if (IsMenuItemForPageType(item, pageType))
            {
                return item;
            }

            var selectedChild = GetSelectedItem(item.MenuItems, pageType);
            if (selectedChild != null)
            {
                return selectedChild;
            }
        }

        return null;
    }

    private bool IsMenuItemForPageType(NavigationViewItem menuItem, Type sourcePageType)
    {
        if (menuItem.GetValue(NavigationHelper.NavigateToProperty) is string pageKey)
        {
            return _pageService.GetPageType(pageKey) == sourcePageType;
        }

        return false;
    }
}

namespace RemoteController.WinUi.Contracts.Services;

public interface INavigationViewService
{
    IList<object>? MenuItems { get; }

    NavigationViewItem? SettingsItem { get; }

    void Initialize(NavigationView navigationView);

    void UnregisterEvents();

    NavigationViewItem? GetSelectedItem(Type pageType);

    IReadOnlyList<NavigationViewItem> GetMenuItems();
}

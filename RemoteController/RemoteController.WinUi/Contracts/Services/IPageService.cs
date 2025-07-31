namespace RemoteController.WinUi.Contracts.Services;

public interface IPageService
{
    bool Contains(string? key);

    Type GetPageType(string key);

    string GetKeyFromPage(Type? pageType);

    (Type pageType, string navigateTo)[] GetPages();
}

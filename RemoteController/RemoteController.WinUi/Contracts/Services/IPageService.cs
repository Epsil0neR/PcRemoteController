namespace RemoteController.WinUi.Contracts.Services;

public interface IPageService
{
    Type GetPageType(string key);

    (Type pageType, string navigateTo)[] GetPages();
}

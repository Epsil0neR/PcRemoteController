using System.Reflection;
using CommunityToolkit.Mvvm.ComponentModel;
using Microsoft.UI.Xaml.Controls;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.Contracts.Services;

namespace RemoteController.WinUi.Services;

public class PageService : IPageService
{
    private readonly Dictionary<string, Type> _pages = new();

    public PageService()
    {
        var attrType = typeof(ViewForAttribute<>);
        var types = AppDomain.CurrentDomain
            .GetAssemblies()
            .SelectMany(x => x.GetTypes())
            .Where(type => type.GetCustomAttributes(attrType, false).Length > 0)
            .ToList();

        foreach (var type in types)
            foreach (var attribute in type.GetCustomAttributes(attrType))
                if (attribute is BaseViewForAttribute attr)
                    Configure(attr.Type, type);
    }

    public Type GetPageType(string key)
    {
        lock (_pages)
        {
            return !_pages.TryGetValue(key, out var pageType)
                ? throw new ArgumentException($"Page not found: {key}. Did you forget to call PageService.Configure?")
                : pageType;
        }
    }

    private void Configure<VM, V>()
        where VM : ObservableObject
        where V : Page
        => Configure(typeof(VM), typeof(V));


    private void Configure(Type viewModelType, Type viewType)
    {
        lock (_pages)
        {
            var key = viewModelType.FullName!;
            if (_pages.ContainsKey(key))
                throw new ArgumentException($"The key {key} is already configured in PageService");

            var type = viewType;
            if (_pages.Any(p => p.Value == type))
                throw new ArgumentException($"This type is already configured with key {_pages.First(p => p.Value == type).Key}");

            _pages.Add(key, type);
        }
    }
}

using System.Reflection;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Views;

namespace RemoteController.WinUi.Services;

public class PageService : IPageService
{
    private record struct Record(string Key, Type ViewModel, Type Page, int Order);

    private readonly List<Record> _records = new();

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
                    Configure(attr.Type, type, attr.Order);
    }

    public Type GetPageType(string key)
    {
        lock (_records)
        {
            return _records.FirstOrDefault(x => x.Key == key).Page
                   ?? throw new ArgumentException($"Page not found: {key}. Did you forget to call PageService.Configure?");
        }
    }

    public (Type pageType, string navigateTo)[] GetPages()
    {
        lock (_records)
        {
            return _records
                .Where(x => x.Page != typeof(SettingsPage))
                .OrderBy(x => x.Order)
                .Select(x => (x.Page, x.Key))
                .ToArray();
        }
    }

    private void Configure<VM, V>()
        where VM : ObservableObject
        where V : Page
        => Configure(typeof(VM), typeof(V));

    private void Configure(Type viewModelType, Type viewType, int? order = null)
    {
        lock (_records)
        {
            var key = viewModelType.FullName!;
            if (_records.Any(x => x.Key == key))
                throw new ArgumentException($"The key {key} is already configured in PageService");

            var type = viewType;
            if (_records.FirstOrDefault(p => p.Page == type) is { Key: not null } existing)
                throw new ArgumentException($"This type is already configured with key {existing.Key}");

            _records.Add(new()
            {
                Key = key,
                Page = type,
                ViewModel = viewModelType,
                Order = order ?? int.MaxValue
            });
        }
    }
}

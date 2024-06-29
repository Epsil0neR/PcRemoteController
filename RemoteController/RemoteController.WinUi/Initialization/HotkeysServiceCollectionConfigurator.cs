using Microsoft.Extensions.DependencyInjection;
using RemoteController.WinUi.HotKeys;

namespace RemoteController.WinUi.Initialization;

internal static class HotkeysServiceCollectionConfigurator
{

    public static IServiceCollection ConfigureHotkeys(this IServiceCollection services)
    {
        var baseType = typeof(HotkeyItem);
        var types = baseType.Assembly.GetTypes()
            .Where(x => x != baseType && x.IsSubclassOf(baseType) && !x.IsAbstract)
            .ToList();

        foreach (var type in types)
        {
            services.AddSingleton(type);
            services.AddSingleton<HotkeyItem>(c => (HotkeyItem)c.GetRequiredService(type));
            //services.AddSingleton(baseType, type);
        }

        return services
            .AddHostedService<HotkeysHostedService>();
    }
}
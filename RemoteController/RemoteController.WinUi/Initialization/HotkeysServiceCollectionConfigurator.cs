using Microsoft.Extensions.DependencyInjection;
using RemoteController.WinUi.Extensions;
using RemoteController.WinUi.HotKeys;

namespace RemoteController.WinUi.Initialization;

internal static class HotkeysServiceCollectionConfigurator
{
    /// <summary>
    /// Dynamically registers all hotkeys which inherits <see cref="HotkeyItem"/>.<br/>
    /// Registers hotkey related services and editor view model.
    /// </summary>
    public static IServiceCollection ConfigureHotkeys(this IServiceCollection services)
    {
        return services
            .ProceedHotkeys()
            .ProceedHotkeyGroups()
            .AddSingleton<HotkeyGestureEditorViewModel>()
            .AddSingleton<IHotkeysGestureService, HotkeysGestureService>()
            .AddHostedServiceSingleton<HotkeysHostedService>();
    }

    /// <summary>
    /// Dynamically registers all hotkeys which inherits <see cref="HotkeyItem"/>
    /// </summary>
    /// <param name="services"></param>
    private static IServiceCollection ProceedHotkeys(this IServiceCollection services)
    {
        var baseType = typeof(HotkeyItem);
        var types = baseType.Assembly.GetTypes()
            .Where(x => x != baseType && x.IsSubclassOf(baseType) && !x.IsAbstract)
            .ToList();

        foreach (var type in types)
        {
            services.AddSingleton(type);
            services.AddSingleton<HotkeyItem>(c => (HotkeyItem)c.GetRequiredService(type));
        }

        return services;
    }

    private static IServiceCollection ProceedHotkeyGroups(this IServiceCollection services)
    {
        //TODO: this will handle [Sound.Output.Custom.]Edifier and other dynamic hotkeys.

        return services;
    }
}
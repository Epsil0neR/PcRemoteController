using Microsoft.Extensions.DependencyInjection;
using RemoteController.WinUi.HotKeys;

namespace RemoteController.WinUi.Initialization;

internal static class HotkeysServiceCollectionConfigurator
{

    public static IServiceCollection ConfigureHotkeys(this IServiceCollection services) => services
        .AddSingleton<SwitchSoundOutputHotkey>()
        .AddSingleton<SwitchSoundInputHotkey>()

        .AddHostedService<HotkeysService>()
    ;
}
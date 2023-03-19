using Microsoft.Extensions.DependencyInjection;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Core.Contracts.Services;
using RemoteController.WinUi.Core.Services;
using RemoteController.WinUi.Notifications;
using RemoteController.WinUi.Services;
using RemoteController.WinUi.ViewModels;
using RemoteController.WinUi.Views;

namespace RemoteController.WinUi.Initialization;

internal static class ServiceCollectionConfigurator
{
    public static IServiceCollection AddServices(this IServiceCollection services) => services
        .AddSingleton<IAppNotificationService, AppNotificationService>()
        .AddSingleton<ILocalSettingsService, LocalSettingsService>()
        .AddSingleton<IThemeSelectorService, ThemeSelectorService>()
        .AddTransient<INavigationViewService, NavigationViewService>()
        .AddSingleton<IActivationService, ActivationService>()
        .AddSingleton<IPageService, PageService>()
        .AddSingleton<INavigationService, NavigationService>()
        .AddSingleton<IFileService, FileService>();

    public static IServiceCollection AddViewModels(this IServiceCollection services) => services
        .AddTransient<SettingsViewModel>()
        .AddTransient<HotkeysViewModel>()
        .AddTransient<SoundDevicesViewModel>()
        .AddTransient<CommandsViewModel>()
        .AddTransient<FoldersViewModel>()
        .AddTransient<GenericViewModel>()
        .AddTransient<ShellViewModel>();

    public static IServiceCollection AddViews(this IServiceCollection services) => services
        .AddTransient<SettingsPage>()
        .AddTransient<HotkeysPage>()
        .AddTransient<SoundDevicesPage>()
        .AddTransient<CommandsPage>()
        .AddTransient<FoldersPage>()
        .AddTransient<GenericPage>()
        .AddTransient<ShellPage>();
}

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Epsiloner.OptionsModule;
using Microsoft.Extensions.DependencyInjection;
using RemoteController.Configs;
using RemoteController.ViewModels;
using RemoteController.ViewModels.Pages;

namespace RemoteController;

public static class DependencyInjection
{
    public static IServiceCollection AddPages(this IServiceCollection sc)
    {
        sc.AddSingleton<CommandsPageViewModel>();
        sc.AddSingleton<OverviewPageViewModel>();
        sc.AddSingleton<PathsManagerPageViewModel>();
#if DEBUG
        sc.AddSingleton<PlayListPageViewModel>();
#endif
        sc.AddSingleton<SoundDevicesPageViewModel>();
        sc.AddSingleton<IPageViewModel[]>(provider =>
        {
            var pages = provider
                .ResolveAll<IPageViewModel>()
                .OrderBy(x => x.Name)
                .ToArray();

            return pages;
        });
        sc.AddTransient<IEnumerable<IPageViewModel>>(provider => provider.GetRequiredService<IPageViewModel[]>().ToList());
        return sc;
    }


    public static IServiceCollection AddOptions(this IServiceCollection serviceCollection)
    {
        var proc = Process.GetCurrentProcess();
        var loc = proc.MainModule?.FileName;
        var dir = Path.GetDirectoryName(loc)!;
        var path = Path.Combine(dir, "Options");
        var options = new Options(path, string.Empty)
        {
            HandlerForSectionLoad = HandlerForSectionLoad
        };

        options.Register<FileSystemConfig>();
        options.Register<ServerConfig>();
        options.Register<CommandsConfig>();
        options.Register<PlayListsConfig>();
        options.Register<SoundDevicesConfig>();
        options.Register<ShortcutServiceOptions>();

        Options.Current = options;
        serviceCollection.AddSingleton(options);
        serviceCollection.AddSingleton(options.Section<FileSystemConfig>());
        serviceCollection.AddSingleton(options.Section<ServerConfig>());
        serviceCollection.AddSingleton(options.Section<CommandsConfig>());
        serviceCollection.AddSingleton(options.Section<PlayListsConfig>());
        serviceCollection.AddSingleton(options.Section<SoundDevicesConfig>());
        serviceCollection.AddSingleton(options.Section<ShortcutServiceOptions>());

        return serviceCollection;
    }

    private static void HandlerForSectionLoad(Type type, Exception ex)
    {
        Log.Logger.Error(ex, $"Failed to load option section of type {type.FullName}");
    }
}
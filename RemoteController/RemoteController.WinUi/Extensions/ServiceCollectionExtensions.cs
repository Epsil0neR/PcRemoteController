using Microsoft.Extensions.DependencyInjection;

namespace RemoteController.WinUi.Extensions;

public static class ServiceCollectionExtensions
{
    // How to add hosted services and inject also via Dependency Injection:
    // https://stackoverflow.com/a/59089881/1763586

    /// <summary>
    /// Add an <see cref="IHostedService"/> registration for the given type.
    /// </summary>
    /// <typeparam name="THostedService">An <see cref="IHostedService"/> to register.</typeparam>
    /// <param name="services">The <see cref="IServiceCollection"/> to register with.</param>
    /// <returns>The original <see cref="IServiceCollection"/>.</returns>
    public static IServiceCollection AddHostedServiceSingleton<THostedService>(this IServiceCollection services)
        where THostedService : class, IHostedService
    {
        services.AddSingleton<THostedService>();
        services.AddSingleton<IHostedService>(p => p.GetRequiredService<THostedService>());

        return services;
    }

    /// <summary>
    /// Add an <see cref="IHostedService"/> registration for the given type <typeparamref name="THostedService"/>.
    /// </summary>
    /// <typeparam name="TService">The type of the service to add.</typeparam>
    /// <typeparam name="THostedService">The type of the implementation to use for <see cref="IHostedService"/> to register.</typeparam>
    /// <param name="services">The <see cref="IServiceCollection"/> to register with.</param>
    /// <returns>The original <see cref="IServiceCollection"/>.</returns>
    /// <seealso cref="ServiceLifetime.Singleton"/>
    public static IServiceCollection AddHostedServiceSingleton<TService, THostedService>(this IServiceCollection services)
        where TService : class 
        where THostedService : class, TService, IHostedService
    {
        services.AddSingleton<THostedService>();
        services.AddSingleton<TService, THostedService>();
        services.AddSingleton<IHostedService>(p => p.GetRequiredService<THostedService>());

        return services;
    }
}
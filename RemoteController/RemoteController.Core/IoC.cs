using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace RemoteController;

public static class IoC
{
    private static ServiceProvider? _serviceProvider;
    private static readonly object _buildLock = new();

    public static void CreateBuilder(Func<IServiceCollection, ServiceProvider> builder)
    {
        lock (_buildLock)
        {
            if (_serviceProvider is not null)
                return;

            var sc = new ServiceCollection();
            _serviceProvider = builder.Invoke(sc);
        }
    }

    public static void Dispose()
    {
        _serviceProvider?.Dispose();
    }

    public static ValueTask? DisposeAsync()
    {
        return _serviceProvider?.DisposeAsync();
    }

    public static T? TryResolve<T>()
    {
        if (_serviceProvider is null)
            throw new InvalidOperationException($"IoC is not built yet. Call '{nameof(CreateBuilder)}' first.");

        return _serviceProvider.GetService<T>();
    }

    public static T Resolve<T>()
    {
        if (_serviceProvider is null)
            throw new InvalidOperationException($"IoC is not built yet. Call '{nameof(CreateBuilder)}' first.");

        return _serviceProvider.GetRequiredService<T>();
    }

    public static object Resolve(Type type)
    {
        if (_serviceProvider is null)
            throw new InvalidOperationException($"IoC is not built yet. Call '{nameof(CreateBuilder)}' first.");

        return _serviceProvider.GetRequiredService(type);
    }
    public static TCast Resolve<TCast>(Type t)
    {
        return (TCast)Resolve(t);
    }

    public static IEnumerable<T> ResolveAll<T>() where T : class
    {
        var t = typeof(T);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(x => x.GetTypes())
            .Where(x => t.IsAssignableFrom(x));

        foreach (var type in types)
        {
            if (ReferenceEquals(t, type))
                continue;

            if (type.IsInterface)
                continue;

            if (type.IsAbstract)
                continue;

            if (Resolve(type) is T rv)
                yield return rv;
        }
    }

    public static IEnumerable<T> ResolveAll<T>(this IServiceProvider provider) where T : class
    {
        var t = typeof(T);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(x => x.GetTypes())
            .Where(x => t.IsAssignableFrom(x));

        foreach (var type in types)
        {
            if (ReferenceEquals(t, type))
                continue;

            if (type.IsInterface)
                continue;

            if (type.IsAbstract)
                continue;

            if (provider.GetService(type) is T rv)
                yield return rv;
        }
    }
}
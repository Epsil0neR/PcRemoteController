using System;
using Unity;
using Unity.Lifetime;

namespace RemoteController
{
    public static class IoC
    {
        private static IUnityContainer _container = _container ?? (_container = InitializeUnityContainer());

        public static IUnityContainer Container => _container;

        private static IUnityContainer InitializeUnityContainer()
        {
            var container = new UnityContainer();
            container.RegisterInstance(container);
            container.AddNewExtension<DisposeDisposablesExtension>();
            return container;
        }

        public static void Register<TFrom, TTo>() where TTo : TFrom
        {
            _container.RegisterType<TFrom, TTo>();
        }

        public static T Resolve<T>()
        {
            return _container.Resolve<T>();
        }

        public static object Resolve(Type type)
        {
            return _container.Resolve(type);
        }
        public static TCast Resolve<TCast>(Type t)
        {
            return (TCast)_container.Resolve(t);
        }

        public static void Register<T>()
        {
            _container.RegisterType<T>();
        }

        public static void Register<T>(Func<IUnityContainer, T> factory)
        {
            _container.RegisterFactory<T>(c => factory(c));
        }

        public static void RegisterSingleton<T>()
        {
            _container.RegisterSingleton<T>();
        }

        public static void RegisterSingleton<T>(Func<IUnityContainer, T> factory)
        {
            _container.RegisterFactory<T>(c => factory(c), new ContainerControlledLifetimeManager());
        }

        public static void RegisterInstance<T>(T instance)
        {
            _container.RegisterInstance(typeof(T), instance);
        }
        public static void RegisterInstance(Type type, object instance)
        {
            _container.RegisterInstance(type, instance);
        }
    }
}

using System;
using RemoteController.IoCs;
using Unity;
using Unity.Lifetime;

namespace RemoteController
{
    public static class IoC
    {
        private static IUnityContainer _container = _container ?? (_container = InitializeUnityContainer());

        private static IUnityContainer InitializeUnityContainer()
        {
            var container = new UnityContainer();
            container.AddNewExtension<DisposeDisposablesExtension>();
            return container;
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
            return (TCast) _container.Resolve(t);
        }

        public static void Register<T>()
        {
            _container.RegisterType<T>();
        }

        public static void RegisterSingleton<T>()
        {
            _container.RegisterSingleton<T>();
        }

        public static void RegisterInstance<T>(T instance)
        {
            _container.RegisterInstance(typeof(T), instance);
        }
    }
}

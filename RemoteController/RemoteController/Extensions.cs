using System.Collections.Generic;
using RemoteController.Informer;
using RemoteController.WebSocket;

namespace RemoteController
{
    internal static class Extensions
    {
        /// <summary>
        /// Sends all <paramref name="informers"/> as messages to <paramref name="socket"/>.
        /// </summary>
        /// <param name="informers"></param>
        /// <param name="socket"></param>
        public static void Send(this IEnumerable<BaseInformer> informers, IWsSocket socket)
        {
            foreach (var info in informers)
                info.Send(socket);
        }

        /// <summary>
        /// Sends <paramref name="informer"/> as message to <paramref name="socket"/>.
        /// </summary>
        /// <param name="informer"></param>
        /// <param name="socket"></param>
        public static void Send(this BaseInformer informer, IWsSocket socket)
        {
            socket.Send(informer.ToMessage());
        }

        /// <summary>
        /// Broadcasts <paramref name="informer"/> as message in <paramref name="server"/>.
        /// </summary>
        /// <param name="informer"></param>
        /// <param name="server"></param>
        public static void Send(this BaseInformer informer, WsServer server)
        {
            server.Broadcast(informer.ToMessage());
        }

        /// <summary>
        /// Provides name for custom manipulator.
        /// </summary>
        /// <param name="informer"></param>
        /// <returns></returns>
        public static string GetActionName(this BaseInformer informer)
        {
            return $"Informer.{informer.Name}";
        }

        /// <summary>
        /// Converts informer to <see cref="Message"/>.
        /// </summary>
        /// <param name="informer"></param>
        /// <returns></returns>
        public static Message ToMessage(this BaseInformer informer)
        {
            var rv = new Message()
            {
                Type = MessageType.Notification,
                ActionName = informer.GetActionName(),
                Data = informer,
            };
            return rv;
        }

        /// <summary>
        /// Resolves <typeparamref name="T"/> and registers that in <paramref name="informersManager"/>.
        /// </summary>
        /// <typeparam name="T">Informer type that should be registered.</typeparam>
        /// <param name="informersManager">Informers manager.</param>
        public static void Register<T>(this InformersManager informersManager)
            where T : BaseInformer
        {
            var informer = IoC.Resolve<T>();
            informersManager.Register(informer);
        }
    }
}
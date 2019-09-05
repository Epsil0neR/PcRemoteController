using System;

namespace RemoteController.WebSocket
{
    /// <summary>
    /// Socket which is associated only with 1 web socket client.
    /// </summary>
    public interface IWsSocket
    {
        /// <summary>
        /// Sends data to client.
        /// </summary>
        /// <param name="data"></param>
        void Send(Message data);

        /// <summary>
        /// Sends data to client.
        /// </summary>
        /// <param name="data"></param>
        /// <param name="completed"></param>
        void SendAsync(Message data, Action<bool> completed);
    }
}

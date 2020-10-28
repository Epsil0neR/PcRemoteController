using System;

namespace RemoteController.WebSocket
{
    /// <summary>
    /// Socket which is associated only with 1 web socket client.
    /// </summary>
    public interface IWsSocket
    {
        /// <summary>
        /// Authentication token.
        /// </summary>
        string AuthToken { get; }

        /// <summary>
        /// Indicates if connection is authenticated.
        /// </summary>
        bool IsAuthenticated { get;  }

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

        /// <summary>
        /// Authentication token for WebSocket.
        /// There can be multiple <see cref="IWsSocket"/> with same auth token.
        /// </summary>
        /// <param name="token">Authentication token.</param>
        void Auth(string token);
    }
}

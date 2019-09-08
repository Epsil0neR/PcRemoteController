using System;

namespace RemoteController.WebSocket
{
    public class WsClient : IDisposable
    {
        private readonly WebSocketSharp.WebSocket _socket;

        public WsClient(string url, int port, string path)
        {
            _socket = new WebSocketSharp.WebSocket($"ws://{url}:{port}{path}");
        }


        public void Dispose()
        {
            ((IDisposable)_socket)?.Dispose();
        }
    }
}
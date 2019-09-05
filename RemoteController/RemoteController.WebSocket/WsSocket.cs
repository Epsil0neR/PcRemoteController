using System;
using Newtonsoft.Json;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace RemoteController.WebSocket
{
    internal class WsSocket : WebSocketBehavior, IWsSocket
    {
        public event EventHandler<MessageEventArgs> Message;
        public event EventHandler<CloseEventArgs> Closed;
        public event EventHandler Opened;

        protected override void OnMessage(MessageEventArgs e)
        {
            Message?.Invoke(this, e);
        }

        public void Send(Message data)
        {
            base.Send(JsonConvert.SerializeObject(data));
        }

        public new void Send(string data)
        {
            base.Send(data);
        }

        public void SendAsync(Message data, Action<bool> completed)
        {
            base.SendAsync(JsonConvert.SerializeObject(data), completed);
        }

        public new void SendAsync(string data, Action<bool> completed)
        {
            base.SendAsync(data, completed);
        }

        protected override void OnClose(CloseEventArgs e)
        {
            base.OnClose(e);
            Closed?.Invoke(this, e);
        }

        protected override void OnOpen()
        {
            base.OnOpen();
            Opened?.Invoke(this, EventArgs.Empty);
        }
    }
}
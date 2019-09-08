using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.NetworkInformation;
using Epsiloner.Cooldowns;
using Newtonsoft.Json;
using System.Runtime.CompilerServices;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace RemoteController.WebSocket
{
    public class WsServer : INotifyPropertyChanged
    {
        #region Fields
        private EventCooldown _startCooldown;
        private bool _isStarted;

        private readonly List<WsSocket> _opened = new List<WsSocket>();
        private readonly object _openedLock = new object();
        #endregion

        #region Events
        /// <summary>
        /// Event which is raised every time server gets message from client.
        /// </summary>
        public event EventHandler<MessageEventArgs> Message;

        public event EventHandler Started;
        public event EventHandler Stopped;

        public event EventHandler ClientConnected;
        public event EventHandler<CloseEventArgs> ClientDisconnected;
        public event EventHandler AddressInUse;
        #endregion

        #region Properties
        /// <summary>
        /// Path for neptune web socket.
        /// </summary>
        public string Path { get; }

        public string FullPath { get; }

        /// <summary>
        /// Parent HTTP server.
        /// </summary>
        public HttpServer Http { get; }

        public bool IsStarted
        {
            get => _isStarted;
            private set
            {
                var old = _isStarted;
                _isStarted = value;
                if (old != value)
                {
                    RaisePropertyChanged();
                    (value ? Started : Stopped)?.Invoke(this, EventArgs.Empty);
                }
            }
        }

        public int ConnectionsCount
        {
            get
            {
                lock (_openedLock)
                    return _opened.Count;
            }
        }
        #endregion

        #region Constructors
        private WsServer(string path)
        {
            Path = path;
        }

        /// <summary>
        /// Initializes web socket on specified http server.
        /// </summary>
        /// <param name="server"></param>
        /// <param name="path"></param>
        public WsServer(HttpServer server, string path)
            : this(path)
        {
            Http = server;
            Init();
        }


        #endregion

        #region Public methods

        public IEnumerable<IWsSocket> GetConnections()
        {
            lock (_openedLock)
                return _opened.ToList();
        }

        #region Broadcast
        /// <summary>
        /// Broadcasts data to all connected clients.
        /// </summary>
        /// <param name="data">Data to broadcast</param>
        public void Broadcast(Message data)
        {
            if (data == null)
                throw new ArgumentNullException(nameof(data));

            var json = JsonConvert.SerializeObject(data);
            Broadcast(json);
        }

        /// <summary>
        /// Broadcasts data to all connected clients.
        /// </summary>
        /// <param name="data">Data to broadcast</param>
        public void Broadcast(string data)
        {
            GetHost()?.Sessions.Broadcast(data);
        }

        /// <summary>
        /// Broadcasts data to all connected clients.
        /// </summary>
        /// <param name="data">Data to broadcast</param>
        public void Broadcast(Byte[] data)
        {
            GetHost()?.Sessions.Broadcast(data);
        }

        /// <summary>
        /// Broadcasts data to all connected clients.
        /// </summary>
        /// <param name="data">Data to broadcast</param>
        /// <param name="completed">Action to invoke when the send is done.</param>
        public void BroadcastAsync(Message data, Action completed)
        {
            if (data == null)
                throw new ArgumentNullException(nameof(data));

            var json = JsonConvert.SerializeObject(data);
            BroadcastAsync(json, completed);
        }

        /// <summary>
        /// Broadcasts data to all connected clients.
        /// </summary>
        /// <param name="data">Data to broadcast</param>
        /// <param name="completed">Action to invoke when the send is done.</param>
        public void BroadcastAsync(string data, Action completed)
        {
            GetHost()?.Sessions.BroadcastAsync(data, completed);
        }

        /// <summary>
        /// Broadcasts data to all connected clients.
        /// </summary>
        /// <param name="data">Data to broadcast</param>
        /// <param name="completed">Action to invoke when the send is done.</param>
        public void BroadcastAsync(byte[] data, Action completed)
        {
            GetHost()?.Sessions.BroadcastAsync(data, completed);
        }

        /// <summary>
        /// Starts server if not started yet.
        /// NOTE: Server starts automatically when created, but in case IP address and PORT is in use, server won't start.
        /// </summary>
        /// <returns></returns>
        #endregion

        //TODO: Add documentation
        public bool StartServer()
        {
            if (!IsStarted)
                _startCooldown.Now();
            return IsStarted;
        }

        //TODO: Add documentation
        public void StopServer()
        {
            Http.Stop(CloseStatusCode.Normal, "Requested to stop server.");
            IsStarted = false;
        }
        #endregion

        #region Private methods

        private WebSocketServiceHost GetHost()
        {
            return Http.WebSocketServices.Hosts.FirstOrDefault(x => x.Path == Path); //TODO: Review that part: it was in  && x.Type == typeof(WsSocket));
        }

        private void Init()
        {
            _startCooldown = new EventCooldown(TimeSpan.FromMilliseconds(5000), RepeatStart);
        }

        private bool Start()
        {
            if (IsStarted)
                return true;

            if (!Http.IsListening)
            {
                //Check address usage only if server is not listening.
                if (IsIpAddressInUse())
                    return false;

                try
                {
                    Http.Start();
                }
                catch (Exception)
                {
                    return false;
                }
            }

            if (Http.WebSocketServices.Paths.Contains(Path, StringComparer.InvariantCultureIgnoreCase))
            {
                //TODO: Path already in use. What shall we do in that case?
            }
            else
            {
                Http.AddWebSocketService<WsSocket>(Path, InitSocket);
                IsStarted = true;
            }

            return IsStarted;
        }

        private void RepeatStart()
        {
            if (IsStarted || Start())
                return;

            _startCooldown.Accumulate();
        }

        /// <summary>
        /// Checks if IP address with port is in use by any server.
        /// </summary>
        /// <returns></returns>
        private bool IsIpAddressInUse()
        {
            //https://stackoverflow.com/questions/570098/in-c-how-to-check-if-a-tcp-port-is-available
            var ipGlobalProperties = IPGlobalProperties.GetIPGlobalProperties();
            var tcpConnInfoArray = ipGlobalProperties.GetActiveTcpConnections();
            var ipInUse = tcpConnInfoArray.Any(info =>
                (info.LocalEndPoint.Port == Http.Port && info.LocalEndPoint.Address.Equals(Http.Address)) ||
                (info.RemoteEndPoint.Port == Http.Port && info.RemoteEndPoint.Address.Equals(Http.Address)));

            if (ipInUse)
                AddressInUse?.Invoke(this, EventArgs.Empty);

            return ipInUse;
        }

        private void InitSocket(WsSocket socket)
        {
            socket.Opened += BehaviorOnOpened;
            socket.Closed += BehaviorOnClosed;
            socket.Message += BehaviorOnMessage;
        }

        private void BehaviorOnOpened(object sender, EventArgs eventArgs)
        {
            var connectionsCountChanged = false;
            lock (_openedLock)
            {
                var s = (WsSocket)sender;
                if (!_opened.Contains(s))
                {
                    _opened.Add(s);
                    connectionsCountChanged = true;
                }
            }
            if (connectionsCountChanged)
                RaisePropertyChanged(nameof(ConnectionsCount));

            ClientConnected?.Invoke(sender, eventArgs);
        }

        private void BehaviorOnClosed(object sender, CloseEventArgs closeEventArgs)
        {
            var b = ((WsSocket)sender);
            b.Closed -= BehaviorOnClosed;
            b.Opened -= BehaviorOnOpened;
            b.Message -= BehaviorOnMessage;

            ClientDisconnected?.Invoke(sender, closeEventArgs);

            bool connectionsCountChanged;
            lock (_openedLock)
            {
                var s = (WsSocket)sender;
                connectionsCountChanged = _opened.Remove(s);
            }
            if (connectionsCountChanged)
                RaisePropertyChanged(nameof(ConnectionsCount));
        }

        private void BehaviorOnMessage(object sender, MessageEventArgs e)
        {
            Message?.Invoke(sender, e);
        }

        #endregion

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void RaisePropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
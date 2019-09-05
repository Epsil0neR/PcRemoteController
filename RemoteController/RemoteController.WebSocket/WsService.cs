using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using WebSocketSharp;

namespace RemoteController.WebSocket
{
    public class WsService
    {
        private readonly Dictionary<string, Type> _actionNameToDataType = new Dictionary<string, Type>();
        private readonly object _actionFiltersLock = new object();
        private readonly List<Func<Message, bool>> _actionFilters = new List<Func<Message, bool>>();
        private readonly Dictionary<string, List<Action<Message>>> _handlers = new Dictionary<string, List<Action<Message>>>();

        public WsServer Server { get; }

        public WsService(WsServer server)
        {
            Server = server;
            Server.Message += ServerOnMessage;
        }

        /// <summary>
        /// Registers <paramref name="dataType"/> for message with specified <paramref name="actionName"/>. 
        /// Returns <see cref="bool.True"/> if successfully registered, otherwise returns <see cref="bool.False"/>.
        /// </summary>
        /// <typeparam name="TData">Type of data.</typeparam>
        /// <param name="actionName">Action name.</param>
        /// <param name="force">Indicates if existing action name registration will be overridden.</param>
        /// <returns></returns>
        public bool RegisterDataTypeForAction<TData>(string actionName, bool force = false)
        {
            var dataType = typeof(TData);
            return RegisterDataTypeForAction(actionName, dataType, force);
        }

        /// <summary>
        /// Registers <paramref name="dataType"/> for message with specified <paramref name="actionName"/>. 
        /// Returns <see cref="bool.True"/> if successfully registered, otherwise returns <see cref="bool.False"/>.
        /// </summary>
        /// <param name="actionName">Action name.</param>
        /// <param name="dataType">Type of data</param>
        /// <param name="force">Indicates if existing action name registration will be overridden.</param>
        /// <returns></returns>
        public bool RegisterDataTypeForAction(string actionName, Type dataType, bool force = false)
        {
            if (string.IsNullOrEmpty(actionName))
                throw new ArgumentNullException(nameof(actionName));
            if (dataType == null)
                throw new ArgumentNullException(nameof(dataType));

            actionName = actionName.ToLowerInvariant();
            if (force || !_actionNameToDataType.ContainsKey(actionName))
            {
                _actionNameToDataType[actionName] = dataType;
                return true;
            }

            return _actionNameToDataType[actionName] == dataType;
        }

        /// <summary>
        /// Registers <paramref name="handler"/> for message with specified <paramref name="actionName"/>. 
        /// </summary>
        /// <param name="actionName">Message action name</param>
        /// <param name="handler">Handler to unregister</param>
        public void RegisterHandlerForAction(string actionName, Action<Message> handler)
        {
            if (string.IsNullOrEmpty(actionName))
                throw new ArgumentNullException(nameof(actionName));
            if (handler == null)
                throw new ArgumentNullException(nameof(handler));

            var k = actionName.ToLowerInvariant();
            if (!_handlers.TryGetValue(k, out var handlers))
            {
                handlers = new List<Action<Message>>();
                _handlers[k] = handlers;
            }

            handlers.Add(handler);
        }

        /// <summary>
        /// Unregisters <paramref name="handler"/> for message with specified <paramref name="actionName"/>. 
        /// </summary>
        /// <param name="actionName">Message action name</param>
        /// <param name="handler">Handler to unregister</param>
        public void UnregisterHandlerForAction(string actionName, Action<Message> handler)
        {
            if (string.IsNullOrEmpty(actionName))
                throw new ArgumentNullException(nameof(actionName));
            if (handler == null)
                throw new ArgumentNullException(nameof(handler));

            var k = actionName.ToLowerInvariant();
            if (_handlers.TryGetValue(k, out var handlers))
            {
                handlers.Remove(handler);
            }
        }

        /// <summary>
        /// Adds filter which will be invoked before sending message to handlers.
        /// Message will be sent to handlers only if there are no filters or all filters returns <see cref="bool.True"/>.
        /// </summary>
        /// <param name="filter"></param>
        public void AddActionFilter(Func<Message, bool> filter)
        {
            if (filter == null)
                throw new ArgumentNullException(nameof(filter));

            lock (_actionFiltersLock)
            {
                _actionFilters.Add(filter);
            }
        }

        /// <summary>
        /// Removes filter for messages.
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        public bool RemoveActionFilter(Func<Message, bool> filter)
        {
            if (filter == null)
                throw new ArgumentNullException(nameof(filter));

            lock (_actionFiltersLock)
            {
                return _actionFilters.Remove(filter);
            }
        }


        private void ServerOnMessage(object sender, MessageEventArgs evt)
        {
            var socket = (WsSocket)sender;
            try
            {
                var msg1 = JsonConvert.DeserializeObject<Message>(evt.Data);
                var actionName = msg1.ActionName?.ToLowerInvariant();

                var msg = msg1;
                if (_actionNameToDataType.ContainsKey(actionName))
                {
                    var type = _actionNameToDataType[actionName];
                    var data = JsonConvert.DeserializeObject(msg1.Data.ToString(), type);
                    msg = new Message(socket)
                    {
                        ActionName = msg1.ActionName,
                        Type = msg1.Type,
                        Data = data
                    };
                }
                else
                {
                    msg.Sender = socket;
                }
                if (_actionFilters.Count != 0)
                {
                    lock (_actionFiltersLock)
                    {
                        if (_actionFilters.Any(x => !x(msg)))
                            return;
                    }
                }

                InvokeHandlers(actionName, msg);
            }
            catch (Exception e)
            {
                var message = new Message()
                {
                    Type = MessageType.Response,
                    Data = "Received unknown data."
                };
                var text = JsonConvert.SerializeObject(message);
                socket.Send(text);
            }
        }

        private void InvokeHandlers(string actionName, Message msg)
        {
            var k = actionName.ToLowerInvariant();
            if (!_handlers.TryGetValue(k, out var handlers))
                return;

            foreach (var handler in handlers)
            {
                try
                {
                    handler.Invoke(msg);
                }
                catch
                {
                    // ignored
                }
            }
        }
    }
}
using System;
using Newtonsoft.Json;

namespace RemoteController.WebSocket
{
    /// <summary>
    /// Represents a message which travels over web sockets.
    /// </summary>
    public class Message
    {
        #region Properties
        /// <summary>
        /// Type of message.
        /// </summary>
        public MessageType Type { get; set; }

        /// <summary>
        /// Message hash
        /// </summary>
        public string Hash { get; set; }

        /// <summary>
        /// Action name this message is related to.
        /// </summary>
        public string ActionName { get; set; }

        /// <summary>
        /// Message data.
        /// </summary>
        public object Data { get; set; }

        /// <summary>
        /// Socket which sent this message. (This data does not travels over web sockets)
        /// </summary>
        [JsonIgnore]
        public IWsSocket Sender { get; internal set; }
        #endregion

        #region Constructors
        public Message()
        {
        }

        internal Message(IWsSocket sender)
        {
            Sender = sender ?? throw new ArgumentNullException(nameof(sender));
        }
        #endregion
    }
}
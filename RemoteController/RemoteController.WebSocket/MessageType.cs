namespace RemoteController.WebSocket;

/// <summary>
/// Type of message over web socket.
/// </summary>
public enum MessageType
{
    Request = 0,
    Notification = 1,
    Response = 2,
    Error = 3
}
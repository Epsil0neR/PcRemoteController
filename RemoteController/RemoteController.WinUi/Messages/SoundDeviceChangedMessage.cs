using CommunityToolkit.Mvvm.Messaging.Messages;

namespace RemoteController.WinUi.Messages;

public class SoundDeviceChangedMessage : ValueChangedMessage<(string, bool)>
{
    public SoundDeviceChangedMessage((string, bool) value) 
        : base(value)
    {
    }
}
using CommunityToolkit.Mvvm.Messaging.Messages;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Messages;

public class DeviceIsSelectedChanged : ValueChangedMessage<DeviceViewModel>
{
    public DeviceIsSelectedChanged(DeviceViewModel value) : base(value)
    {
    }
}
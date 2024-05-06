using CommunityToolkit.Mvvm.Messaging.Messages;
using RemoteController.WinUi.ViewModels.Pages;

namespace RemoteController.WinUi.Messages;

public class DeviceIsSelectedChanged : ValueChangedMessage<DeviceViewModel>
{
    public DeviceIsSelectedChanged(DeviceViewModel value) : base(value)
    {
    }
}

public class SystemDefaultSoundDeviceChanged: ValueChangedMessage<DeviceViewModel>
{
    public SystemDefaultSoundDeviceChanged(DeviceViewModel value) : base(value)
    {
    }
}

public class SystemDefaultSoundDeviceRequest: ValueChangedMessage<DeviceViewModel>
{
    public SystemDefaultSoundDeviceRequest(DeviceViewModel value) : base(value)
    {
    }
}
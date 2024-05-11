using RemoteController.WinUi.ViewModels.Pages.SoundDevices;

namespace RemoteController.WinUi.Messages;

public class DeviceIsSelectedChanged
{
    public required DeviceViewModel Device { get; init; }
}

public class SystemDefaultSoundDeviceChanged
{
    public required DeviceViewModel Device { get; init; }
}

/// <summary>
/// Request to set system default device (output or input).
/// </summary>
public class SystemDefaultSoundDeviceRequest
{
    public required DeviceViewModel Device { get; init; }
}

/// <summary>
/// Request to change volume for specified <see cref="Device"/>.
/// </summary>
public class ChangeVolumeForDeviceRequest
{
    public required DeviceViewModel Device { get; init; }

    public required int Volume { get; init; }
}
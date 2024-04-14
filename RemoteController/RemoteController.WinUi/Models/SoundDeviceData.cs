namespace RemoteController.WinUi.Models;

/// <summary>
/// Options for single device. <see cref="SoundDevicesOptions"/> for options section.
/// </summary>
public class SoundDeviceData
{
    public string DeviceName { get; set; }

    public bool EnabledForCommand { get; set; }
}
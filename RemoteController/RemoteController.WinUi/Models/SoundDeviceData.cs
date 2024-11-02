namespace RemoteController.WinUi.Models;

/// <summary>
/// Options for single device. <see cref="SoundDevicesOptions"/> for options section.
/// </summary>
public class SoundDeviceData
{
    /// <summary>
    /// Device unique name provided by system.
    /// </summary>
    public required string DeviceName { get;  init; }

    /// <summary>
    /// Indicates if it will be used with switch sound device command (output and input has different commands)
    /// </summary>
    public bool SwitchCommand { get; set; }
}
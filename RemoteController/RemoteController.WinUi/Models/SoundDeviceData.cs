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

    /// <summary>
    /// Indicates if volume for device is locked. Locked volume means that application will always force that volume over any changes.
    /// </summary>
    public int? LockedVolume { get; set; }
}
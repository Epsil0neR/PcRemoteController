namespace RemoteController.WinUi.Models;

public class SoundDevicesOptions
{
    public List<SoundDeviceData> Outputs { get; set; } = new();
    public List<SoundDeviceData> Inputs { get; set; } = new();
}
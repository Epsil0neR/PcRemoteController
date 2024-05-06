using NAudio.CoreAudioApi;
using RemoteController.Informer;
using RemoteController.Sound;

namespace RemoteController.WinUi.Services;

/// <summary>
/// Provides functionality to change default system sound devices.
/// </summary>
public interface ISoundDevicesService
{
    /// <summary>
    /// Changes system default sound output device to device with specified at <paramref name="deviceName"/> name.
    /// </summary>
    /// <param name="deviceName">Device name.</param>
    void SetOutputDevice(string deviceName);

    /// <summary>
    /// Changes system default sound input device to device with specified at <paramref name="deviceName"/> name.
    /// </summary>
    /// <param name="deviceName">Device name.</param>
    void SetInputDevice(string deviceName);
}

/// <summary>
/// Provides functionality to change default system sound devices.
/// </summary>
public class SoundDevicesService : ISoundDevicesService
{
    private readonly PolicyConfigClient _policyConfigClient;

    public InformersManager InformersManager { get; }

    public SoundInformer SoundInformer { get; }

    public SoundDevicesService(
        InformersManager informersManager,
        PolicyConfigClient policyConfigClient
        )
    {
        _policyConfigClient = policyConfigClient;
        InformersManager = informersManager ?? throw new ArgumentNullException(nameof(informersManager));
        SoundInformer = InformersManager.Informer<SoundInformer>() ?? throw new ArgumentException(@"Sound informer is not available in manager.", nameof(informersManager));
    }

    /// <inheritdoc />
    public void SetOutputDevice(string deviceName)
    {
        using var enumerator = new MMDeviceEnumerator();
        var outputList = enumerator.EnumerateAudioEndPoints(DataFlow.Render, DeviceState.Active).ToList();
        var device = outputList.FirstOrDefault(x => x.FriendlyName == deviceName);
        if (device is null)
            return;

        var id = device.ID;
        _policyConfigClient.SetDefaultEndpoint(id, ERole.eMultimedia);
        SoundInformer.CheckForChanges();
    }

    /// <inheritdoc />
    public void SetInputDevice(string deviceName)
    {
        using var enumerator = new MMDeviceEnumerator();
        var outputList = enumerator.EnumerateAudioEndPoints(DataFlow.Capture, DeviceState.Active).ToList();
        var device = outputList.FirstOrDefault(x => x.FriendlyName == deviceName);
        if (device is null)
            return;

        var id = device.ID;
        _policyConfigClient.SetDefaultEndpoint(id, ERole.eCommunications);
        SoundInformer.CheckForChanges();
    }
}
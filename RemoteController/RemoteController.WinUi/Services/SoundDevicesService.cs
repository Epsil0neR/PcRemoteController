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
    /// System default sound output device name.
    /// </summary>
    string? OutputDevice { get; set; }

    /// <summary>
    /// System default sound input device name.
    /// </summary>
    string? InputDevice { get; set; }
}

/// <summary>
/// Provides functionality to read and change default system sound devices.
/// </summary>
public class SoundDevicesService : ISoundDevicesService
{
    private readonly PolicyConfigClient _policyConfigClient;

    public DispatcherQueue DispatcherQueue { get; }

    public SoundInformer SoundInformer { get; }

    public SoundDevicesService(
        SoundInformer soundInformer,
        PolicyConfigClient policyConfigClient,
        DispatcherQueue dispatcherQueue
        )
    {
        _policyConfigClient = policyConfigClient;
        DispatcherQueue = dispatcherQueue;
        SoundInformer = soundInformer ?? throw new ArgumentNullException(nameof(soundInformer));
    }

    /// <inheritdoc />
    public string? OutputDevice
    {
        get => SoundInformer.OutputDevice;
        set
        {
            using var enumerator = new MMDeviceEnumerator();
            var outputList = enumerator.EnumerateAudioEndPoints(DataFlow.Render, DeviceState.Active).ToList();
            var device = outputList.FirstOrDefault(x => x.FriendlyName == value);
            if (device is null)
                return;

            var id = device.ID;
            DispatcherQueue.TryEnqueue(() =>
            {
                _policyConfigClient.SetDefaultEndpoint(id, ERole.eMultimedia);
                SoundInformer.CheckForChanges();
            });
        }
    }

    /// <inheritdoc />
    public string? InputDevice
    {
        get => SoundInformer.InputDevice;
        set
        {
            using var enumerator = new MMDeviceEnumerator();
            var outputList = enumerator.EnumerateAudioEndPoints(DataFlow.Capture, DeviceState.Active).ToList();
            var device = outputList.FirstOrDefault(x => x.FriendlyName == value);
            if (device is null)
                return;

            var id = device.ID;
            DispatcherQueue.TryEnqueue(() =>
            {
                _policyConfigClient.SetDefaultEndpoint(id, ERole.eCommunications);
                SoundInformer.CheckForChanges();
            });
        }
    }
}
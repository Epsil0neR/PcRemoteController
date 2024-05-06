using NAudio.CoreAudioApi;
using RemoteController.Informer;
using RemoteController.Sound;

namespace RemoteController.WinUi.Services;

public class SoundDevicesService
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

    private void SetOutputDevice(string outputDeviceName)
    {
        using var enumerator = new MMDeviceEnumerator();
        var outputList = enumerator.EnumerateAudioEndPoints(DataFlow.Render, DeviceState.Active).ToList();
        var device = outputList.FirstOrDefault(x => x.FriendlyName == outputDeviceName);
        if (device is null)
            return;

        var id = device.ID;

        //TODO: Check if this code actually needs for Dispatcher
        //Dispatcher.Invoke(() =>
        //{
        _policyConfigClient.SetDefaultEndpoint(id, ERole.eMultimedia);
        SoundInformer.CheckForChanges();
        //});
    }
}
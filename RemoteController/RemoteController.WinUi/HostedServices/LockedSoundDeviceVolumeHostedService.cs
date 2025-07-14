using System.Collections.Concurrent;
using RemoteController.Informer;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Services;

namespace RemoteController.WinUi.HostedServices;

public class LockedSoundDeviceVolumeHostedService : IHostedService
{
    private readonly ConcurrentDictionary<string, int> _inputs = new();
    private readonly ConcurrentDictionary<string, int> _outputs = new();

    public ISoundDevicesService Service { get; }
    public IWritableOptions<SoundDevicesOptions> Options { get; }
    public SoundInformer SoundInformer { get; }

    public LockedSoundDeviceVolumeHostedService(
        ISoundDevicesService service,
        IWritableOptions<SoundDevicesOptions> options,
        SoundInformer soundInformer)
    {
        Service = service ?? throw new ArgumentNullException(nameof(service));
        Options = options ?? throw new ArgumentNullException(nameof(options));
        SoundInformer = soundInformer ?? throw new ArgumentNullException(nameof(soundInformer));
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        Initialize(Options.Value);
        SoundInformer.Changed += SoundInformerOnChanged;

        foreach (var (deviceName, volume) in _inputs)
        {
            ChangeVolume(deviceName, true, volume);
        }
        foreach (var (deviceName, volume) in _outputs)
        {
            ChangeVolume(deviceName, false, volume);
        }
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        SoundInformer.Changed -= SoundInformerOnChanged;
        UpdateOptions();
    }

    public void LockVolume(string deviceName, bool isInput, int? volume)
    {
        var dict = isInput
            ? _inputs
            : _outputs;

        if (volume is null)
        {
            dict.Remove(deviceName, out _);
        }
        else if (!dict.TryGetValue(deviceName, out var oldValue) || oldValue != volume.Value)
        {
            dict[deviceName] = volume.Value;
            ChangeVolume(deviceName, isInput, volume.Value);
        }
    }

    private void Initialize(SoundDevicesOptions options)
    {
        foreach (var data in options.Inputs)
        {
            if (data.LockedVolume.HasValue)
                _inputs[data.DeviceName] = data.LockedVolume.Value;
        }
        foreach (var data in options.Outputs)
        {
            if (data.LockedVolume.HasValue)
                _outputs[data.DeviceName] = data.LockedVolume.Value;
        }
    }

    private void UpdateOptions()
    {
        Options.Update(options =>
        {
            UpdateOptions(options.Inputs, _inputs);
            UpdateOptions(options.Outputs, _outputs);
        });
    }

    private static void UpdateOptions(List<SoundDeviceData> options, ConcurrentDictionary<string, int> items)
    {
        foreach (var data in options)
        {
            data.LockedVolume = null;
        }

        foreach (var (deviceName, volume) in items)
        {
            var data = options.Find(x => x.DeviceName == deviceName);
            if (data is not null)
            {
                data.LockedVolume = volume;
            }
            else
            {
                data = new SoundDeviceData()
                {
                    DeviceName = deviceName,
                    LockedVolume = volume
                };
                options.Add(data);
            }
        }
    }

    private void SoundInformerOnChanged(object? sender, EventArgs e)
    {
        foreach (var info in SoundInformer.InputDeviceList)
        {
            if (!_inputs.TryGetValue(info.Name, out var volume))
                continue;

            SoundInformer.ChangeInputVolume(info.Name, volume);
        }

        foreach (var info in SoundInformer.OutputDeviceList)
        {
            if (!_outputs.TryGetValue(info.Name, out var volume))
                continue;

            SoundInformer.ChangeOutputVolume(info.Name, volume);
        }
    }

    private void ChangeVolume(string deviceName, bool isInput, int volume)
    {
        if (isInput)
            SoundInformer.ChangeInputVolume(deviceName, volume);
        else
            SoundInformer.ChangeOutputVolume(deviceName, volume);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using Epsiloner.Cooldowns;
using NAudio.CoreAudioApi;

namespace RemoteController.Informer;

/// <summary>
/// Sound related data informer.
/// </summary>
public class SoundInformer : BaseInformer
{
    private readonly EventCooldown _cooldown;

    private int _outputVolume;
    private string _outputDevice;
    private bool _outputIsMuted;
    private IList<string> _outputDeviceList;
    private MMDevice _output;
    private string _inputDevice;
    private IList<string> _inputDeviceList;
    private MMDevice _input;
    private int _inputVolume;
    private bool _inputIsMuted;

    /// <inheritdoc />
    public override string Name => "Sound";

    /// <summary>
    /// Output volume 0-100
    /// </summary>
    public int OutputVolume => _outputVolume;

    /// <summary>
    /// Current device used for sound output.
    /// </summary>
    public string OutputDevice => _outputDevice;

    /// <summary>
    /// Indicates if current sound output is muted.
    /// </summary>
    public bool OutputIsMuted => _outputIsMuted;

    /// <summary>
    /// Current device used for sound input.
    /// </summary>
    public string InputDevice => _inputDevice;

    /// <summary>
    /// List of enabled sound output devices.
    /// </summary>
    public IEnumerable<string> OutputDeviceList => _outputDeviceList;

    /// <summary>
    /// List of enabled sound input devices.
    /// </summary>
    public IEnumerable<string> InputDeviceList => _inputDeviceList;

    /// <summary>
    /// Input volume 0-100
    /// </summary>
    public int InputVolume => _inputVolume;

    /// <summary>
    /// Indicates if current sound input is muted.
    /// </summary>
    public bool InputIsMuted => _inputIsMuted;

    /// <inheritdoc />
    public override bool CheckForChanges()
    {
        using (var enumer = new MMDeviceEnumerator())
        {
            var outputList = enumer.EnumerateAudioEndPoints(DataFlow.Render, DeviceState.Active).ToList();
            var output = enumer.GetDefaultAudioEndpoint(DataFlow.Render, Role.Multimedia);
            var inputList = enumer.EnumerateAudioEndPoints(DataFlow.Capture, DeviceState.Active).ToList();
            var input = enumer.GetDefaultAudioEndpoint(DataFlow.Capture, Role.Communications);
            var changedOutput = Set(ref _outputDevice, output.FriendlyName);
            var changedInput = Set(ref _inputDevice, input.FriendlyName);
            var changes = new[]
            {
                changedOutput,
                Set(ref _outputVolume, (int)(output.AudioEndpointVolume.MasterVolumeLevelScalar * 100)),
                Set(ref _outputIsMuted, output.AudioEndpointVolume.Mute),
                SetList(ref _outputDeviceList, outputList.Select(x => x.FriendlyName)),

                changedInput,
                Set(ref _inputVolume, (int)(input.AudioEndpointVolume.MasterVolumeLevelScalar * 100)),
                Set(ref _inputIsMuted, output.AudioEndpointVolume.Mute),
                SetList(ref _inputDeviceList, inputList.Select(x=>x.FriendlyName)),
            };

            if (!changes.Any(x => x))
                return false;

            if (changedOutput)
            {
                if (_output != null)
                    _output.AudioEndpointVolume.OnVolumeNotification -= OutputOnOnVolumeNotification;
                _output?.Dispose();
                _output = output;
                if (_output != null)
                    _output.AudioEndpointVolume.OnVolumeNotification += OutputOnOnVolumeNotification;
            }

            if (changedInput)
            {
                if (_input != null)
                    _input.AudioEndpointVolume.OnVolumeNotification -= InputOnOnVolumeNotification;
                _input?.Dispose();
                _input = input;
                if (_input != null)
                    _input.AudioEndpointVolume.OnVolumeNotification += InputOnOnVolumeNotification;
            }
        }

        RaiseChanged();
        return true;
    }

    public bool ChangeOutputVolume(int volume)
    {
        return ChangeVolume(ref _output, volume);
    }
    public bool ChangeInputVolume(int volume)
    {
        return ChangeVolume(ref _input, volume);
    }

    private bool ChangeVolume(ref MMDevice device, int volume)
    {

        if (volume < 0 || volume > 100)
            return false; // Do nothing if value exceeds.

        if (device == null)
        {
            // Try find output device
            CheckForChanges();

            if (device == null)
                return false; // Do nothing if there are no output device.
        }

        device.AudioEndpointVolume.MasterVolumeLevelScalar = volume / 100f;
        return true;
    }

    private void InputOnOnVolumeNotification(AudioVolumeNotificationData data)
    {
        var changes = new[]
        {
            Set(ref _inputVolume, (int)(data.MasterVolume * 100)),
            Set(ref _inputIsMuted, data.Muted),
        };
        if (changes.Any(x => x))
            RaiseChanged();
    }

    private void OutputOnOnVolumeNotification(AudioVolumeNotificationData data)
    {
        var changes = new[]
        {
            Set(ref _outputVolume, (int) (data.MasterVolume * 100)),
            Set(ref _outputIsMuted, data.Muted),
        };
        if (changes.Any(x => x))
            RaiseChanged();
    }

    /// <inheritdoc />
    public override void Start()
    {
        _cooldown.Now();
    }

    /// <inheritdoc />
    public override void Stop()
    {
        _cooldown.Cancel();
    }

    public SoundInformer()
    {
        _cooldown = new EventCooldown(TimeSpan.FromMilliseconds(5000), () =>
        {
            CheckForChanges();
            _cooldown.Accumulate();
        });
    }
}
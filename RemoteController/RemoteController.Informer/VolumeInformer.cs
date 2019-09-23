using System;
using System.Collections.Generic;
using System.Linq;
using Epsiloner.Cooldowns;
using NAudio.CoreAudioApi;

namespace RemoteController.Informer
{
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
        private MMDevice _device;

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
        public string InputDevice { get; private set; }

        /// <summary>
        /// List of enabled sound output devices.
        /// </summary>
        public IEnumerable<string> OutputDeviceList => _outputDeviceList;

        /// <summary>
        /// List of enabled sound input devices.
        /// </summary>
        public string InputDeviceList { get; private set; }


        public override bool CheckForChanges()
        {
            var enumer = new MMDeviceEnumerator();
            var devices = enumer.EnumerateAudioEndPoints(DataFlow.Render, DeviceState.Active).ToList();
            var device = enumer.GetDefaultAudioEndpoint(DataFlow.Render, Role.Multimedia);
            var changedDevice = Set(ref _outputDevice, device.DeviceFriendlyName);
            var changes = new[]
            {
                changedDevice,
                Set(ref _outputVolume, (int)(device.AudioEndpointVolume.MasterVolumeLevelScalar * 100)),
                Set(ref _outputIsMuted, device.AudioEndpointVolume.Mute),
                SetList(ref _outputDeviceList, devices.Select(x => x.DeviceFriendlyName)),
            };

            if (!changes.Any(x => x))
                return false;

            if (changedDevice)
            {
                if (_device != null)
                    _device.AudioEndpointVolume.OnVolumeNotification -= AudioEndpointVolumeOnOnVolumeNotification;
                _device = device;
                if (_device != null)
                    _device.AudioEndpointVolume.OnVolumeNotification += AudioEndpointVolumeOnOnVolumeNotification;
            }

            RaiseChanged();
            return true;
        }

        private void AudioEndpointVolumeOnOnVolumeNotification(AudioVolumeNotificationData data)
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
            _cooldown.Accumulate();
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
}

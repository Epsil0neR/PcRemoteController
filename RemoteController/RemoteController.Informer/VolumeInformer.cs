using System.Collections.Generic;
using System.Linq;
using NAudio.CoreAudioApi;

namespace RemoteController.Informer
{
    /// <summary>
    /// Sound related data informer.
    /// </summary>
    public class SoundInformer : BaseInformer
    {
        private int _outputVolume;
        private string _outputDevice;
        private bool _outputIsMuted;
        private IList<string> _outputDeviceList;

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
            var changes = new[]
            {
                Set(ref _outputDevice, device.DeviceFriendlyName),
                Set(ref _outputVolume, (int)(device.AudioEndpointVolume.MasterVolumeLevelScalar * 100)),
                Set(ref _outputIsMuted, device.AudioEndpointVolume.Mute),
                SetList(ref _outputDeviceList, devices.Select(x => x.DeviceFriendlyName)),
            };

            if (!changes.Any(x => x))
                return false;

            RaiseChanged();
            return true;
        }

        public SoundInformer()
        {
        }
    }
}

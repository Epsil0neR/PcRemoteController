using System.Collections.Generic;
using System.Text;

namespace RemoteController.Informer
{
    /// <summary>
    /// Sound related data informer.
    /// </summary>
    public class SoundInformer : BaseInformer
    {
        /// <summary>
        /// Volume 0-100
        /// </summary>
        public int Volume { get; private set; }

        /// <summary>
        /// Current device used for sound output.
        /// </summary>
        public object OutputDevice { get; private set; }

        /// <summary>
        /// Current device used for sound input.
        /// </summary>
        public object InputDevice { get; private set; }

        /// <summary>
        /// List of enabled sound output devices.
        /// </summary>
        public object OutputDeviceList { get; private set; }

        /// <summary>
        /// List of enabled sound input devices.
        /// </summary>
        public object InputDeviceList { get; private set; }

        public override void CheckForChanges()
        {
            throw new System.NotImplementedException();
        }
    }
}

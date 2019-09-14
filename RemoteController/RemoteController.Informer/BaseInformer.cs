using System;

namespace RemoteController.Informer
{
    public abstract class BaseInformer
    {
        /// <summary>
        /// Unique name for each informer
        /// </summary>
        public abstract string Name { get; }

        /// <summary>
        /// Raise when some data in informer has been changed.
        /// </summary>
        public event EventHandler Changed;

        /// <summary>
        /// Raises <see cref="Changed"/> event.
        /// </summary>
        protected void RaiseChanged()
        {
            Changed?.Invoke(this, EventArgs.Empty);
        }

        /// <summary>
        /// Checks for changes in system.
        /// NOTE: Not all OS components notifies about changes.
        /// </summary>
        public abstract void CheckForChanges();
    }
}
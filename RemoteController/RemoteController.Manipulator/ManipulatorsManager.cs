using System;
using System.Collections.Generic;
using System.Linq;

namespace RemoteController.Manipulator
{
    public class ManipulatorsManager : IManipulatorsManager
    {
        private readonly Dictionary<Type, object> _contexts = new Dictionary<Type, object>();
        private readonly List<IManipulation> _manipulations = new List<IManipulation>();

        public event EventHandler<ManipulatorsItemEventArgs> ItemStateChanged;

        /// <inheritdoc />
        public T GetContext<T>()
        {
            var t = typeof(T);
            if (_contexts.TryGetValue(t, out var rv))
                return (T)rv;

            return default(T);
        }

        /// <inheritdoc />
        public void SetContext<T>(T context)
        {
            var t = typeof(T);
            _contexts[t] = context;
        }

        /// <inheritdoc />
        public void Add(IManipulation manipulation)
        {
            if (manipulation == null)
                throw new ArgumentNullException(nameof(manipulation));
            if (string.IsNullOrWhiteSpace(manipulation.Name))
                throw new ArgumentException($"{nameof(IManipulation)}.{manipulation.Name} must be not whitespace and not null.", nameof(manipulation));
            if (_manipulations.Any(x => string.Equals(x.Name, manipulation.Name, StringComparison.InvariantCultureIgnoreCase)))
                throw new ArgumentException("Manipulation name already registered.", nameof(manipulation));

            _manipulations.Add(manipulation);
            RaiseItemStateChanged(manipulation, true);
        }

        /// <inheritdoc />
        public bool Remove(IManipulation manipulation)
        {
            var rv = _manipulations.Remove(manipulation);
            if (rv)
                RaiseItemStateChanged(manipulation, false);

            return rv;
        }

        /// <inheritdoc />
        public object TryExecute(string name, string param)
        {
            var m = _manipulations.FirstOrDefault(x => string.Equals(x.Name, name, StringComparison.InvariantCultureIgnoreCase));
            if (m == null)
            {
                return false;
            }

            try
            {
                var rv = m.Execute(this, param);
                return rv;
            }
            catch
            {
                //TODO: Add logger here.
                return false;
            }

            //TODO: Log request + result.
        }


        private void RaiseItemStateChanged(IManipulation manipulation, bool inserted)
        {
            var args = new ManipulatorsItemEventArgs(manipulation, inserted);
            ItemStateChanged?.Invoke(this, args);
        }
    }

    public class ManipulatorsItemEventArgs : EventArgs
    {
        public ManipulatorsItemEventArgs(IManipulation manipulation, bool inserted)
        {
            Manipulation = manipulation;
            Inserted = inserted;
        }

        public IManipulation Manipulation { get; }
        public bool Inserted { get; }
    }
}

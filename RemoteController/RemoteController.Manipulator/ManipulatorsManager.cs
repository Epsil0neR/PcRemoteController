using System;
using System.Collections.Generic;
using System.Linq;

namespace RemoteController.Manipulator
{
    public class ManipulatorsManager : IManipulatorsManager
    {
        private readonly Dictionary<Type, object> _contexts = new Dictionary<Type, object>();
        private readonly List<IManipulation> _manipulations = new List<IManipulation>();

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
        }

        /// <inheritdoc />
        public bool Remove(IManipulation manipulation)
        {
            return _manipulations.Remove(manipulation);
        }

        /// <inheritdoc />
        public bool TryExecute(string name, string param = null)
        {
            var m = _manipulations.FirstOrDefault(x => string.Equals(x.Name, name, StringComparison.InvariantCultureIgnoreCase));
            if (m == null)
                return false;

            try
            {
                return m.Execute(this, param);
            }
            catch
            {
                //TODO: Add logger here.
                return false;
            }

            //TODO: Log request + result.
        }

    }
}

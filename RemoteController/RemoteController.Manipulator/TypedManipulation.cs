using System;

namespace RemoteController.Manipulator
{
    public class TypedManipulation<T> : IManipulation
    {
        private readonly Func<T, string, bool> _action;

        public TypedManipulation(string name, Func<T, string, bool> func)
        {
            _action = func ?? throw new ArgumentNullException(nameof(func));
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        public TypedManipulation(string name, Action<T, string> action)
        {
            if (action == null) throw new ArgumentNullException(nameof(action));

            _action = (arg, s) =>
            {
                action(arg, s);
                return true;
            };
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        public TypedManipulation(string name, Func<T, bool> func)
        {
            if (func == null)
                throw new ArgumentNullException(nameof(func));

            _action = (arg, s) => func(arg);
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        public TypedManipulation(string name, Action<T> action)
        {
            if (action == null)
                throw new ArgumentNullException(nameof(action));

            _action = (arg, s) =>
            {
                action(arg);
                return true;
            };
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        /// <inheritdoc />
        public string Name { get; }

        /// <inheritdoc />
        public bool Execute(IManipulatorsManager manager, string param)
        {
            var context = manager.GetContext<T>();
            return context != null &&
                   _action.Invoke(context, param);
        }
    }
}
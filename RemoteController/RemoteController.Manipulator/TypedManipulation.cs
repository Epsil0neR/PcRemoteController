using System;

namespace RemoteController.Manipulator
{
    public class TypedManipulation<T> : IManipulation
    {
        private readonly Action<T, string> _action;

        public TypedManipulation(string name, Action<T, string> action)
        {
            _action = action ?? throw new ArgumentNullException(nameof(action));
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }
        public TypedManipulation(string name, Action<T> action)
        {
            if (action == null)
                throw new ArgumentNullException(nameof(action));

            _action = (arg, s) => action(arg);
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        /// <inheritdoc />
        public string Name { get; }

        /// <inheritdoc />
        public bool Execute(IManipulatorsManager manager, string param)
        {
            var context = manager.GetContext<T>();
            if (context == null)
                return false;

            _action.Invoke(context, param);
            return true;
        }
    }
}
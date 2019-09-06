using System;

namespace RemoteController.Manipulator
{
    public class TypedManipulation<T> : IManipulation
    {
        private readonly Action<T> _action;

        public TypedManipulation(string name, Action<T> action)
        {
            _action = action ?? throw new ArgumentNullException(nameof(action));
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        /// <inheritdoc />
        public string Name { get; }

        /// <inheritdoc />
        public bool Execute(IManipulatorsManager manager)
        {
            var context = manager.GetContext<T>();
            if (context == null)
                return false;

            _action.Invoke(context);
            return true;
        }
    }
}
using System;
using WindowsInput;

namespace RemoteController.Manipulator
{
    public class MouseManipulation : IManipulation
    {
        private readonly Action<IMouseSimulator> _action;

        public MouseManipulation(string name, Action<IMouseSimulator> action)
        {
            _action = action ?? throw new ArgumentNullException(nameof(action));
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        public string Name { get; }

        public void Execute(IMouseSimulator mouseSimulator)
        {
            _action.Invoke(mouseSimulator);
        }
    }
}
using System;
using WindowsInput;

namespace RemoteController.Manipulator
{
    public class KeyboardManipulation : IManipulation
    {
        private readonly Action<IKeyboardSimulator> _action;

        public KeyboardManipulation(string name, Action<IKeyboardSimulator> action)
        {
            _action = action ?? throw new ArgumentNullException(nameof(action));
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        public string Name { get; }

        public void Execute(IKeyboardSimulator keyboardSimulator)
        {
            _action.Invoke(keyboardSimulator);
        }
    }
}
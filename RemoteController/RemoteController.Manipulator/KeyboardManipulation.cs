using System;
using WindowsInput;

namespace RemoteController.Manipulator
{
    public class KeyboardManipulation : TypedManipulation<IKeyboardSimulator>
    {
        public KeyboardManipulation(string name, Action<IKeyboardSimulator, string> action)
            : base(name, action)
        {
        }

        public KeyboardManipulation(string name, Action<IKeyboardSimulator> action)
            : base(name, action)
        {
        }
    }
}
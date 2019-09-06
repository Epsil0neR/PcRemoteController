using System;
using WindowsInput;

namespace RemoteController.Manipulator
{
    public class KeyboardManipulation : TypedManipulation<IKeyboardSimulator>
    {
        public KeyboardManipulation(string name, Action<IKeyboardSimulator> action) 
            : base(name, action)
        {
        }
    }
}
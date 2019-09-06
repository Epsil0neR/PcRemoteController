using System;
using WindowsInput;

namespace RemoteController.Manipulator
{
    public class MouseManipulation : TypedManipulation<IMouseSimulator>
    {
        public MouseManipulation(string name, Action<IMouseSimulator, string> action)
            : base(name, action)
        {
        }

        public MouseManipulation(string name, Action<IMouseSimulator> action)
            : base(name, action)
        {
        }
    }
}
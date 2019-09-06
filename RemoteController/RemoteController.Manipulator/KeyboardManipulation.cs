using System;
using System.Linq;
using WindowsInput;
using WindowsInput.Native;

namespace RemoteController.Manipulator
{
    public class KeyboardManipulation : TypedManipulation<IKeyboardSimulator>
    {
        private static void DefaultAction(IKeyboardSimulator simulator, string param)
        {
            if (Enum.TryParse(param, out VirtualKeyCode key))
                simulator.KeyPress(key);
        }

        public KeyboardManipulation(string name, Action<IKeyboardSimulator, string> action)
            : base(name, action) { }

        public KeyboardManipulation(string name, Action<IKeyboardSimulator> action)
            : base(name, action) { }

        public KeyboardManipulation(string name, VirtualKeyCode key, VirtualKeyCode[] modifiers = null)
            : base(name, GenerateAction(key, modifiers)) { }

        public KeyboardManipulation(string name)
            : base(name, DefaultAction) { }

        private static Action<IKeyboardSimulator, string> GenerateAction(VirtualKeyCode key, VirtualKeyCode[] modifiers = null)
        {
            if (modifiers?.Any() == true)
                return (simulator, s) => simulator.ModifiedKeyStroke(modifiers, key);
            return (simulator, s) => simulator.KeyPress(key);
        }
    }
}
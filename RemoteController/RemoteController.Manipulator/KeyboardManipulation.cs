using System;
using System.Linq;
using System.Runtime.InteropServices;
using WindowsInput;
using WindowsInput.Native;

namespace RemoteController.Manipulator
{
    public class KeyboardManipulation : TypedManipulation<IKeyboardSimulator>
    {
        public static void PressAction(IKeyboardSimulator simulator, string param)
        {
            if (Enum.TryParse(param, true, out VirtualKeyCode key))
                simulator.KeyPress(key);
            else
            {
                var c = string.IsNullOrEmpty(param) ? ' ' : param[0];
                var s = VkKeyScan(c);
                key = (VirtualKeyCode) s;
                if (Enum.IsDefined(typeof(VirtualKeyCode), key))
                    simulator.KeyPress(key);
            }
        }

        public static void KeyDownAction(IKeyboardSimulator simulator, string param)
        {
            if (Enum.TryParse(param, true, out VirtualKeyCode key))
                simulator.KeyDown(key);
            else
            {
                var c = string.IsNullOrEmpty(param) ? ' ' : param[0];
                var s = VkKeyScan(c);
                key = (VirtualKeyCode)s;
                if (Enum.IsDefined(typeof(VirtualKeyCode), key))
                    simulator.KeyDown(key);
            }
        }

        public static void KeyUpAction(IKeyboardSimulator simulator, string param)
        {
            if (Enum.TryParse(param, true, out VirtualKeyCode key))
                simulator.KeyUp(key);
            else
            {
                var c = string.IsNullOrEmpty(param) ? ' ' : param[0];
                var s = VkKeyScan(c);
                key = (VirtualKeyCode)s;
                if (Enum.IsDefined(typeof(VirtualKeyCode), key))
                    simulator.KeyUp(key);
            }
        }

        public KeyboardManipulation(string name, Action<IKeyboardSimulator, string> action)
            : base(name, action) { }

        public KeyboardManipulation(string name, Action<IKeyboardSimulator> action)
            : base(name, action) { }

        public KeyboardManipulation(string name, Func<IKeyboardSimulator, string, bool> action)
            : base(name, action) { }

        public KeyboardManipulation(string name, Func<IKeyboardSimulator, bool> action)
            : base(name, action) { }

        public KeyboardManipulation(string name, VirtualKeyCode key, VirtualKeyCode[] modifiers = null)
            : base(name, GenerateAction(key, modifiers)) { }

        public KeyboardManipulation(string name)
            : base(name, PressAction) { }

        private static Action<IKeyboardSimulator, string> GenerateAction(VirtualKeyCode key, VirtualKeyCode[] modifiers = null)
        {
            if (modifiers?.Any() == true)
                return (simulator, s) => simulator.ModifiedKeyStroke(modifiers, key);
            return (simulator, s) => simulator.KeyPress(key);
        }

        [DllImport("user32.dll")]
        public static extern short VkKeyScan(char ch);
    }
}
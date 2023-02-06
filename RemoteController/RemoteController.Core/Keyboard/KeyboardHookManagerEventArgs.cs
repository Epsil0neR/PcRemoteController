using System;

namespace RemoteController.Keyboard;

public class KeyboardHookManagerEventArgs : EventArgs
{
    public KeyboardHookManagerEventArgs(int keyCode)
    {
        KeyCode = keyCode;
    }

    public int KeyCode { get; }
}
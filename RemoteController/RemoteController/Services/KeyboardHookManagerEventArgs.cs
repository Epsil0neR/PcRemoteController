using System;

namespace RemoteController.Services;

public class KeyboardHookManagerEventArgs : EventArgs
{
    public KeyboardHookManagerEventArgs(int keyCode)
    {
        KeyCode = keyCode;
    }

    public int KeyCode { get; }
}
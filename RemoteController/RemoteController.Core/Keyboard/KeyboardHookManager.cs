using System;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace RemoteController.Keyboard;

public sealed class KeyboardHookManager : IDisposable
{
    private const int WH_KEYBOARD_LL = 13;
    private const int WM_KEYDOWN = 0x0100;
    private const int WM_KEYUP = 0x0101;

    private readonly IntPtr _hookId;
    private readonly user32dll.LowLevelKeyboardProc _hookHandler;

    public event EventHandler<KeyboardHookManagerEventArgs> KeyDown;
    public event EventHandler<KeyboardHookManagerEventArgs> KeyUp;

    public KeyboardHookManager()
    {
        _hookHandler = HookCallback;
        _hookId = SetHook(_hookHandler);
    }

    public void Dispose()
    {
        user32dll.UnhookWindowsHookEx(_hookId);
    }

    private static IntPtr SetHook(user32dll.LowLevelKeyboardProc proc)
    {
        using var curProcess = Process.GetCurrentProcess();
        using var curModule = curProcess.MainModule;
        return user32dll.SetWindowsHookEx(WH_KEYBOARD_LL, proc, user32dll.GetModuleHandle(curModule.ModuleName), 0);
    }

    private IntPtr HookCallback(int nCode, IntPtr wParam, IntPtr lParam)
    {
        if (nCode >= 0 && wParam == (IntPtr)WM_KEYDOWN)
        {
            var vkCode = Marshal.ReadInt32(lParam);
            KeyDown?.Invoke(this, new(vkCode));
        }
        if (nCode >= 0 && wParam == (IntPtr)WM_KEYUP)
        {
            var vkCode = Marshal.ReadInt32(lParam);
            KeyUp?.Invoke(this, new(vkCode));
        }

        return user32dll.CallNextHookEx(_hookId, nCode, wParam, lParam);
    }

}
using Microsoft.Win32;
using System;

namespace RemoteController.Utils;

public static class AppStartupUtils
{
    private const string AppName = "KeyboardShortcuts";

    public static void AddToStartup()
    {
        var path = System.Windows.Forms.Application.ExecutablePath;
        var args = string.Join(' ', Environment.GetCommandLineArgs());
        var value = $"\"{path}\" {args}";
        var rk = GetRegistryKey();
        rk.SetValue(AppName, value);
    }

    public static void RemoveFromStartup()
    {
        var rk = GetRegistryKey();
        rk.DeleteValue(AppName, false);
    }

    private static RegistryKey GetRegistryKey()
    {
        return Registry.CurrentUser.OpenSubKey(@"SOFTWARE\Microsoft\Windows\CurrentVersion\Run", true);
    }
}
using Microsoft.Win32;

namespace RemoteController.WinUi.Utils;

public static class WindowsUtils
{
    private static RegistryKey RegistryKey()
    {
        return Registry.CurrentUser.OpenSubKey(@"SOFTWARE\Microsoft\Windows\CurrentVersion\Run", true)!;
    }

    public static bool ReadAutoStartup()
    {
        using var rk = RegistryKey();
        var value = rk?.GetValue(App.AppName);
        return value is not null;
    }

    public static void EnableAutoStartup()
    {
        using var rk = RegistryKey();
        var path = System.Diagnostics.Process.GetCurrentProcess().MainModule!.FileName;
        rk.SetValue(App.AppName, path);
    }

    public static void DisableAutoStartup()
    {
        using var rk = RegistryKey();
        rk.DeleteValue(App.AppName, false);
    }
}
using Microsoft.UI.Xaml.Controls;

namespace RemoteController.ViewModels.Pages;

public class GeneralViewModel : ViewModel, IPageViewModel
{
    public Symbol Symbol => Symbol.Home;
    public string Title => "General";
}

public class FoldersViewModel : ViewModel, IPageViewModel
{
    public Symbol Symbol => Symbol.Folder;
    public string Title => "Folders";
}

public class CommandsViewModel : ViewModel, IPageViewModel
{
    public Symbol Symbol => Symbol.Remote;
    public string Title => "Commands";
}

public class SoundDevicesViewModel : ViewModel, IPageViewModel
{
    public Symbol Symbol => Symbol.Volume;
    public string Title => "Sound devices";
}

public class HotkeysViewModel : ViewModel, IPageViewModel
{
    public Symbol Symbol => Symbol.Keyboard;
    public string Title => "Hotkeys";
}

public class SettingsViewModel : ViewModel, IPageViewModel
{
    public Symbol Symbol => Symbol.Setting;
    public string Title => "Settings";
}
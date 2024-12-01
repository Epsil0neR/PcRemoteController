using System.Reflection;
using System.Windows.Input;
using Windows.ApplicationModel;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Helpers;
using System.Diagnostics;

namespace RemoteController.WinUi.ViewModels.Pages;

public partial class SettingsViewModel : ObservableObject
{
    private readonly IThemeSelectorService _themeSelectorService;
    private ElementTheme _elementTheme;
    private string _versionDescription;

    public ElementTheme ElementTheme
    {
        get => _elementTheme;
        set => SetProperty(ref _elementTheme, value);
    }

    public string VersionDescription
    {
        get => _versionDescription;
        set => SetProperty(ref _versionDescription, value);
    }

    public ICommand SwitchThemeCommand
    {
        get;
    }

    public SettingsViewModel(IThemeSelectorService themeSelectorService)
    {
        _themeSelectorService = themeSelectorService;
        _elementTheme = _themeSelectorService.Theme;
        _versionDescription = GetVersionDescription();

        SwitchThemeCommand = new RelayCommand<ElementTheme>(
            async (param) =>
            {
                if (ElementTheme != param)
                {
                    ElementTheme = param;
                    await _themeSelectorService.SetThemeAsync(param);
                }
            });
    }

    private static string GetVersionDescription()
    {
        Version version;

        if (RuntimeHelper.IsMSIX)
        {
            var packageVersion = Package.Current.Id.Version;

            version = new(packageVersion.Major, packageVersion.Minor, packageVersion.Build, packageVersion.Revision);
        }
        else
        {
            version = Assembly.GetExecutingAssembly().GetName().Version!;
        }

        return $"{"AppDisplayName".GetLocalized()} - {version.Major}.{version.Minor}.{version.Build}.{version.Revision}";
    }

    [RelayCommand]
    private void OpenLogsFolder()
    {
        var path = Path.Combine(AppContext.BaseDirectory, "Logs"); //TODO: This is copied from App.xaml.cs configuration. Find a better way to retrieve path to logs folder.
        Process.Start("explorer.exe", path);
    }

    [RelayCommand]
    private void OpenLogFile()
    {
        var path = Path.Combine(AppContext.BaseDirectory, "Logs", "All.log"); //TODO: This is copied from App.xaml.cs configuration. Find a better way to retrieve path to logs file.
        var app = GetVSCodePath() ?? "notepad.exe";
        Process.Start(app, path);
    }

    /// <summary>
    /// Tries to retrieve path to VS Code (best tool to analyze log file.
    /// </summary>
    private static string? GetVSCodePath()
    {
        var app = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Programs", "Microsoft VS Code", "Code.exe");
        return File.Exists(app)
            ? app
            : null;
    }
}

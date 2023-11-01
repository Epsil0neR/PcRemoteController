using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Utils;

namespace RemoteController.WinUi.ViewModels;

public class GenericViewModel : ObservableRecipient
{
    private readonly IWritableOptions<GeneralOptions> _options;
    private bool _autoStartup;

    public GenericViewModel(IWritableOptions<GeneralOptions> options)
    {
        _options = options;
        _autoStartup = WindowsUtils.IsAutoStartupEnabled();

        ToggleAutoStartupCommand = new RelayCommand(ToggleAutoStartup);
    }

    public bool AutoStartup
    {
        get => _autoStartup;
        set
        {
            if (value)
                WindowsUtils.EnableAutoStartup();
            else
                WindowsUtils.DisableAutoStartup();

            _autoStartup = value;
            OnPropertyChanged();
        }
    }

    public ICommand ToggleAutoStartupCommand { get; }

    private void ToggleAutoStartup()
    {
        AutoStartup = !AutoStartup;
    }
}

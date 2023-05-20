using System.Windows.Input;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.ViewModels;

public class GenericViewModel : ObservableRecipient
{
    private readonly IWritableOptions<GeneralOptions> _options;

    public GenericViewModel(IWritableOptions<GeneralOptions> options)
    {
        _options = options;

        IncreaseCounterCommand = new RelayCommand(IncreaseCounter);
    }

    public int Counter => _options.Value.ClickCounter;

    public ICommand IncreaseCounterCommand { get; }

    private void IncreaseCounter()
    {
        _options.Update(o =>
        {
            o.ClickCounter++;
        });
    }
}

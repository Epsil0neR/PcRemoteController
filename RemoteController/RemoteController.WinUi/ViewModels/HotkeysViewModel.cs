using Epsiloner.WinUi.Services;

namespace RemoteController.WinUi.ViewModels;

public partial class HotkeysViewModel : ObservableRecipient
{
    public IHotkeysService Service { get; }

    public HotkeysViewModel(IHotkeysService service)
    {
        Service = service;
    }

    [RelayCommand]
    void RestartHook()
    {
        Service.ReattachHooks();
    }
}

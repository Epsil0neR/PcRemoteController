using RemoteController.Keyboard;

namespace RemoteController.WinUi.ViewModels;

public partial class HotkeysViewModel : ObservableRecipient
{
    public KeyboardHookManager KeyboardHookManager { get; }

    public HotkeysViewModel(KeyboardHookManager keyboardHookManager)
    {
        KeyboardHookManager = keyboardHookManager;
    }

    [RelayCommand]
    void RestartHook()
    {
        KeyboardHookManager.ReHook();
    }
}

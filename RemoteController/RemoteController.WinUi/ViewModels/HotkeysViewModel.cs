using Epsiloner.WinUi.Gestures;
using Epsiloner.WinUi.Services;
using Windows.System;

namespace RemoteController.WinUi.ViewModels;

public partial class HotkeysViewModel : ObservableRecipient
{
    public IHotkeysService Service { get; }

    public HotkeysViewModel(IHotkeysService service)
    {
        Service = service;
        Service.IsPaused = true;
    }

    [RelayCommand]
    void RestartHook()
    {
        Service.ReattachHooks();
    }

    public MultiKeyGesture TestGestures { get; } = new(new Gesture[]
    {
        new(VirtualKey.A, VirtualKeyModifiers.Control | VirtualKeyModifiers.Menu | VirtualKeyModifiers.Shift | VirtualKeyModifiers.Windows),
        new(VirtualKey.B, VirtualKeyModifiers.Shift),
        new(VirtualKey.Left),
        new(VirtualKey.Up),
        new(VirtualKey.Right),
        new(VirtualKey.Down),
        new(VirtualKey.Back),
    });
}

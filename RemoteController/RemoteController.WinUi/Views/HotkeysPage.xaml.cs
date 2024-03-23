using System.ComponentModel;
using Windows.System;
using Windows.UI.Core;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

[ViewFor<HotkeysViewModel>(4)]
[PageSymbol(Symbol.Keyboard)]
[Description("Hotkeys")]
public sealed partial class HotkeysPage
{
    public HotkeysViewModel ViewModel { get; }

    public HotkeysPage()
    {
        ViewModel = App.GetService<HotkeysViewModel>();
        InitializeComponent();
        var isShiftPressed = Microsoft.UI.Input.InputKeyboardSource.GetKeyStateForCurrentThread(VirtualKey.Shift) == CoreVirtualKeyStates.Down;
    }
}

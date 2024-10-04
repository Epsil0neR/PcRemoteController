using RemoteController.WinUi.HotKeys;

namespace RemoteController.WinUi.Controls;

public sealed partial class HotkeyDialog
{
    public static readonly DependencyProperty ViewModelProperty = DependencyProperty.Register(
        nameof(ViewModel), typeof(HotkeyGestureEditorViewModel), typeof(HotkeyDialog), new(null));

    public HotkeyGestureEditorViewModel ViewModel
    {
        get => (HotkeyGestureEditorViewModel)GetValue(ViewModelProperty);
        set => SetValue(ViewModelProperty, value);
    }
}
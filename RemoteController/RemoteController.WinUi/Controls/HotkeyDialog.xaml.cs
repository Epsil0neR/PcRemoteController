using RemoteController.WinUi.HotKeys;

namespace RemoteController.WinUi.Controls;

public sealed partial class HotkeyDialog
{
    public static readonly DependencyProperty ViewModelProperty = DependencyProperty.Register(
        nameof(ViewModel), typeof(HotkeyGestureEditorViewModel), typeof(HotkeyDialog), new(null, ViewModelPropertyChangedCallback));

    private static void ViewModelPropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        if (e.OldValue is HotkeyGestureEditorViewModel old)
        {
            old.EditGestureDialog = null;
        }

        if (e.NewValue is HotkeyGestureEditorViewModel value)
        {
            value.EditGestureDialog = (HotkeyDialog)d;
        }

    }

    public HotkeyGestureEditorViewModel ViewModel
    {
        get => (HotkeyGestureEditorViewModel)GetValue(ViewModelProperty);
        set => SetValue(ViewModelProperty, value);
    }
}
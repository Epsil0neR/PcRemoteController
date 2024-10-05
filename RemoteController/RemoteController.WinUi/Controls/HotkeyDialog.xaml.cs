using RemoteController.WinUi.HotKeys;

namespace RemoteController.WinUi.Controls;

public sealed partial class HotkeyDialog
{
    public static readonly DependencyProperty ViewModelProperty = DependencyProperty.Register(
        nameof(ViewModel), typeof(HotkeyGestureEditorViewModel), typeof(HotkeyDialog), new(null, ViewModelPropertyChangedCallback));
    
    public HotkeyGestureEditorViewModel? ViewModel
    {
        get => (HotkeyGestureEditorViewModel)GetValue(ViewModelProperty);
        set => SetValue(ViewModelProperty, value);
    }

    public HotkeyDialog()
    {
        InitializeComponent();

        // Pause hotkeys while dialog is opened:
        Opened += OnOpened;
        Closed += OnClosed;
    }

    private void OnOpened(ContentDialog sender, ContentDialogOpenedEventArgs args)
    {
        if (ViewModel is null)
            return;

        ViewModel.HotkeysService.IsPaused = true;
    }

    private void OnClosed(ContentDialog sender, ContentDialogClosedEventArgs args)
    {
        if (ViewModel is null)
            return;

        ViewModel.HotkeysService.IsPaused = false;
    }

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
}
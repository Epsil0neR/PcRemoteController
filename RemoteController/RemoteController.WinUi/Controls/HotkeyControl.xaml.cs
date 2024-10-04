using RemoteController.WinUi.Extensions;
using RemoteController.WinUi.HotKeys;

namespace RemoteController.WinUi.Controls;

public sealed partial class HotkeyControl
{
    public static readonly DependencyProperty HotkeyItemDependencyProperty = DependencyProperty.Register(
        nameof(HotkeyItem), typeof(HotkeyItem), typeof(HotkeyControl), new(default(HotkeyItem), HotkeyPropertyChangedCallback));

    private static void HotkeyPropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
    }

    public HotkeyItem? HotkeyItem
    {
        get => (HotkeyItem)GetValue(HotkeyItemDependencyProperty);
        set => SetValue(HotkeyItemDependencyProperty, value);
    }

    [RelayCommand()]
    private async Task OpenEditor()
    {
        if (HotkeyItem is null)
            return;

        var editor = this.Resolve<HotkeyGestureEditorViewModel>();
        await editor.OpenEditor(HotkeyItem);
    }

    public HotkeyControl()
    {
        InitializeComponent();
    }
}
using RemoteController.WinUi.Extensions;
using RemoteController.WinUi.HotKeys;

namespace RemoteController.WinUi.Controls;

/// <summary>
/// Represents <see cref="HotkeyItem"/> with ability to execute hotkey and ability to change gesture.
/// </summary>
public sealed partial class HotkeyControl
{
    /// <summary>
    /// (Dependency Property) Edit button visibility.
    /// </summary>
    public static readonly DependencyProperty ShowEditButtonProperty = DependencyProperty.Register(
        nameof(ShowEditButton), typeof(bool), typeof(HotkeyControl), new(true));

    /// <summary>
    /// Edit button visibility.
    /// </summary>
    public bool ShowEditButton
    {
        get => (bool)GetValue(ShowEditButtonProperty);
        set => SetValue(ShowEditButtonProperty, value);
    }

    /// <summary>
    /// (Dependency Property) Associated hotkey.
    /// </summary>
    public static readonly DependencyProperty HotkeyItemDependencyProperty = DependencyProperty.Register(
        nameof(HotkeyItem), typeof(HotkeyItem), typeof(HotkeyControl), new(default(HotkeyItem)));
    
    /// <summary>
    /// Associated hotkey.
    /// </summary>
    public HotkeyItem? HotkeyItem
    {
        get => (HotkeyItem)GetValue(HotkeyItemDependencyProperty);
        set => SetValue(HotkeyItemDependencyProperty, value);
    }

    /// <summary>
    /// (Dependency Property) Indicates if hotkey can be executed by pressing this as button.
    /// </summary>
    public static readonly DependencyProperty IsHotkeyEnabledProperty = DependencyProperty.Register(
        nameof(IsHotkeyEnabled), typeof(bool), typeof(HotkeyControl), new(true));

    /// <summary>
    /// Indicates if hotkey can be executed by pressing this as button.
    /// </summary>
    public bool IsHotkeyEnabled
    {
        get => (bool)GetValue(IsHotkeyEnabledProperty);
        set => SetValue(IsHotkeyEnabledProperty, value);
    }

    /// <summary>
    /// Executes <see cref="HotkeyItem"/>.
    /// </summary>
    [RelayCommand]
    private void ExecuteHotkey()
    {
        HotkeyItem?.Execute();
    }

    /// <summary>
    /// Opens visual editor for <see cref="HotkeyItem"/>.
    /// </summary>
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
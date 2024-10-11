using CommunityToolkit.Mvvm.Messaging;
using Epsiloner.Collections;
using RemoteController.WinUi.HotKeys;
using RemoteController.WinUi.Messages;

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

    public ObservableCollection<HotkeyItemControl> Items { get; } = new();

    public HotkeyDialog()
    {
        InitializeComponent();

        // Pause hotkeys while dialog is opened:
        Opened += OnOpened;
        Closed += OnClosed;
    }

    [RelayCommand]
    private void AddItem()
    {
        var item = new HotkeyItemControl()
        {
            RemoveCommand = RemoveItemCommand
        };
        Items.Add(item);
    }

    [RelayCommand]
    private void RemoveItem(HotkeyItemControl? item)
    {
        if (item is null)
            return;

        Items.Remove(item);
    }

    private void OnOpened(ContentDialog sender, ContentDialogOpenedEventArgs args)
    {
        if (ViewModel is null)
            return;

        ViewModel.HotkeysService.IsPaused = true;
        Load();
    }

    private void OnClosed(ContentDialog sender, ContentDialogClosedEventArgs args)
    {
        if (ViewModel is null)
            return;

        ViewModel.HotkeysService.IsPaused = false;
        Reset();
    }

    private static void ViewModelPropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        var dialog = (HotkeyDialog)d;

        if (e.OldValue is HotkeyGestureEditorViewModel old)
        {
            old.EditGestureDialog = null;
            old.Messenger.UnregisterAll(dialog);
            old.Control = null;
        }

        if (e.NewValue is HotkeyGestureEditorViewModel value)
        {
            value.EditGestureDialog = dialog;
            value.Messenger.RegisterAll(dialog);
            value.Control = dialog;
        }
    }

    private void Reset()
    {
        Items.Clear();
    }

    private void Load()
    {
        Reset();
        if (ViewModel?.GestureEditor is { } editor)
        {
            Items.AddRange(editor.Gestures.Select(x => new HotkeyItemControl(x)
            {
                RemoveCommand = RemoveItemCommand,
            }));
        }
    }
}
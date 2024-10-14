using System.Windows.Input;
using Windows.System;
using Epsiloner.WinUi.Gestures;
using RemoteController.WinUi.Extensions;
using Epsiloner.WinUi.Services;
using CommunityToolkit.Mvvm.Messaging;
using RemoteController.WinUi.Messages;

namespace RemoteController.WinUi.Controls;

public sealed partial class HotkeyItemControl
{
    public static readonly DependencyProperty RemoveCommandProperty = DependencyProperty.Register(
        nameof(RemoveCommand), typeof(ICommand), typeof(HotkeyItemControl), new(default(ICommand)));

    /// <summary>
    /// Command to remove this item from list.
    /// </summary>
    public ICommand RemoveCommand
    {
        get => (ICommand)GetValue(RemoveCommandProperty);
        set => SetValue(RemoveCommandProperty, value);
    }

    public static readonly DependencyProperty KeyProperty = DependencyProperty.Register(
        nameof(Key), typeof(VirtualKey), typeof(HotkeyItemControl), new(VirtualKey.None, PropertyChangedCallback));

    public VirtualKey Key
    {
        get => (VirtualKey)GetValue(KeyProperty);
        set => SetValue(KeyProperty, value);
    }

    public static readonly DependencyProperty ModifierShiftProperty = DependencyProperty.Register(
        nameof(ModifierShift), typeof(bool), typeof(HotkeyItemControl), new(false, PropertyChangedCallback));

    public bool ModifierShift
    {
        get => (bool)GetValue(ModifierShiftProperty);
        set => SetValue(ModifierShiftProperty, value);
    }

    public static readonly DependencyProperty ModifierWindowsProperty = DependencyProperty.Register(
        nameof(ModifierWindows), typeof(bool), typeof(HotkeyItemControl), new(false, PropertyChangedCallback));

    public bool ModifierWindows
    {
        get => (bool)GetValue(ModifierWindowsProperty);
        set => SetValue(ModifierWindowsProperty, value);
    }

    public static readonly DependencyProperty ModifierAltProperty = DependencyProperty.Register(
        nameof(ModifierAlt), typeof(bool), typeof(HotkeyItemControl), new(false, PropertyChangedCallback));

    public bool ModifierAlt
    {
        get => (bool)GetValue(ModifierAltProperty);
        set => SetValue(ModifierAltProperty, value);
    }

    public static readonly DependencyProperty ModifierControlProperty = DependencyProperty.Register(
        nameof(ModifierControl), typeof(bool), typeof(HotkeyItemControl), new(false, PropertyChangedCallback));

    public bool ModifierControl
    {
        get => (bool)GetValue(ModifierControlProperty);
        set => SetValue(ModifierControlProperty, value);
    }

    private static void PropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        var hotkey = ((HotkeyItemControl)d);
        hotkey.Messenger.Send(new GestureDialogItemChanged()
        {
            ItemControl = hotkey
        });
    }

    public KeyboardHookService KeyboardHookService { get; }
    public IMessenger Messenger { get; }

    public HotkeyItemControl()
    {
        KeyboardHookService = this.Resolve<KeyboardHookService>();
        Messenger = this.Resolve<IMessenger>();

        InitializeComponent();
    }

    public HotkeyItemControl(Gesture gesture) :this()
    {
        Key = gesture.Key;
        ModifierControl = gesture.Modifiers.HasFlag(VirtualKeyModifiers.Control);
        ModifierAlt = gesture.Modifiers.HasFlag(VirtualKeyModifiers.Menu);
        ModifierShift = gesture.Modifiers.HasFlag(VirtualKeyModifiers.Shift);
        ModifierWindows = gesture.Modifiers.HasFlag(VirtualKeyModifiers.Windows);
    }

    public Gesture? ToGesture()
    {
        var modifiers = VirtualKeyModifiers.None;
        if (ModifierControl) modifiers |= VirtualKeyModifiers.Control;
        if (ModifierAlt) modifiers |= VirtualKeyModifiers.Menu;
        if (ModifierShift) modifiers |= VirtualKeyModifiers.Shift;
        if (ModifierWindows) modifiers |= VirtualKeyModifiers.Windows;

        if (modifiers == VirtualKeyModifiers.None && Key == VirtualKey.None)
            return null;

        return new(Key, modifiers);
    }

    public bool IsValid()
    {
        return ToGesture()?.IsValid() == true;
    }

    private void KeyFlyout_OnOpened(object? sender, object e)
    {
        this.Logger().LogDebug($"KeyFlyout opened for {ToGesture()}");
        KeyboardHookService.KeyDown += KeyboardHookServiceOnKeyDown;
    }

    private void KeyFlyout_OnClosed(object? sender, object e)
    {
        this.Logger().LogDebug($"KeyFlyout closed for {ToGesture()}");
        KeyboardHookService.KeyDown -= KeyboardHookServiceOnKeyDown;
    }

    private void KeyboardHookServiceOnKeyDown(object? sender, KeyboardHookServiceEventArgs e)
    {
        // Ignore any keys while Key selector flyout is closed.
        if (!KeyFlyout.IsOpen)
            return;

        var vk = HotkeysService.ParseKey(e.KeyCode);
        if (!Gesture.IsValidKey(vk))
            return;

        Key = vk;
        KeyFlyout.Hide();
    }
}
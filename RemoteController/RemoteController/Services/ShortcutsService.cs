using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Input;
using Epsiloner.Wpf.Gestures;
using Org.BouncyCastle.Security;
using RemoteController.Keyboard;

namespace RemoteController.Services;

public class ShortcutAction
{
    public required string Name { get; init; }
    public required Action Action { get; init; }

    public bool IsValid()
    {
        return !string.IsNullOrWhiteSpace(Name)
               && Action is not null;
    }
}

public class ShortcutsService
{
    private ModifierKeys _modifierKeys = ModifierKeys.None;

    public KeyboardHookManager KeyboardHookManager { get; }

    /// <summary>
    /// Shortcuts service can be paused during editing gestures.
    /// </summary>
    public bool IsPaused { get; set; }

    public readonly Dictionary<Gesture, ShortcutAction> _registrations = new();

    public ShortcutsService(KeyboardHookManager keyboardHookManager)
    {
        KeyboardHookManager = keyboardHookManager;
        KeyboardHookManager.KeyDown += OnKeyDown;
        KeyboardHookManager.KeyUp += OnKeyUp;
    }

    public void Register(Gesture gesture, ShortcutAction shortcutAction)
    {
        if (gesture is null)
            throw new ArgumentNullException(nameof(gesture));
        if (shortcutAction is null)
            throw new ArgumentNullException(nameof(shortcutAction));
        if (!shortcutAction.IsValid())
            throw new ArgumentException("Shortcut action is invalid", nameof(shortcutAction));
        if (_registrations.Keys.Any(x => x.Matches(gesture.Key, gesture.Modifiers)))
            throw new ArgumentException("Gesture already is already registered.", nameof(gesture));

        _registrations[gesture] = shortcutAction;
    }

    private void OnKeyUp(object? sender, KeyboardHookManagerEventArgs e)
    {
        var vkCode = e.KeyCode;
        var key = KeyInterop.KeyFromVirtualKey(vkCode);

        switch (key)
        {
            case Key.LeftShift:
            case Key.RightShift:
                _modifierKeys &= ~ModifierKeys.Shift;
                break;
            case Key.LeftAlt:
            case Key.RightAlt:
                _modifierKeys &= ~ModifierKeys.Alt;
                break;
            case Key.LeftCtrl:
            case Key.RightCtrl:
                _modifierKeys &= ~ModifierKeys.Control;
                break;
            case Key.LWin:
            case Key.RWin:
                _modifierKeys &= ~ModifierKeys.Windows;
                break;
        }
    }

    private void OnKeyDown(object? sender, KeyboardHookManagerEventArgs e)
    {
        var vkCode = e.KeyCode;
        var key = KeyInterop.KeyFromVirtualKey(vkCode);

        switch (key)
        {
            case Key.LeftShift:
            case Key.RightShift:
                _modifierKeys |= ModifierKeys.Shift;
                return;
            case Key.LeftAlt:
            case Key.RightAlt:
                _modifierKeys |= ModifierKeys.Alt;
                return;
            case Key.LeftCtrl:
            case Key.RightCtrl:
                _modifierKeys |= ModifierKeys.Control;
                return;
            case Key.LWin:
            case Key.RWin:
                _modifierKeys |= ModifierKeys.Windows;
                return;
        }

        if (IsPaused)
            return;

        var pair = _registrations.FirstOrDefault(x => x.Key.Matches(key, _modifierKeys));
        if (pair.Value is null)
            return;

        Task.Run(pair.Value.Action.Invoke);
    }
}
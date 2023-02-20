using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Input;
using Epsiloner.Wpf.Gestures;
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

    private readonly Dictionary<string, Action> _handlers = new();
    private readonly Dictionary<string, Gesture?> _gestures = new();

    public ShortcutsService(KeyboardHookManager keyboardHookManager)
    {
        KeyboardHookManager = keyboardHookManager;
        KeyboardHookManager.KeyDown += OnKeyDown;
        KeyboardHookManager.KeyUp += OnKeyUp;
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

        var pair = _gestures.FirstOrDefault(x => x.Value?.Matches(key, _modifierKeys) == true);
        if (pair.Value is null)
            return;

        if (_handlers.TryGetValue(pair.Key, out var handler))
            Task.Run(handler.Invoke);
    }

    public void Change(string name, Gesture? gesture)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentNullException(nameof(name), "Name cannot be empty or whitespace.");

        foreach (var pair in _gestures.Where(x => x.Value is not null && Compare(x.Value, gesture)).ToList())
            _gestures[pair.Key] = null;

        _gestures[name] = gesture;
    }

    public void Change(string name, Action? handler)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentNullException(nameof(name), "Name cannot be empty or whitespace.");

        if (handler is null)
            _handlers.Remove(name);
        else
            _handlers[name] = handler;
    }

    public Gesture? GetGesture(string name)
    {
        if (_gestures.TryGetValue(name, out var rv))
            return rv;

        return null;
    }

    private static bool Compare(Gesture? left, Gesture? right)
    {
        if (left is null && right is null)
            return true;
        if (left is null || right is null)
            return false;

        return left.Key == right.Key && left.Modifiers == right.Modifiers;
    }
}
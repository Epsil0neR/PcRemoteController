using System.Collections.Generic;
using System.Windows.Input;
using Epsiloner.OptionsModule;
using Epsiloner.Wpf.Gestures;

namespace RemoteController.Configs;

public struct GestureData
{
    public Key Key { get; set; }
    public ModifierKeys Modifiers { get; set; }

    public static GestureData From(Gesture gesture)
    {
        return new()
        {
            Key = gesture.Key,
            Modifiers = gesture.Modifiers
        };
    }

    public Gesture ToGesture()
    {
        return new(Key, Modifiers);
    }
}

public class ShortcutServiceOptions : IOptionsSection
{
    public Dictionary<string, GestureData>? Gestures { get; set; } = new();
}
using System.Collections.Immutable;
using System.Text.Json.Serialization;
using Epsiloner.WinUi.Gestures;
using Windows.System;
using Microsoft.Extensions.Configuration;

namespace RemoteController.WinUi.Models;

/// <summary>
/// There is no way to use custom serializer via <see cref="IConfigurationSection"/>
/// </summary>
public class HotkeyGesturesOptions : Dictionary<string, string?>
{
    private IReadOnlyDictionary<string, MultiKeyGesture?>? _data;
    private readonly Lazy<IReadOnlyDictionary<string, MultiKeyGesture?>> _dataLazy;

    public HotkeyGesturesOptions()
    {
        _dataLazy = new(() => this.ToImmutableDictionary(x => x.Key, x => Read(x.Value)),
            LazyThreadSafetyMode.ExecutionAndPublication);
    }

    [JsonIgnore] public IReadOnlyDictionary<string, MultiKeyGesture?> Data => _data ?? _dataLazy.Value;

    private MultiKeyGesture? Read(string? json)
    {
        if (string.IsNullOrWhiteSpace(json))
            return null;

        var gestures = new List<Gesture>();
        foreach (var jsonGesture in json.Split(";"))
        {
            var parts = jsonGesture.Split("-");
            switch (parts.Length)
            {
                case 1:
                    if (Enum.TryParse(parts[0], out VirtualKey key))
                        gestures.Add(new(key));
                    break;
                case > 1:
                    if (Enum.TryParse(parts[1], out key) && Enum.TryParse(parts[0], out VirtualKeyModifiers modifiers))
                        gestures.Add(new(key, modifiers));
                    break;
            }
        }

        return gestures.Count > 0
            ? new MultiKeyGesture(gestures)
            : null;
    }

    /// <summary>
    /// Update using gesture objects.
    /// </summary>
    /// <param name="data"></param>
    public void Update(IReadOnlyDictionary<string, MultiKeyGesture?> data)
    {
        _data = data;
        foreach (var (key, gesture) in data)
        {
            this[key] = ToJson(gesture);
        }
    }

    private static string? ToJson(MultiKeyGesture? gesture) =>
        gesture is null
            ? null
            : string.Join(";", gesture.Gestures.Select(ToJson));

    private static string ToJson(Gesture gesture) =>
        gesture.Modifiers == VirtualKeyModifiers.None
            ? $"{gesture.Key}"
            : $"{gesture.Modifiers}-{gesture.Key}";
}
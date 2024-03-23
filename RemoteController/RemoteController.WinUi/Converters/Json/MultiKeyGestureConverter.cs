using Windows.System;
using Epsiloner.WinUi.Gestures;
using Newtonsoft.Json;

namespace RemoteController.WinUi.Converters.Json;

public class MultiKeyGestureConverter : JsonConverter<MultiKeyGesture>
{
    public override void WriteJson(JsonWriter writer, MultiKeyGesture? value, JsonSerializer serializer)
    {
        if (value is null)
        {
            writer.WriteValue(string.Empty);
            return;
        }
        var json = string.Join(";", value.Gestures.Select(ToJson));
        writer.WriteValue(json);
    }

    public override MultiKeyGesture? ReadJson(JsonReader reader, Type objectType, MultiKeyGesture? existingValue, bool hasExistingValue, JsonSerializer serializer)
    {
        var json = reader.Value as string;
        if (string.IsNullOrWhiteSpace(json))
            return null;

        var gestures = new List<Gesture>();
        foreach (var jsonGesture in json.Split(";"))
        {
            var parts = jsonGesture.Split("-");
            switch (parts.Length)
            {
                case 0:
                    break;
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

    private static string ToJson(Gesture gesture) =>
        gesture.Modifiers == VirtualKeyModifiers.None 
            ? $"{gesture.Key}" 
            : $"{gesture.Modifiers}-{gesture.Key}";
}
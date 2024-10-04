using Epsiloner.WinUi.Gestures;
using Epsiloner.WinUi.Services;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;
using System.ComponentModel;

namespace RemoteController.WinUi.HotKeys;

public class HotkeysGestureService : IHotkeysGestureService
{
    public IHotkeysService Service { get; }
    public IWritableOptions<HotkeyGesturesOptions> Options { get; }
    public IEnumerable<HotkeyItem> Hotkeys { get; }

    public HotkeysGestureService(
        IHotkeysService service,
        IWritableOptions<HotkeyGesturesOptions> options,
        IEnumerable<HotkeyItem> hotkeys)
    {
        Service = service;
        Options = options;
        Hotkeys = hotkeys;
        
        // Initialize hotkey handlers.
        foreach (var hotkey in Hotkeys)
            Service.Change(hotkey.CodeName, hotkey.Execute);
    }

    /// <inheritdoc />
    public void Load()
    {
        foreach (var pair in Options.Value.Data)
            Service.Change(pair.Key, pair.Value);

        foreach (var hotkeyItem in Hotkeys)
        {
            if (Options.Value.Data.TryGetValue(hotkeyItem.CodeName, out var gesture))
                hotkeyItem.Gesture = gesture!;
        }
    }

    /// <inheritdoc />
    public void Save(string codeName, MultiKeyGesture gesture)
    {
        if (Options.Value.Data.TryGetValue(codeName, out var g) && gesture == g)
            return;

        Dictionary<string, MultiKeyGesture?> data = new(Options.Value.Data)
        {
            {codeName, gesture}
        };
        Options.Value.Update(data);
        Options.Update();
    }

    /// <inheritdoc />
    public void StartWatch()
    {
        foreach (var hotkeyItem in Hotkeys) 
            hotkeyItem.PropertyChanged += HotkeyItemOnPropertyChanged;
    }

    /// <inheritdoc />
    public void StopWatch()
    {
        foreach (var hotkeyItem in Hotkeys) 
            hotkeyItem.PropertyChanged -= HotkeyItemOnPropertyChanged;
    }

    private void HotkeyItemOnPropertyChanged(object? sender, PropertyChangedEventArgs e)
    {
        if (e.PropertyName != nameof(HotkeyItem.Gesture))
            return;

        if (sender is not HotkeyItem hotkeyItem)
            return;

        Save(hotkeyItem.CodeName, hotkeyItem.Gesture);
    }
}
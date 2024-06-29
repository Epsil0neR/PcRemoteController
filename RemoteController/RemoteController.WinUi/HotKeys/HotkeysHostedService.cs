using System.ComponentModel;
using Epsiloner.WinUi.Services;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.HotKeys;

public class HotkeysHostedService(
    IHotkeysService service,
    IWritableOptions<HotkeyGesturesOptions> options,
    IEnumerable<HotkeyItem> hotkeys)
    : IHostedService
{
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        foreach (var pair in options.Value.Data)
            service.Change(pair.Key, pair.Value);

        foreach (var hotkeyItem in hotkeys)
        {
            service.Change(hotkeyItem.CodeName, hotkeyItem.Execute);
            if (options.Value.Data.TryGetValue(hotkeyItem.CodeName, out var gesture))
                hotkeyItem.Gesture = gesture!;
            hotkeyItem.PropertyChanged += HotkeyItemOnPropertyChanged;
        }
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        foreach (var hotkeyItem in hotkeys) 
            hotkeyItem.PropertyChanged -= HotkeyItemOnPropertyChanged;
    }

    private void HotkeyItemOnPropertyChanged(object? sender, PropertyChangedEventArgs e)
    {
        if (e.PropertyName != nameof(HotkeyItem.Gesture))
            return;

        if (sender is not HotkeyItem hotkeyItem)
            return;

        var data = options.Value.Data.ToDictionary();
        if (options.Value.Data.TryGetValue(hotkeyItem.CodeName, out var gesture) || gesture != hotkeyItem.Gesture)
        {
            data[hotkeyItem.CodeName] = hotkeyItem.Gesture;
            options.Value.Update(data);
            options.Update(_ => { });
        }
    }
}
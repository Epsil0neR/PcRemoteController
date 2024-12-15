using Epsiloner.WinUi.Services;
using RemoteController.WinUi.HotKeys;

namespace RemoteController.WinUi.ViewModels.Pages;

public class GroupedHotkeys : List<HotkeyItem>
{

    public GroupedHotkeys(IGrouping<HotkeyGroup, HotkeyItem> items)
        : base(items)
    {
        Group = items.Key;
    }

    public GroupedHotkeys(IEnumerable<HotkeyItem> items)
        : base(items)
    {
    }

    public HotkeyGroup Group { get; init; }
}

public partial class HotkeysViewModel : ObservableObject
{

    public IHotkeysService Service { get; }

    public HotkeysViewModel(IHotkeysService service, IEnumerable<HotkeyItem> hotkeys)
    {
        Service = service;
        Grouped = hotkeys
            .GroupBy(x => x.Group)
            .OrderBy(x => x.Key)
            .Select(x => new GroupedHotkeys(x))
            .ToList();
    }

    public List<GroupedHotkeys> Grouped { get; }

    [RelayCommand]
    private void RestartHook()
    {
        Service.ReattachHooks();
    }

    public static RelayCommand<HotkeyItem> ClearHotkeyCommand { get; } = new(hotkey =>
    {
        if (hotkey is null)
            return;

        hotkey.Gesture = null;
    });
}

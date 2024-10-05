using Epsiloner.WinUi.Gestures;
using Epsiloner.WinUi.Services;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.HotKeys;

/// <summary>
/// This VM must be used only as singleton.
/// </summary>
public partial class HotkeyGestureEditorViewModel : ObservableObject
{
    public IHotkeysService HotkeysService { get; }

    /// <summary>
    /// Dialog to edit gesture for hotkey.
    /// </summary>
    public ContentDialog? EditGestureDialog { get; set; }

    /// <summary>
    /// Gesture editor context.
    /// </summary>
    [ObservableProperty]
    private GestureEditorViewModel? _gestureEditor;

    public HotkeyGestureEditorViewModel(IHotkeysService hotkeysService)
    {
        HotkeysService = hotkeysService;
    }

    public Task OpenEditor(HotkeyItem hotkeyItem) => OpenEditor(hotkeyItem.CodeName, hotkeyItem.Gesture);

    public async Task OpenEditor(string codeName, MultiKeyGesture gesture)
    {
        if (EditGestureDialog is null)
            return;

        GestureEditor = new(codeName, gesture);
        await EditGestureDialog.ShowAsync();
    }

    [ObservableProperty]
    private bool _canSaveChanges = false;

    [RelayCommand]
    public void SaveChanges()
    {

    }
}
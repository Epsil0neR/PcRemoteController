using CommunityToolkit.Mvvm.Messaging;
using Epsiloner.WinUi.Gestures;
using Epsiloner.WinUi.Services;
using RemoteController.WinUi.Controls;
using RemoteController.WinUi.Messages;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.HotKeys;

/// <summary>
/// This VM must be used only as singleton.
/// </summary>
public partial class HotkeyGestureEditorViewModel :
    ObservableObject,
    IDisposable,
    IRecipient<GestureDialogItemChanged>
{

    public IMessenger Messenger { get; }

    public IHotkeysService HotkeysService { get; }

    public IHotkeysGestureService HotkeysGestureService { get; }

    /// <summary>
    /// Dialog to edit gesture for hotkey.
    /// </summary>
    public ContentDialog? EditGestureDialog { get; set; }

    public HotkeyDialog? Control { get; set; }

    /// <summary>
    /// Gesture editor context.
    /// </summary>
    [ObservableProperty]
    private GestureEditorViewModel? _gestureEditor;

    public HotkeyGestureEditorViewModel(
        IHotkeysService hotkeysService,
        IHotkeysGestureService hotkeysGestureService,
        IMessenger messenger)
    {
        HotkeysService = hotkeysService;
        HotkeysGestureService = hotkeysGestureService;
        Messenger = messenger;
        Messenger.RegisterAll(this);
    }

    public void Dispose()
    {
        Messenger.UnregisterAll(this);
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

    [ObservableProperty]
    private bool _canAddItem = true;

    [RelayCommand]
    public void SaveChanges()
    {
        if (Control is null)
            return;
        if (GestureEditor is null)
            return;
        if (!CanSaveChanges)
            return;

        var gestures = Control.Items
            .Select(x => x.ToGesture())
            .Where(x => x is not null)
            .ToList();

        var current = GestureEditor.MultiKeyGesture;
        var hotkey = HotkeysGestureService.Hotkeys.FirstOrDefault(x => x.CodeName == GestureEditor.CodeName);
        if (hotkey is not null)
        {
            hotkey.Gesture = new(gestures!, current.MaxDelay);
        }
    }

    public void Receive(GestureDialogItemChanged message) => CheckForChanges();

    /// <summary>
    /// Checks for any changes in UI.
    /// </summary>
    public void CheckForChanges()
    {
        if (Control is null)
            return;
        if (GestureEditor is null)
            return;

        UpdateCanAddItem();
        UpdateCanSaveChanges();
    }

    private void UpdateCanAddItem()
    {
        if (Control is null)
            return;

        var gestures = Control!.Items;

        // If no gestures yet exists - allow to add new one.
        if (gestures.Count == 0)
        {
            CanAddItem = true;
            return;
        }

        // Check if any item is invalid gesture or empty.
        if (gestures.Any(x => x.ToGesture()?.IsValid() != true))
        {
            CanAddItem = false;
            return;
        }

        // All items are valid and user can add more items.
        CanAddItem = true;
    }

    private void UpdateCanSaveChanges()
    {
        var gestures = Control!.Items
            .Select(x => x.ToGesture())
            .Where(x => x is not null)
            .ToList();

        // Check if empty
        if (gestures.Count == 0)
        {
            CanSaveChanges = false;
            return;
        }

        //1. Check if same as current.
        if (Compare(GestureEditor!.MultiKeyGesture, gestures!))
        {
            CanSaveChanges = false;
            return;
        }

        foreach (var multiKeyGesture in HotkeysService.Gestures)
        {
            // Skip check with editable multi-gesture.
            if (ReferenceEquals(GestureEditor.MultiKeyGesture, multiKeyGesture))
                continue;

            //2. Check if same as any other multi-gesture.
            if (Compare(multiKeyGesture, gestures!))
            {
                CanSaveChanges = false;
                return;
            }

            //3.: Check if this will be blocked by some other multi-gesture.
            // Example: this: A,B,C. Other: A,B. Other will block execution of this.
            //4.: Check if this will block other multi-gestures.
            // Example: this: A,B. Other#1: A,B,C, Other#2: A,B,D. This will block all multi-gestures that has same beginning.

            if (CheckIfBlocks(multiKeyGesture, gestures!))
            {
                CanSaveChanges = false;
                return;
            }
        }

        CanSaveChanges = true;
    }

    private bool Compare(MultiKeyGesture multiKeyGesture, List<Gesture> gestures)
    {
        if (multiKeyGesture.Gestures.Count != gestures.Count)
            return false;

        for (var i = 0; i < gestures.Count; i++)
        {
            var g = gestures[i];
            if (!multiKeyGesture.Gestures[i].Matches(g.Key, g.Modifiers))
                return false;
        }

        return true;
    }

    private bool CheckIfBlocks(MultiKeyGesture multiKeyGesture, List<Gesture> gestures)
    {
        if (multiKeyGesture.Gestures.Count < gestures.Count)
        {
            for (var i = 0; i < multiKeyGesture.Gestures.Count; i++)
            {
                var m = multiKeyGesture.Gestures[i];
                var g = gestures[i];

                if (!m.Matches(g.Key, g.Modifiers))
                    return false;
            }

            return true;
        }
        else if (gestures.Count < multiKeyGesture.Gestures.Count)
        {
            for (var i = 0; i < gestures.Count; i++)
            {
                var g = gestures[i];
                var m = multiKeyGesture.Gestures[i];

                if (!m.Matches(g.Key, g.Modifiers))
                    return false;
            }

            return true;
        }

        return false;
    }
}
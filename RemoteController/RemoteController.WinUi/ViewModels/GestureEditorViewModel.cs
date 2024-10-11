using System.Collections.ObjectModel;
using Epsiloner.WinUi.Gestures;

namespace RemoteController.WinUi.ViewModels;

public partial class GestureEditorViewModel : ObservableObject
{
    public string CodeName { get; }

    public MultiKeyGesture MultiKeyGesture { get; }

    public ObservableCollection<Gesture> Gestures { get; }

    public GestureEditorViewModel(
        string codeName, 
        MultiKeyGesture gesture)
    {
        CodeName = codeName ?? throw new ArgumentNullException(nameof(codeName));
        MultiKeyGesture = gesture ?? throw new ArgumentNullException(nameof(gesture));

        Gestures = new(MultiKeyGesture.Gestures.ToList());
    }
}
using Epsiloner.WinUi.Gestures;

namespace RemoteController.WinUi.Controls;

/// <summary>
/// Represents <see cref="MultiKeyGesture"/> in UI.
/// </summary>
public class MultiKeyGestureVisual : Control
{
    public static readonly DependencyProperty MultiKeyGestureProperty = DependencyProperty.Register(
        nameof(MultiKeyGesture), typeof(MultiKeyGesture), typeof(MultiKeyGestureVisual), new(default(MultiKeyGesture), MultiKeyPropertyChangedCallback));

    public static readonly DependencyProperty GesturesProperty = DependencyProperty.Register(
        nameof(Gestures), typeof(IList<Gesture>), typeof(MultiKeyGestureVisual), PropertyMetadata.Create(() => new List<Gesture>()));

    private static void MultiKeyPropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        var that = (MultiKeyGestureVisual)d;
        var v = (MultiKeyGesture)e.NewValue;
        that.Gestures = v?.Gestures?.ToList() ?? new List<Gesture>();
    }

    public MultiKeyGesture MultiKeyGesture
    {
        get => (MultiKeyGesture)GetValue(MultiKeyGestureProperty);
        set => SetValue(MultiKeyGestureProperty, value);
    }

    /// <summary>
    /// Internal property. Use <see cref="MultiKeyGesture"/> property instead. <br/>
    /// Gestures for UI.
    /// </summary>
    public IList<Gesture>? Gestures
    {
        get => (IList<Gesture>)GetValue(GesturesProperty);
        set => SetValue(GesturesProperty, value);
    }
}
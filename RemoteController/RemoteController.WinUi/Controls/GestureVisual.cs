using Windows.System;
using Epsiloner.WinUi.Gestures;
using RemoteController.WinUi.Extensions;

namespace RemoteController.WinUi.Controls;

public class GestureVisual : Control
{
    public static readonly DependencyProperty GestureProperty = DependencyProperty.Register(nameof(Gesture), typeof(Gesture), typeof(GestureVisual), new(default(Gesture), GesturePropertyChangedCallback));

    public static readonly DependencyProperty KeysProperty = DependencyProperty.Register(nameof(Keys), typeof(IList<VirtualKey>), typeof(GestureVisual), PropertyMetadata.Create(() => new List<VirtualKey>()));

    public static readonly DependencyProperty KeyTemplateProperty = DependencyProperty.Register(nameof(KeyTemplate), typeof(DataTemplate), typeof(GestureVisual), new(default(DataTemplate)));

    private static void GesturePropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        var g = (Gesture?) e.NewValue;
        var gv = (GestureVisual)d;
        gv.Keys = g.ToVirtualKeys();
    }

    /// <summary>
    /// Gesture to display as a list of virtual keys.
    /// </summary>
    public Gesture Gesture
    {
        get => (Gesture)GetValue(GestureProperty);
        set => SetValue(GestureProperty, value);
    }

    /// <summary>
    /// Internal property. Use <see cref="Gesture"/> property instead. <br/>
    /// Virtual keys for UI.
    /// </summary>
    public IList<VirtualKey> Keys
    {
        get => (IList<VirtualKey>)GetValue(KeysProperty);
        set => SetValue(KeysProperty, value);
    }

    /// <summary>
    /// Template to represent each <see cref="Keys"/>.
    /// </summary>
    public DataTemplate KeyTemplate
    {
        get => (DataTemplate)GetValue(KeyTemplateProperty);
        set => SetValue(KeyTemplateProperty, value);
    }
}
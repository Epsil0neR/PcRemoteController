using Microsoft.Xaml.Interactivity;

namespace RemoteController.WinUi.Behaviors;

/// <summary>
/// Allows to modify <see cref="Slider.Value"/> via mouse wheel scroll by <see cref="Slider.SmallChange"/>
/// </summary>
public class ScrollSliderWithMouseWheelBehavior : Behavior<Slider>
{
    protected override void OnAttached()
    {
        base.OnAttached();
        AssociatedObject.PointerWheelChanged += OnPointerWheelChanged;
    }

    protected override void OnDetaching()
    {
        AssociatedObject.PointerWheelChanged -= OnPointerWheelChanged;
        base.OnDetaching();
    }

    private void OnPointerWheelChanged(object sender, PointerRoutedEventArgs e)
    {
        var slider = (Slider)sender;
        var p = e.GetCurrentPoint(slider);
        var delta = p.Properties.MouseWheelDelta;
        var change = slider.SmallChange;
        switch (delta)
        {
            case > 0:
                slider.Value = Math.Min(slider.Maximum, slider.Value + change);
                break;
            case < 0:
                slider.Value = Math.Max(slider.Minimum, slider.Value - change);
                break;
        }
    }
}
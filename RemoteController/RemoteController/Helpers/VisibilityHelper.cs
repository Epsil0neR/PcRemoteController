using System.ComponentModel;
using System.Windows;

namespace RemoteController.Helpers;

public static class VisibilityHelper
{
    public static readonly DependencyProperty IsVisibleProperty = DependencyProperty.RegisterAttached("IsVisible", typeof(bool?), typeof(VisibilityHelper), (PropertyMetadata)new FrameworkPropertyMetadata((object)null, FrameworkPropertyMetadataOptions.AffectsMeasure | FrameworkPropertyMetadataOptions.AffectsArrange | FrameworkPropertyMetadataOptions.AffectsRender, new PropertyChangedCallback(VisibilityHelper.IsVisibleChangedCallback)));
    public static readonly DependencyProperty IsCollapsedProperty = DependencyProperty.RegisterAttached("IsCollapsed", typeof(bool?), typeof(VisibilityHelper), (PropertyMetadata)new FrameworkPropertyMetadata((object)null, FrameworkPropertyMetadataOptions.AffectsMeasure | FrameworkPropertyMetadataOptions.AffectsArrange | FrameworkPropertyMetadataOptions.AffectsRender, new PropertyChangedCallback(VisibilityHelper.IsCollapsedChangedCallback)));
    public static readonly DependencyProperty IsHiddenProperty = DependencyProperty.RegisterAttached("IsHidden", typeof(bool?), typeof(VisibilityHelper), (PropertyMetadata)new FrameworkPropertyMetadata((object)null, FrameworkPropertyMetadataOptions.AffectsMeasure | FrameworkPropertyMetadataOptions.AffectsArrange | FrameworkPropertyMetadataOptions.AffectsRender, new PropertyChangedCallback(VisibilityHelper.IsHiddenChangedCallback)));

    private static void IsVisibleChangedCallback(
        DependencyObject d,
        DependencyPropertyChangedEventArgs e)
    {
        if (!(d is FrameworkElement frameworkElement))
            return;
        var newValue = (bool?)e.NewValue;
        var flag = true;
        var num = (newValue.GetValueOrDefault() == flag ? (newValue.HasValue ? 1 : 0) : 0) != 0 ? 0 : 2;
        frameworkElement.Visibility = (Visibility)num;
    }

    public static void SetIsVisible(DependencyObject element, bool? value) => element.SetValue(VisibilityHelper.IsVisibleProperty, (object)value);

    [Category("RemoteController.Helpers")]
    public static bool? GetIsVisible(DependencyObject element) => (bool?)element.GetValue(VisibilityHelper.IsVisibleProperty);

    private static void IsCollapsedChangedCallback(
        DependencyObject d,
        DependencyPropertyChangedEventArgs e)
    {
        if (!(d is FrameworkElement frameworkElement))
            return;
        var newValue = (bool?)e.NewValue;
        var flag = true;
        var num = (newValue.GetValueOrDefault() == flag ? (newValue.HasValue ? 1 : 0) : 0) != 0 ? 2 : 0;
        frameworkElement.Visibility = (Visibility)num;
    }

    public static void SetIsCollapsed(DependencyObject element, bool? value) => element.SetValue(VisibilityHelper.IsCollapsedProperty, (object)value);

    [Category("RemoteController.Helpers")]
    public static bool? GetIsCollapsed(DependencyObject element) => (bool?)element.GetValue(VisibilityHelper.IsCollapsedProperty);

    private static void IsHiddenChangedCallback(
        DependencyObject d,
        DependencyPropertyChangedEventArgs e)
    {
        if (!(d is FrameworkElement frameworkElement))
            return;
        var newValue = (bool?)e.NewValue;
        var flag = true;
        var num = (newValue.GetValueOrDefault() == flag ? (newValue.HasValue ? 1 : 0) : 0) != 0 ? 1 : 0;
        frameworkElement.Visibility = (Visibility)num;
    }

    public static void SetIsHidden(DependencyObject element, bool? value) => element.SetValue(VisibilityHelper.IsHiddenProperty, (object)value);

    [Category("RemoteController.Helpers")]
    public static bool? GetIsHidden(DependencyObject element) => (bool?)element.GetValue(VisibilityHelper.IsHiddenProperty);
}
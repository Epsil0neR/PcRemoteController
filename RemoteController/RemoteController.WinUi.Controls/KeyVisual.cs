using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Markup;
using Windows.System;

namespace RemoteController.WinUi.Controls;

[TemplatePart(Name = KeyPresenter, Type = typeof(ContentPresenter))]
[TemplateVisualState(Name = "Normal", GroupName = "CommonStates")]
[TemplateVisualState(Name = "Disabled", GroupName = "CommonStates")]
[TemplateVisualState(Name = "Default", GroupName = "StateStates")]
[TemplateVisualState(Name = "Error", GroupName = "StateStates")]
public sealed class KeyVisual : Control
{
    private const string KeyPresenter = "KeyPresenter";
    private ContentPresenter _keyPresenter;

    public object? Content
    {
        get => GetValue(ContentProperty);
        set => SetValue(ContentProperty, value);
    }

    public static readonly DependencyProperty ContentProperty = DependencyProperty.Register(nameof(Content), typeof(object), typeof(KeyVisual), new(default(string), OnContentChanged));

    public VisualType VisualType
    {
        get => (VisualType)GetValue(VisualTypeProperty);
        set => SetValue(VisualTypeProperty, value);
    }

    public static readonly DependencyProperty VisualTypeProperty = DependencyProperty.Register(nameof(VisualType), typeof(VisualType), typeof(KeyVisual), new(default(VisualType), OnSizeChanged));

    public bool IsError
    {
        get => (bool)GetValue(IsErrorProperty);
        set => SetValue(IsErrorProperty, value);
    }

    public static readonly DependencyProperty IsErrorProperty = DependencyProperty.Register(nameof(IsError), typeof(bool), typeof(KeyVisual), new(false, OnIsErrorChanged));

    public KeyVisual()
    {
        DefaultStyleKey = typeof(KeyVisual);
    }

    protected override void OnApplyTemplate()
    {
        IsEnabledChanged -= KeyVisual_IsEnabledChanged;
        _keyPresenter = (ContentPresenter)GetTemplateChild(KeyPresenter);
        Update();
        SetEnabledState();
        SetErrorState();
        IsEnabledChanged += KeyVisual_IsEnabledChanged;
        base.OnApplyTemplate();
    }

    private static void OnContentChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        ((KeyVisual)d).Update();
    }

    private static void OnSizeChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        ((KeyVisual)d).Update();
    }

    private static void OnIsErrorChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        ((KeyVisual)d).SetErrorState();
    }

    private void Update()
    {
        if (Content != null)
        {
            if (Content?.GetType() == typeof(string))
            {
                Style = GetStyleSize("Text");
                _keyPresenter.Content = Content;
            }
            else
            {
                Style = GetStyleSize("Icon");

                switch ((int)Content)
                {
                    /* We can enable other glyphs in the future
                    case 13: // The Enter key or button.
                        _keyPresenter.Content = "\uE751"; break;

                    case 8: // The Back key or button.
                        _keyPresenter.Content = "\uE750"; break;

                    case 16: // The right Shift key or button.
                    case 160: // The left Shift key or button.
                    case 161: // The Shift key or button.
                        _keyPresenter.Content = "\uE752"; break; */

                    case 38: _keyPresenter.Content = "\uE0E4"; break; // The Up Arrow key or button.
                    case 40: _keyPresenter.Content = "\uE0E5"; break; // The Down Arrow key or button.
                    case 37: _keyPresenter.Content = "\uE0E2"; break; // The Left Arrow key or button.
                    case 39: _keyPresenter.Content = "\uE0E3"; break; // The Right Arrow key or button.

                    case 91: // The left Windows key
                    case 92: // The right Windows key
                        PathIcon winIcon = XamlReader.Load(@"<PathIcon xmlns=""http://schemas.microsoft.com/winfx/2006/xaml/presentation"" Data=""M683 1229H0V546h683v683zm819 0H819V546h683v683zm-819 819H0v-683h683v683zm819 0H819v-683h683v683z"" />") as PathIcon;
                        Viewbox winIconContainer = new Viewbox();
                        winIconContainer.Child = winIcon;
                        winIconContainer.HorizontalAlignment = HorizontalAlignment.Center;
                        winIconContainer.VerticalAlignment = VerticalAlignment.Center;

                        double iconDimensions = GetIconSize();
                        winIconContainer.Height = iconDimensions;
                        winIconContainer.Width = iconDimensions;
                        _keyPresenter.Content = winIconContainer;
                        break;
                    default: _keyPresenter.Content = ((VirtualKey)Content).ToString(); break;
                }
            }
        }
    }

    public Style GetStyleSize(string styleName)
    {
        Style GetStyle(string type) => (Style)Application.Current.Resources[$"KeyVisual.Style.{type}.{styleName}"];

        return VisualType switch
        {
            VisualType.Small => GetStyle("Small"),
            VisualType.SmallOutline => GetStyle("SmallOutline"),
            VisualType.TextOnly => GetStyle("Only"),
            _ => GetStyle("Default")
        };
    }

    public double GetIconSize()
    {
        if (VisualType == VisualType.Small || VisualType == VisualType.SmallOutline)
            return (double)Application.Current.Resources["KeyVisual.SmallIconSize"];
        else
            return (double)Application.Current.Resources["KeyVisual.DefaultIconSize"];
    }

    private void KeyVisual_IsEnabledChanged(object sender, DependencyPropertyChangedEventArgs e)
    {
        SetEnabledState();
    }

    private void SetErrorState()
    {
        VisualStateManager.GoToState(this, IsError ? "Error" : "Default", true);
    }

    private void SetEnabledState()
    {
        VisualStateManager.GoToState(this, IsEnabled ? "Normal" : "Disabled", true);
    }
}

public enum VisualType
{
    Small,
    SmallOutline,
    TextOnly,
    Large,
}
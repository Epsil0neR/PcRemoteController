using System.Diagnostics;
using System.Windows;
using Windows.System;
using Microsoft.UI.Xaml.Markup;
using DependencyObject = Microsoft.UI.Xaml.DependencyObject;
using DependencyProperty = Microsoft.UI.Xaml.DependencyProperty;
using DependencyPropertyChangedEventArgs = Microsoft.UI.Xaml.DependencyPropertyChangedEventArgs;
using Visibility = Microsoft.UI.Xaml.Visibility;

namespace RemoteController.WinUi.Controls;

[Microsoft.UI.Xaml.TemplatePart(Name = TemplatePartTextPresenter, Type = typeof(TextBlock))]
[Microsoft.UI.Xaml.TemplatePart(Name = TemplatePartSymbolPresenter, Type = typeof(TextBlock))]
[Microsoft.UI.Xaml.TemplatePart(Name = TemplatePartIconPresenter, Type = typeof(PathIcon))]
public sealed class VirtualKeyVisual : Control
{
    private const string TemplatePartTextPresenter = "PART_TextPresenter";
    private const string TemplatePartSymbolPresenter = "PART_SymbolPresenter";
    private const string TemplatePartIconPresenter = "PART_IconPresenter";

    public static readonly DependencyProperty KeyProperty = DependencyProperty.Register(nameof(Key), typeof(VirtualKey), typeof(VirtualKeyVisual), new(VirtualKey.None, PropertyChangedCallback));

    public static readonly Dictionary<VirtualKey, string> KeyToTextIconDictionary = new()
    {
        {VirtualKey.Up, "\uE0E4"},
        {VirtualKey.Down, "\uE0E5"},
        {VirtualKey.Left, "\uE0E2"},
        {VirtualKey.Right, "\uE0E3"},
        {VirtualKey.Shift, "\uE752"},
        {VirtualKey.LeftShift, "\uE752"},
        {VirtualKey.RightShift, "\uE752"},
        {VirtualKey.Back, "\uE750"},
        {VirtualKey.Enter, "\uE751"},
        {VirtualKey.Refresh, "\uE72C"},
        {VirtualKey.Search, "\uF78B"},
        {VirtualKey.Favorites, "\uE734"},
        {VirtualKey.GoHome, "\uE80F"}
    };

    public static readonly Dictionary<VirtualKey, string> KeyToPathIconDictionary = new()
    {
        {VirtualKey.LeftWindows, "M683 683H0V0h683v683zm819 0H819V0h683v683zm-819 819H0v-683h683v683zm819 0H819v-683h683v683z"},
        {VirtualKey.RightWindows, "M683 683H0V0h683v683zm819 0H819V0h683v683zm-819 819H0v-683h683v683zm819 0H819v-683h683v683z"},
    };

    private string KeyToText() => Key switch
    {
        VirtualKey.Escape => "Esc",
        VirtualKey.NumberKeyLock => "Num Lock",
        VirtualKey.CapitalLock => "Caps Lock",

        >= VirtualKey.Number0 and <= VirtualKey.Number9 => ((int)Key - (int)VirtualKey.Number0).ToString(),
        >= VirtualKey.NumberPad0 and <= VirtualKey.NumberPad9 => "NP-" + ((int)Key - (int)VirtualKey.NumberPad0).ToString(),

        VirtualKey.Multiply => "*",
        VirtualKey.Add => "+",
        VirtualKey.Separator => "|",
        VirtualKey.Subtract => "-",
        
        VirtualKey.Decimal => ".",
        VirtualKey.Divide => "/",

        VirtualKey.Control => "Ctrl",
        VirtualKey.LeftControl => "Ctrl",
        VirtualKey.RightControl => "Ctrl",

        VirtualKey.Menu => "Alt",
        VirtualKey.LeftMenu => "Alt",
        VirtualKey.RightMenu => "Alt",

        (VirtualKey)188 => ",",
        (VirtualKey)190 => ".",
        (VirtualKey)191 => "/",
        (VirtualKey)192 => "`",

        (VirtualKey)186 => ";",
        (VirtualKey)222 => "'",
        (VirtualKey)220 => "\\",

        (VirtualKey)219 => "[",
        (VirtualKey)221 => "]",

        (VirtualKey)189 => "-",
        (VirtualKey)187 => "=",

        _ => Key.ToString()
    };

    private TextBlock? _textPresenter;
    private TextBlock? _textIconPresenter;
    private PathIcon? _iconPresenter;

    public VirtualKeyVisual()
    {
        DefaultStyleKey = typeof(VirtualKeyVisual);
    }

    private static void PropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        ((VirtualKeyVisual)d).Update();
    }

    public VirtualKey Key
    {
        get => (VirtualKey)GetValue(KeyProperty);
        set => SetValue(KeyProperty, value);
    }

    protected override void OnApplyTemplate()
    {
        base.OnApplyTemplate();

        _textPresenter = (TextBlock)GetTemplateChild(TemplatePartTextPresenter);
        _textIconPresenter = (TextBlock)GetTemplateChild(TemplatePartSymbolPresenter);
        _iconPresenter = (PathIcon)GetTemplateChild(TemplatePartIconPresenter);

        Update();
    }

    private void Update()
    {
        if (_iconPresenter is null ||
            _textPresenter is null ||
            _textIconPresenter is null)
            return;

        _textPresenter.Visibility = Visibility.Collapsed;
        _textIconPresenter.Visibility = Visibility.Collapsed;
        _iconPresenter.Visibility = Visibility.Collapsed;

        if (KeyToPathIconDictionary.TryGetValue(Key, out var path))
        {
            _iconPresenter.Visibility = Visibility.Visible;

            try
            {
                var geometry = (Geometry)XamlBindingHelper.ConvertValue(typeof(Geometry), path);
                _iconPresenter.Data = geometry;
            }
            catch (Exception e)
            {
                Debugger.Break();//TODO: Check if this happens. Keys: Left/Right Windows
                Console.WriteLine(e);
                throw;
            }
        }
        else if (KeyToTextIconDictionary.TryGetValue(Key, out var icon))
        {
            _textIconPresenter.Visibility = Visibility.Visible;
            _textIconPresenter.Text = icon;
        }
        else
        {
            _textPresenter.Visibility = Visibility.Visible;
            _textPresenter.Text = KeyToText();
        }
    }
}
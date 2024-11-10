using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;

namespace RemoteController.WinUi.Controls.Controls;

public class PageWithHeaderContent : Page
{
    public PageWithHeaderContent()
    {
        DefaultStyleKey = typeof(PageWithHeaderContent);
    }

    public static readonly DependencyProperty HeaderContentProperty = DependencyProperty.Register(
        nameof(HeaderContent), typeof(object), typeof(PageWithHeaderContent), new(default));

    public object HeaderContent
    {
        get => GetValue(HeaderContentProperty);
        set => SetValue(HeaderContentProperty, value);
    }
}
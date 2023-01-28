using System.Windows;
using System.Windows.Controls;

namespace RemoteController.Views;

public class PageButton : Button
{
    static PageButton()
    {
        var t = typeof(PageButton);
        DefaultStyleKeyProperty.OverrideMetadata(t, new FrameworkPropertyMetadata
        {
            DefaultValue = t
        });
    }
}
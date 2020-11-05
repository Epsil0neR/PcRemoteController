using System.Windows;
using System.Windows.Controls;
using Epsiloner.Wpf.Attributes;
using RemoteController.ViewModels.Pages;

namespace RemoteController.Views
{
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

    [ViewFor(typeof(OverviewPageViewModel))]
    public class OverviewPageView : Control
    {
        static OverviewPageView()
        {
            var t = typeof(OverviewPageView);
            DefaultStyleKeyProperty.OverrideMetadata(t, new FrameworkPropertyMetadata
            {
                DefaultValue = t
            });
        }
    }
}

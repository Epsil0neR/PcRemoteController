﻿using System.Windows;
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

    [ViewFor(typeof(PathsManagerPageViewModel))]
    public class PathsManagerPageView : Control
    {
        static PathsManagerPageView()
        {
            var t = typeof(PathsManagerPageView);
            DefaultStyleKeyProperty.OverrideMetadata(t, new FrameworkPropertyMetadata
            {
                DefaultValue = t
            });
        }
    }

    [ViewFor(typeof(CommandsPageViewModel))]
    public class CommandsPageView : Control
    {
        static CommandsPageView()
        {
            var t = typeof(CommandsPageView);
            DefaultStyleKeyProperty.OverrideMetadata(t, new FrameworkPropertyMetadata
            {
                DefaultValue = t
            });
        }

    }
}
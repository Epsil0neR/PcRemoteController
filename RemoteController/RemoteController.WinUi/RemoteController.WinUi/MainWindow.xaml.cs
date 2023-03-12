using System;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Navigation;
using RemoteController.Attributes;
using RemoteController.ViewModels;
using RemoteController.ViewModels.Pages;

namespace RemoteController;

public sealed partial class MainWindow
{
    public WindowViewModel ViewModel { get; } = new();

    public MainWindow()
    {
        InitializeComponent();
    }

    private void NavigationView_OnItemInvoked(NavigationView sender, NavigationViewItemInvokedEventArgs args)
    {
        if (args.IsSettingsInvoked)
        {
            NavigateToSettings(args);
            return;
        }

        if (args.InvokedItemContainer.DataContext is not IPageViewModel vm)
            return;

        var type = GetPageTypeFor(vm);
        if (type is null || Frame.Content?.GetType() == type)
            return;

        var options = new FrameNavigationOptions()
        {
            TransitionInfoOverride = args.RecommendedNavigationTransitionInfo
        };
        Frame.NavigateToType(type, vm, options);
    }

    private void NavigateToSettings(NavigationViewItemInvokedEventArgs args)
    {
        var vm = new SettingsViewModel(); //TODO: IoC
        var type = GetPageTypeFor(vm);
        if (type is null || Frame.Content?.GetType() == type)
            return;

        var options = new FrameNavigationOptions()
        {
            TransitionInfoOverride = args.RecommendedNavigationTransitionInfo
        };

        Frame.NavigateToType(type, vm, options);
    }

    private Type? GetPageTypeFor(IPageViewModel viewModel)
    {
        var viewType = ViewForAttribute.GetBestMatchingViewType(viewModel);
        return viewType;
    }

    private void Frame_OnLoaded(object sender, RoutedEventArgs e)
    {
        var vm = ViewModel.FirstPage;
        var type = GetPageTypeFor(vm);
        if (type is null || Frame.Content?.GetType() == type)
            return;

        Frame.NavigateToType(type, vm, new());
    }
}
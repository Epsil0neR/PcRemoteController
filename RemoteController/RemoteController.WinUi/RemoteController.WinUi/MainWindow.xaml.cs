using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Navigation;
using RemoteController.ViewModels;

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

        if (args.InvokedItemContainer.DataContext is not NavigationItemViewModel vm)
            return;

        var type = vm.Type;
        if (Frame.CurrentSourcePageType == type)
            return;
        
        var options = new FrameNavigationOptions()
        {
            TransitionInfoOverride = args.RecommendedNavigationTransitionInfo
        };
        //this.contentFrame.NavigateToType()
    }

    private void NavigateToSettings(NavigationViewItemInvokedEventArgs args)
    {
        
    }
}
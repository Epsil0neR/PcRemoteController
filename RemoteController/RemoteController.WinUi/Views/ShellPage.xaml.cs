using Microsoft.UI.Windowing;
using RemoteController.WinUi.Contracts.Services;
using RemoteController.WinUi.Helpers;
using RemoteController.WinUi.ViewModels;
using Windows.System;
using WinRT.Interop;
using AppWindow = Microsoft.UI.Windowing.AppWindow;

namespace RemoteController.WinUi.Views;

// TODO: Update NavigationViewItem titles and icons in ShellPage.xaml.
public sealed partial class ShellPage : Page
{
    private readonly AppWindow _appWindow;

    public ShellViewModel ViewModel { get; }

    public ShellPage(ShellViewModel viewModel, INavigationViewService navigationViewService)
    {
        ViewModel = viewModel;
        InitializeComponent();

        NavigationViewControl.MenuItems.Clear();
        foreach (var item in navigationViewService.GetMenuItems())
        {
            NavigationViewControl.MenuItems.Add(item);
        }

        ViewModel.NavigationService.Frame = NavigationFrame;
        ViewModel.NavigationViewService.Initialize(NavigationViewControl);

        // TODO: Set the title bar icon by updating /Assets/WindowIcon.ico.
        // A custom title bar is required for full window theme and Mica support.
        // https://docs.microsoft.com/windows/apps/develop/title-bar?tabs=winui3#full-customization
        App.MainWindow.ExtendsContentIntoTitleBar = true;
        App.MainWindow.SetTitleBar(AppTitleBar);
        App.MainWindow.Activated += MainWindow_Activated;
        AppTitleBarText.Text = "AppDisplayName".GetLocalized();

        _appWindow = GetAppWindowForCurrentWindow();
    }

    private void OnLoaded(object sender, RoutedEventArgs e)
    {
        KeyboardAccelerators.Add(BuildKeyboardAcceleratorGoBack(VirtualKey.Left, VirtualKeyModifiers.Menu));
        KeyboardAccelerators.Add(BuildKeyboardAcceleratorGoBack(VirtualKey.GoBack));
        KeyboardAccelerators.Add(BuildKeyboardAcceleratorTest(VirtualKey.F, VirtualKeyModifiers.Menu));
    }
    private AppWindow GetAppWindowForCurrentWindow()
    {
        IntPtr hWnd = WindowNative.GetWindowHandle(App.MainWindow);
        WindowId myWndId = Win32Interop.GetWindowIdFromWindow(hWnd);
        return AppWindow.GetFromWindowId(myWndId);
    }

    private void MainWindow_Activated(object sender, WindowActivatedEventArgs args)
    {
        var resource = args.WindowActivationState == WindowActivationState.Deactivated ? "WindowCaptionForegroundDisabled" : "WindowCaptionForeground";

        AppTitleBarText.Foreground = (SolidColorBrush)Application.Current.Resources[resource];
    }

    private void NavigationViewControl_DisplayModeChanged(NavigationView sender, NavigationViewDisplayModeChangedEventArgs args)
    {
        AppTitleBar.Margin = new Thickness()
        {
            Left = sender.CompactPaneLength * (sender.DisplayMode == NavigationViewDisplayMode.Minimal ? 2 : 1),
            Top = AppTitleBar.Margin.Top,
            Right = AppTitleBar.Margin.Right,
            Bottom = AppTitleBar.Margin.Bottom
        };
    }

    private static KeyboardAccelerator BuildKeyboardAcceleratorGoBack(VirtualKey key, VirtualKeyModifiers? modifiers = null)
    {
        var keyboardAccelerator = new KeyboardAccelerator() { Key = key };

        if (modifiers.HasValue)
        {
            keyboardAccelerator.Modifiers = modifiers.Value;
        }

        keyboardAccelerator.Invoked += KeyboardGoBack;

        return keyboardAccelerator;
    }

    private static void KeyboardGoBack(KeyboardAccelerator sender, KeyboardAcceleratorInvokedEventArgs args)
    {
        var navigationService = App.GetService<INavigationService>();

        var result = navigationService.GoBack();

        args.Handled = result;
    }

    private KeyboardAccelerator BuildKeyboardAcceleratorTest(VirtualKey key, VirtualKeyModifiers? modifiers = null)
    {
        var keyboardAccelerator = new KeyboardAccelerator() { Key = key };

        if (modifiers.HasValue)
        {
            keyboardAccelerator.Modifiers = modifiers.Value;
        }

        keyboardAccelerator.Invoked += KeyboardTest;

        return keyboardAccelerator;
    }


    private void KeyboardTest(KeyboardAccelerator sender, KeyboardAcceleratorInvokedEventArgs args)
    {
        if (_appWindow.Presenter.Kind == AppWindowPresenterKind.FullScreen)
        {
            _appWindow.SetPresenter(AppWindowPresenterKind.Default);
        }
        else
        {
            _appWindow.SetPresenter(AppWindowPresenterKind.FullScreen);
        }

        args.Handled = true;
    }
}

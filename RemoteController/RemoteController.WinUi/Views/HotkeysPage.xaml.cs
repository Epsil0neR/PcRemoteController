using Microsoft.UI.Xaml.Controls;
using RemoteController.WinUi.Services;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

[ViewFor<HotkeysViewModel>]
public sealed partial class HotkeysPage : Page
{
    public HotkeysViewModel ViewModel
    {
        get;
    }

    public HotkeysPage()
    {
        ViewModel = App.GetService<HotkeysViewModel>();
        InitializeComponent();
    }
}

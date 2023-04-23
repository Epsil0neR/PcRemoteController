using Microsoft.UI.Xaml.Controls;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

[ViewFor<GenericViewModel>]
public sealed partial class GenericPage : Page
{
    public GenericViewModel ViewModel
    {
        get;
    }

    public GenericPage()
    {
        ViewModel = App.GetService<GenericViewModel>();
        InitializeComponent();
    }
}

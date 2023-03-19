using Microsoft.UI.Xaml.Controls;

using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

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

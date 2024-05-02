using System.ComponentModel;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels.Pages;

namespace RemoteController.WinUi.Views;

[ViewFor<GenericViewModel>(0)]
[PageSymbol(Symbol.Home)]
[Description("Generic")]
public sealed partial class GenericPage : Page
{
    public GenericViewModel ViewModel { get; } = App.GetService<GenericViewModel>();

    public GenericPage()
    {
        InitializeComponent();
    }
}

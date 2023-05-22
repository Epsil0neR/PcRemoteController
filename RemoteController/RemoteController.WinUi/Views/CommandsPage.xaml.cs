using System.ComponentModel;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

[ViewFor<CommandsViewModel>(2)]
[PageSymbol(Symbol.Remote)]
[Description("Commands")]
public sealed partial class CommandsPage : Page
{
    public CommandsViewModel ViewModel
    {
        get;
    }

    public CommandsPage()
    {
        ViewModel = App.GetService<CommandsViewModel>();
        InitializeComponent();
    }
}

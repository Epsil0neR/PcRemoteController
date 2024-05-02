using System.ComponentModel;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels.Pages;

namespace RemoteController.WinUi.Views;

[ViewFor<CommandsViewModel>(2)]
[PageSymbol(Symbol.Remote)]
[Description("Commands")]
public sealed partial class CommandsPage : Page
{
    public CommandsViewModel ViewModel { get; } = App.GetService<CommandsViewModel>();

    public CommandsPage()
    {
        InitializeComponent();
    }
}

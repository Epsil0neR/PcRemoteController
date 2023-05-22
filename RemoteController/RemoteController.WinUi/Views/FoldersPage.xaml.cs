using System.ComponentModel;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

[ViewFor<FoldersViewModel>(1)]
[PageSymbol(Symbol.Folder)]
[Description("Folders")]
public sealed partial class FoldersPage : Page
{
    public FoldersViewModel ViewModel
    {
        get;
    }

    public FoldersPage()
    {
        ViewModel = App.GetService<FoldersViewModel>();
        InitializeComponent();
    }
}

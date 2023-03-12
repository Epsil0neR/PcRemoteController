using RemoteController.Attributes;
using RemoteController.ViewModels.Pages;

namespace RemoteController.Pages;

public class GeneralBasePage: BasePage<GeneralViewModel> {}

[ViewFor<GeneralViewModel>]
public sealed partial class GeneralPage
{
    public GeneralPage()
    {
        InitializeComponent();
    }
}
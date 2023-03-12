using RemoteController.Attributes;
using RemoteController.ViewModels.Pages;

namespace RemoteController.Pages;

public class SettingsBasePage : BasePage<SettingsViewModel> { }

[ViewFor<SettingsViewModel>]
public sealed partial class SettingsPage
{
    public SettingsPage()
    {
        InitializeComponent();
    }
}
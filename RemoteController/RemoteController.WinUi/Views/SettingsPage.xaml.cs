using System.ComponentModel;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels.Pages;

namespace RemoteController.WinUi.Views;

// TODO: Set the URL for your privacy policy by updating SettingsPage_PrivacyTermsLink.NavigateUri in Resources.resw.
[ViewFor<SettingsViewModel>]
[PageSymbol(Symbol.Setting)]
[Description("Settings")]
public sealed partial class SettingsPage : Page
{
    public SettingsViewModel ViewModel { get; } = App.GetService<SettingsViewModel>();

    public SettingsPage()
    {
        InitializeComponent();
    }
}

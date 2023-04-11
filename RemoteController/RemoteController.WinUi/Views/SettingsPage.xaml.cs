using Microsoft.UI.Xaml.Controls;
using RemoteController.WinUi.Services;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

// TODO: Set the URL for your privacy policy by updating SettingsPage_PrivacyTermsLink.NavigateUri in Resources.resw.
[ViewFor<SettingsViewModel>]
public sealed partial class SettingsPage : Page
{
    public SettingsViewModel ViewModel
    {
        get;
    }

    public SettingsPage()
    {
        ViewModel = App.GetService<SettingsViewModel>();
        InitializeComponent();
    }
}

using Microsoft.UI.Xaml.Navigation;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels.Pages.SoundDevices;
using System.ComponentModel;

namespace RemoteController.WinUi.Views.Pages;

[ViewFor<SoundDevicesViewModel>(3)]
[PageSymbol(Symbol.Volume)]
[Description("Sound devices")]
public sealed partial class SoundDevicesPage : Page
{
    public SoundDevicesViewModel ViewModel { get; } = App.GetService<SoundDevicesViewModel>();

    public SoundDevicesPage()
    {
        InitializeComponent();
    }

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
        ViewModel.Activate();
        base.OnNavigatedTo(e);
    }

    protected override void OnNavigatedFrom(NavigationEventArgs e)
    {
        ViewModel.Deactivate();
        base.OnNavigatedFrom(e);
    }
}

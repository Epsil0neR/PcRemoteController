using Microsoft.UI.Xaml.Controls;
using RemoteController.WinUi.Services;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

[ViewFor<SoundDevicesViewModel>]
public sealed partial class SoundDevicesPage : Page
{
    public SoundDevicesViewModel ViewModel
    {
        get;
    }

    public SoundDevicesPage()
    {
        ViewModel = App.GetService<SoundDevicesViewModel>();
        InitializeComponent();
    }
}

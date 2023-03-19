using Microsoft.UI.Xaml.Controls;

using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

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

using System.ComponentModel;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

[ViewFor<SoundDevicesViewModel>(3)]
[PageSymbol(Symbol.Volume)]
[Description("Sound devices")]
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

using RemoteController.WinUi.ViewModels.Pages.SoundDevices;

namespace RemoteController.WinUi.Views.Items
{
    public sealed partial class SoundDevice
    {
        public SoundDevice()
        {
            InitializeComponent();
        }

        public static readonly DependencyProperty ViewModelProperty = DependencyProperty.Register(
            nameof(ViewModel), typeof(DeviceViewModel), typeof(SoundDevice), new(default(DeviceViewModel)));

        public DeviceViewModel ViewModel
        {
            get => (DeviceViewModel)GetValue(ViewModelProperty);
            set => SetValue(ViewModelProperty, value);
        }
    }
}

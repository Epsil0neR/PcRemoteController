using RemoteController.Informer;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.ViewModels;

public class SoundDevicesViewModel : ObservableObject, IDisposable
{
    private IReadOnlyList<DeviceViewModel> _outputDevices = Array.Empty<DeviceViewModel>();
    private IReadOnlyList<DeviceViewModel> _inputDevices = Array.Empty<DeviceViewModel>();

    public InformersManager InformersManager { get; }

    public IWritableOptions<SoundDevicesOptions> SoundDevicesOptions { get; }

    public SoundInformer SoundInformer { get; }

    /// <summary>
    /// Sound output devices like phones, headset, speakers, etc.
    /// </summary>
    public IReadOnlyList<DeviceViewModel> OutputDevices
    {
        get => _outputDevices;
        private set => SetProperty(ref _outputDevices, value);
    }
    /// <summary>
    /// Sound input devices like microphone, etc.
    /// </summary>
    public IReadOnlyList<DeviceViewModel> InputDevices
    {
        get => _inputDevices;
        private set => SetProperty(ref _inputDevices, value);
    }

    public SoundDevicesViewModel(
        InformersManager informersManager,
        IWritableOptions<SoundDevicesOptions> soundDevicesOptions)
    {
        InformersManager = informersManager ?? throw new ArgumentNullException(nameof(informersManager));
        SoundDevicesOptions = soundDevicesOptions ?? throw new ArgumentNullException(nameof(soundDevicesOptions));
        SoundInformer = InformersManager.Informer<SoundInformer>() ?? throw new ArgumentException(@"Sound informer is not available in manager.", nameof(informersManager));
        SoundInformer.Changed += SoundInformerOnChanged;
        UpdateDevices();
    }

    public void Dispose()
    {
        SoundInformer.Changed -= SoundInformerOnChanged;
    }

    private void SoundInformerOnChanged(object? sender, EventArgs e)
    {
        UpdateDevices();
    }

    private void UpdateDevices()
    {
        OutputDevices = SoundInformer.OutputDeviceList
            .Select(x => new DeviceViewModel() { Name = x })
            .ToList();
        InputDevices = SoundInformer.InputDeviceList
            .Select(x => new DeviceViewModel() {Name = x})
            .ToList();
    }
}

public partial class DeviceViewModel : ObservableObject
{
    public required string Name { get; init; }

    [ObservableProperty]
    private bool _isSelected;

    //TODO: sound device IsSelected should be stored in some config/file/storage.
}
using System.Collections.ObjectModel;
using CommunityToolkit.Mvvm.Messaging;
using RemoteController.Informer;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Messages;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Services;

namespace RemoteController.WinUi.ViewModels.Pages;

public class SoundDevicesViewModel :
    ActivatableViewModel,
    IDisposable,
    IRecipient<DeviceIsSelectedChanged>,
    IRecipient<SystemDefaultSoundDeviceRequest>
{
    private readonly ILogger<SoundDevicesViewModel> _logger;
    private bool _updatingDevices;
    private IReadOnlyList<DeviceViewModel> _outputDevices = Array.Empty<DeviceViewModel>();
    private IReadOnlyList<DeviceViewModel> _inputDevices = Array.Empty<DeviceViewModel>();

    public InformersManager InformersManager { get; }
    public IMessenger Messenger { get; }

    public IWritableOptions<SoundDevicesOptions> SoundDevicesOptions { get; }
    public ISoundDevicesService Service { get; }

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
        ILogger<SoundDevicesViewModel> logger,
        InformersManager informersManager,
        IMessenger messenger,
        IWritableOptions<SoundDevicesOptions> soundDevicesOptions,
        ISoundDevicesService service)
    {
        _logger = logger;
        InformersManager = informersManager ?? throw new ArgumentNullException(nameof(informersManager));
        Messenger = messenger ?? throw new ArgumentNullException(nameof(messenger));
        SoundDevicesOptions = soundDevicesOptions ?? throw new ArgumentNullException(nameof(soundDevicesOptions));
        Service = service ?? throw new ArgumentNullException(nameof(service));
        SoundInformer = InformersManager.Informer<SoundInformer>() ?? throw new ArgumentException(@"Sound informer is not available in manager.", nameof(informersManager));

        UpdateDevices();
    }

    public void Dispose()
    {
        Deactivate();
    }

    private void SoundInformerOnChanged(object? sender, EventArgs e)
    {
        UpdateDevices();
    }

    private void UpdateDevices()
    {
        _updatingDevices = true;
        try
        {
            OutputDevices = SoundInformer.OutputDeviceList
                .Select(x => ToViewModel(x, false))
                .ToList();
            InputDevices = SoundInformer.InputDeviceList
                .Select(x => ToViewModel(x, true))
                .ToList();
        }
        finally
        {
            _updatingDevices = false;
        }
    }

    private DeviceViewModel ToViewModel(SoundDeviceInfo deviceInfo, bool isInputs)
    {
        var options = isInputs
            ? SoundDevicesOptions.Value.Inputs
            : SoundDevicesOptions.Value.Outputs;
        var defaultDevice = isInputs
            ? SoundInformer.InputDevice
            : SoundInformer.OutputDevice;

        var rv = new DeviceViewModel(Messenger)
        {
            Name = deviceInfo.Name,
            IsSelected = options.Any(x => x.DeviceName == deviceInfo.Name && x.SwitchCommand),
            IsInput = isInputs,
            IsSystemDefault = string.Equals(defaultDevice, deviceInfo.Name),
            Volume = deviceInfo.Volume
        };

        _logger.LogInformation($"DeviceViewModel created. Name:{rv.Name}, IsInput:{rv.IsInput}, Volume: {rv.Volume} Thread ID:{Thread.CurrentThread.ManagedThreadId}");

        return rv;
    }

    public void Receive(DeviceIsSelectedChanged message)
    {
        if (_updatingDevices)
            return;

        SoundDevicesOptions.Update(x =>
        {
            UpdateOptions(x.Inputs, InputDevices);
            UpdateOptions(x.Outputs, OutputDevices);
        });
    }

    public void Receive(SystemDefaultSoundDeviceRequest message)
    {
        if (!message.Value.IsInput)
            Service.SetOutputDevice(message.Value.Name);
        else
            Service.SetInputDevice(message.Value.Name);
    }

    private void UpdateOptions(List<SoundDeviceData> options, IReadOnlyList<DeviceViewModel> items)
    {
        foreach (var item in items)
        {
            var option = options.Find(x => x.DeviceName == item.Name);
            if (option is null && item.IsSelected)
            {
                option = new SoundDeviceData()
                {
                    DeviceName = item.Name,
                    SwitchCommand = item.IsSelected
                };
                options.Add(option);
            }
            else if (option is not null)
            {
                option.SwitchCommand = item.IsSelected;
            }
        }
    }

    protected override void OnActivated()
    {
        SoundInformer.Changed += SoundInformerOnChanged;
        Messenger.RegisterAll(this);
    }

    protected override void OnDeactivated()
    {
        Messenger.UnregisterAll(this);
        SoundInformer.Changed -= SoundInformerOnChanged;
    }
}

public partial class DeviceViewModel : ObservableObject
{
    public IMessenger Messenger { get; set; }

    public required string Name { get; init; }

    public bool IsInput { get; init; }

    /// <summary>
    /// Indicates if enabled for switch command.
    /// </summary>
    [ObservableProperty]
    private bool _isSelected;

    /// <summary>
    /// Indicates if this device is used as default system sound device.
    /// </summary>
    [ObservableProperty]
    private bool _isSystemDefault;

    /// <summary>
    /// Device volume in 0..100 range.
    /// </summary>
    [ObservableProperty]
    public byte _volume;

    public DeviceViewModel(IMessenger messenger)
    {
        Messenger = messenger;
    }

    partial void OnIsSelectedChanged(bool isSelected)
    {
        Messenger.Send(new DeviceIsSelectedChanged(this));
    }

    protected bool CanMakeSystemDefault() => !IsSystemDefault;

    [RelayCommand(CanExecute = nameof(CanMakeSystemDefault))]
    private void MakeSystemDefault()
    {
        Messenger.Send(new SystemDefaultSoundDeviceRequest(this));
    }
}

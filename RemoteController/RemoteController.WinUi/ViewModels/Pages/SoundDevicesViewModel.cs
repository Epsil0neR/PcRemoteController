using CommunityToolkit.Mvvm.Messaging;
using RemoteController.Informer;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Messages;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.ViewModels.Pages;

public class SoundDevicesViewModel :
    ActivatableVieModel,
    IDisposable,
    IRecipient<DeviceIsSelectedChanged>
{
    private bool _updatingDevices;
    private IReadOnlyList<DeviceViewModel> _outputDevices = Array.Empty<DeviceViewModel>();
    private IReadOnlyList<DeviceViewModel> _inputDevices = Array.Empty<DeviceViewModel>();

    public InformersManager InformersManager { get; }
    public IMessenger Messenger { get; }

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
        IMessenger messenger,
        IWritableOptions<SoundDevicesOptions> soundDevicesOptions)
    {
        InformersManager = informersManager ?? throw new ArgumentNullException(nameof(informersManager));
        Messenger = messenger;
        SoundDevicesOptions = soundDevicesOptions ?? throw new ArgumentNullException(nameof(soundDevicesOptions));
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

    private DeviceViewModel ToViewModel(string name, bool isInputs)
    {
        var source = isInputs
            ? SoundDevicesOptions.Value.Inputs
            : SoundDevicesOptions.Value.Outputs;
        var rv = new DeviceViewModel(Messenger)
        {
            Name = name,
            IsSelected = source.Any(x => x.DeviceName == name && x.SwitchCommand),
            IsInput = isInputs
        };

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

    [ObservableProperty]
    private bool _isSelected;

    public DeviceViewModel(IMessenger messenger)
    {
        Messenger = messenger;
    }

    partial void OnIsSelectedChanged(bool isSelected)
    {
        Messenger.Send(new DeviceIsSelectedChanged(this));
    }
}

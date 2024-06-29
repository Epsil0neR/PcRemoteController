using CommunityToolkit.Mvvm.Messaging;
using CommunityToolkit.WinUI;
using Epsiloner.WinUi.Services;
using RemoteController.Informer;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.HotKeys.Items;
using RemoteController.WinUi.Messages;
using RemoteController.WinUi.Models;
using RemoteController.WinUi.Services;
using DispatcherQueue = Microsoft.UI.Dispatching.DispatcherQueue;
using DispatcherQueuePriority = Microsoft.UI.Dispatching.DispatcherQueuePriority;

namespace RemoteController.WinUi.ViewModels.Pages.SoundDevices;

public partial class SoundDevicesViewModel :
    ActivatableViewModel,
    IDisposable,
    IRecipient<DeviceIsSelectedChanged>,
    IRecipient<SystemDefaultSoundDeviceRequest>,
    IRecipient<ChangeVolumeForDeviceRequest>
{
    private readonly DispatcherQueue _dispatcher;
    private readonly ILogger<SoundDevicesViewModel> _logger;
    private bool _updatingDevices;

    /// <summary>
    /// Sound output devices like phones, headset, speakers, etc.
    /// </summary>
    [ObservableProperty]
    private IReadOnlyList<DeviceViewModel> _outputDevices = Array.Empty<DeviceViewModel>();

    /// <summary>
    /// Sound input devices like microphone, etc.
    /// </summary>
    [ObservableProperty]
    private IReadOnlyList<DeviceViewModel> _inputDevices = Array.Empty<DeviceViewModel>();

    public InformersManager InformersManager { get; }

    public IMessenger Messenger { get; }

    public IWritableOptions<SoundDevicesOptions> SoundDevicesOptions { get; }

    public ISoundDevicesService Service { get; }

    public IHotkeysService HotkeysService { get; }

    public SwitchSoundOutputHotkey SwitchSoundOutputHotkey { get; }

    public SwitchSoundInputHotkey SwitchSoundInputHotkey { get; }

    public SoundInformer SoundInformer { get; }

    public SoundDevicesViewModel(
        ILogger<SoundDevicesViewModel> logger,
        InformersManager informersManager,
        IMessenger messenger,
        IWritableOptions<SoundDevicesOptions> soundDevicesOptions,
        ISoundDevicesService service,
        IHotkeysService hotkeysService,
        SwitchSoundOutputHotkey switchSoundOutputHotkey,
        SwitchSoundInputHotkey switchSoundInputHotkey)
    {
        _dispatcher = DispatcherQueue.GetForCurrentThread();
        _logger = logger;
        InformersManager = informersManager ?? throw new ArgumentNullException(nameof(informersManager));
        Messenger = messenger ?? throw new ArgumentNullException(nameof(messenger));
        SoundDevicesOptions = soundDevicesOptions ?? throw new ArgumentNullException(nameof(soundDevicesOptions));
        Service = service ?? throw new ArgumentNullException(nameof(service));
        HotkeysService = hotkeysService ?? throw new ArgumentNullException(nameof(hotkeysService));
        SwitchSoundOutputHotkey = switchSoundOutputHotkey ?? throw new ArgumentNullException(nameof(switchSoundOutputHotkey));
        SwitchSoundInputHotkey = switchSoundInputHotkey ?? throw new ArgumentNullException(nameof(switchSoundInputHotkey));
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
        _dispatcher.EnqueueAsync(() =>
        {
            _updatingDevices = true;
            try
            {
                foreach (var info in SoundInformer.InputDeviceList)
                    AddOrUpdate(info, true);
                foreach (var info in SoundInformer.OutputDeviceList)
                    AddOrUpdate(info, false);
            }
            finally
            {
                _updatingDevices = false;
            }
        }, DispatcherQueuePriority.High);
    }

    private void AddOrUpdate(SoundDeviceInfo info, bool isInput)
    {
        var options = isInput
            ? SoundDevicesOptions.Value.Inputs
            : SoundDevicesOptions.Value.Outputs;
        var defaultDevice = isInput
            ? SoundInformer.InputDevice
            : SoundInformer.OutputDevice;
        var devices = isInput
            ? InputDevices
            : OutputDevices;
        var device = devices.FirstOrDefault(x => x.Name == info.Name);
        var add = device is null;

        device ??= new(Messenger)
        {
            Name = info.Name,
            IsInput = isInput,
        };

        device.IsSelected = options.Any(x => x.DeviceName == info.Name && x.SwitchCommand);
        device.IsSystemDefault = string.Equals(defaultDevice, info.Name);
        device.Volume = (int)info.Volume;

        if (add)
        {
            var newList = devices.ToList();
            newList.Add(device);
            if (isInput)
                InputDevices = newList;
            else
                OutputDevices = newList;
        }
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
        if (!message.Device.IsInput)
            Service.OutputDevice = message.Device.Name;
        else
            Service.InputDevice = message.Device.Name;
    }

    public void Receive(ChangeVolumeForDeviceRequest message)
    {
        if (_updatingDevices)
            return;

        if (message.Device.IsInput)
            SoundInformer.ChangeInputVolume(message.Device.Name, message.Volume);
        else
            SoundInformer.ChangeOutputVolume(message.Device.Name, message.Volume);
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
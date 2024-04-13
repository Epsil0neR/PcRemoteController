using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Input;
using System.Windows.Threading;
using CommunityToolkit.Mvvm.Input;
using Epsiloner.Wpf.Gestures;
using Epsiloner.Wpf.Glyphs;
using Epsiloner.Wpf.ViewModels;
using NAudio.CoreAudioApi;
using RemoteController.Configs;
using RemoteController.Informer;
using RemoteController.Services;
using RemoteController.Sound;

namespace RemoteController.ViewModels.Pages;

public class SoundDeviceItem : ViewModel
{
    public SoundDevicesConfig Config { get; }
    private bool _isSelected;
    private string _name;

    public SoundDeviceItem(SoundDevicesConfig config, string name)
    {
        Config = config;
        Name = name;

        var item = Config.Find(name);
        if (item is null)
        {
            IsSelected = true;
        }
        else
        {
            _isSelected = item.IsSelected;
        }
    }

    public bool IsSelected
    {
        get => _isSelected;
        set
        {
            if (!Set(ref _isSelected, value))
                return;

            Config.SetIsSelected(Name, value);
        }
    }

    public string Name
    {
        get => _name;
        set => Set(ref _name, value);
    }
}

public class SoundDevicesPageViewModel : BasePageViewModel
{
    private readonly PolicyConfigClient _policyConfigClient;
    private List<SoundDeviceItem> _outputDevices;

    public Dispatcher Dispatcher { get; }

    public InformersManager InformersManager { get; }

    public SoundDevicesConfig Config { get; }

    public ShortcutsService ShortcutsService { get; }

    public SoundInformer? SoundInformer { get; }

    public ICommand SetOutputDeviceCommand { get; }

    public List<SoundDeviceItem> OutputDevices
    {
        get => _outputDevices;
        private set => Set(ref _outputDevices, value);
    }

    public string CircleSelectedShortcutName { get; } = "Sound.Output.CircleSelected";

    public SoundDevicesPageViewModel(
        Dispatcher dispatcher,
        InformersManager informersManager,
        PolicyConfigClient policyConfigClient,
        SoundDevicesConfig config,
        ShortcutsService shortcutsService)
        : base(PageName.SoundDevices, MaterialDesignIcon.VolumeUp)
    {
        _policyConfigClient = policyConfigClient;
        //TODO: Load settings of previously selected items by user (even items that are not available now)

        Dispatcher = dispatcher;
        InformersManager = informersManager;
        Config = config;
        ShortcutsService = shortcutsService;
        SoundInformer = informersManager.Informer<SoundInformer>();

        SoundInformer.Changed += SoundInformerOnChanged;
        UpdateDevices();

        SetOutputDeviceCommand = new RelayCommand<string>(SetOutputDevice);

        ShortcutsService.Change(CircleSelectedShortcutName, CircleSelected);
        if (ShortcutsService.GetGesture(CircleSelectedShortcutName) is null)
            ShortcutsService.Change(CircleSelectedShortcutName, new Gesture(Key.F24));
    }

    private void CircleSelected()
    {
        var currentDeviceName = SoundInformer.OutputDevice;
        var item = OutputDevices.FirstOrDefault(x => x.Name == currentDeviceName);
        if (item is null)
            return;
        
        var ind = OutputDevices.IndexOf(item);
        var list = OutputDevices.Skip(ind).ToList();
        list.AddRange(OutputDevices.Take(ind).ToList());
        list.Remove(item);
        list = list.Where(x => x.IsSelected).ToList();

        
        var next = list.FirstOrDefault();
        if (next is null)
            return;
        
        SetOutputDevice(next.Name);
    }

    private void SetOutputDevice(string outputDeviceName)
    {
        using var enumerator = new MMDeviceEnumerator();
        var outputList = enumerator.EnumerateAudioEndPoints(DataFlow.Render, DeviceState.Active).ToList();
        var device = outputList.FirstOrDefault(x => x.FriendlyName == outputDeviceName);
        if (device is null)
            return;

        var id = device.ID;

        Dispatcher.Invoke(() =>
        {
            _policyConfigClient.SetDefaultEndpoint(id, ERole.eMultimedia);
            SoundInformer.CheckForChanges();
        });
    }

    private void SoundInformerOnChanged(object? sender, EventArgs e)
    {
        UpdateDevices();
    }

    private void UpdateDevices()
    {
        OutputDevices = SoundInformer
            .OutputDeviceList
            .Select(x => new SoundDeviceItem(Config, x))
            .ToList();
    }
}
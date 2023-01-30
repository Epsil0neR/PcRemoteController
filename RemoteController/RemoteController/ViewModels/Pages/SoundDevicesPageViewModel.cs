using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Input;
using Epsiloner.Wpf.Glyphs;
using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.Command;
using NAudio.CoreAudioApi;
using RemoteController.Configs;
using RemoteController.Informer;
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

    public InformersManager InformersManager { get; }

    public SoundDevicesConfig Config { get; }

    public SoundInformer SoundInformer { get; }

    public ICommand SetOutputDeviceCommand { get; }

    public List<SoundDeviceItem> OutputDevices
    {
        get => _outputDevices;
        private set => Set(ref _outputDevices, value);
    }

    public SoundDevicesPageViewModel(
        InformersManager informersManager,
        PolicyConfigClient policyConfigClient,
        SoundDevicesConfig config)
        : base(PageName.SoundDevices, MaterialDesignIcon.VolumeUp)
    {
        _policyConfigClient = policyConfigClient;
        //TODO: Load settings of previously selected items by user (even items that are not available now)

        InformersManager = informersManager;
        Config = config;
        SoundInformer = informersManager.Informer<SoundInformer>();

        SoundInformer.Changed += SoundInformerOnChanged;
        UpdateDevices();

        SetOutputDeviceCommand = new RelayCommand<string>(SetOutputDevice);
    }

    private void SetOutputDevice(string outputDeviceName = "Speakers (High Definition Audio Device)")
    {
        using var enumerator = new MMDeviceEnumerator();
        var outputList = enumerator.EnumerateAudioEndPoints(DataFlow.Render, DeviceState.Active).ToList();
        var device = outputList.FirstOrDefault(x => x.FriendlyName == outputDeviceName);
        if (device is null)
            return;

        _policyConfigClient.SetDefaultEndpoint(device.ID, ERole.eMultimedia);
    }

    private void SoundInformerOnChanged(object sender, EventArgs e)
    {
        UpdateDevices();
    }

    private void UpdateDevices()
    {
        OutputDevices = SoundInformer
            .OutputDeviceList
            //TODO: When creating new items - set state from previous list + settings.
            .Select(x => new SoundDeviceItem(Config,x))
            .ToList();
    }
}
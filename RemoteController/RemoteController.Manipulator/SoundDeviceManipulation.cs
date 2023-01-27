using System;
using System.Collections.Generic;
using System.Linq;
using AudioSwitcher.AudioApi;
using AudioSwitcher.AudioApi.CoreAudio;

namespace RemoteController.Manipulator;

public enum SoundDeviceManipulationMode
{
    ListOutput,
    ChangeOutput,
}

public class SoundDeviceManipulation : IManipulation
{
    public static IManipulation[] GetManipulations()
    {
        return new IManipulation[]
        {
            new SoundDeviceManipulation("SoundDevice.Output.List", SoundDeviceManipulationMode.ListOutput),
            new SoundDeviceManipulation("SoundDevice.Output.Change", SoundDeviceManipulationMode.ChangeOutput),
        };
    }

    public SoundDeviceManipulation(string name, SoundDeviceManipulationMode mode)
    {
        Name = name;
        Mode = mode;
    }

    public string Name { get; init; }
    public SoundDeviceManipulationMode Mode { get; }

    public object Execute(IManipulatorsManager manager, string param)
    {
        return Mode switch
        {
            SoundDeviceManipulationMode.ListOutput => List(manager, param),
            SoundDeviceManipulationMode.ChangeOutput => Change(manager, param),
            _ => null
        };
    }

    private IReadOnlyList<string> List(IManipulatorsManager manager, string param)
    {
        using var controller = new CoreAudioController();
        return controller
            .GetPlaybackDevices(DeviceState.Active)
            .Select(x => x.FullName)
            .ToList();
    }

    private bool Change(IManipulatorsManager manager, string param)
    {
        using var controller = new CoreAudioController();
        var devices = controller.GetPlaybackDevices(DeviceState.Active);
        var device = devices.FirstOrDefault(x => x.FullName == param);
        device?.SetAsDefault();
        return device is not null;
    }
}
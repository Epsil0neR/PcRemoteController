using System.Windows;
using Windows.System;
using Epsiloner.WinUi.Configurations;
using Epsiloner.WinUi.Gestures;
using Epsiloner.WinUi.Services;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.Configuration;

internal class HotkeyServiceConfiguration : IHotkeyServiceConfiguration
{
    private readonly IWritableOptions<HotkeyGesturesOptions> _hotkeyGesturesOptions;
    private readonly ILogger<HotkeyServiceConfiguration> _logger;

    public HotkeyServiceConfiguration(
        IWritableOptions<HotkeyGesturesOptions> hotkeyGesturesOptions, 
        ILogger<HotkeyServiceConfiguration> logger)
    {
        _hotkeyGesturesOptions = hotkeyGesturesOptions;
        _logger = logger;
    }

    public void Configure(IHotkeysService services)
    {
        services.Change("Test-1", () =>
        {
            MessageBox.Show("Hello world!", "Test-1");
        });

        foreach (var (name, gesture) in _hotkeyGesturesOptions.Value.Data)
        {
            services.Change(name, gesture);
            _logger.LogDebug("Hotkey from options: {name} --- {gesture}", name, gesture);
        }

        //_hotkeyGesturesOptions.Update(data =>
        //{
        //    var d = data.Data.ToDictionary(x => x.Key, x => x.Value);
        //    d["Test-1"] = new(new []
        //    {
        //        new Gesture(VirtualKey.B),
        //        new Gesture(VirtualKey.B),
        //        new Gesture(VirtualKey.D),
        //    });
        //    data.Update(d);
        //});
    }
}
using System.ComponentModel;
using Epsiloner.WinUi.Gestures;
using Epsiloner.WinUi.Services;
using Windows.System;

namespace RemoteController.WinUi.ViewModels;

public partial class HotkeysViewModel : ObservableRecipient
{
    private readonly int _pageSize = 10;
    private VirtualKey[] _allKeys;

    public IHotkeysService Service { get; }

    [ObservableProperty]
    private VirtualKey[] _virtualKeys;

    [ObservableProperty]
    private int _startIndex = 0;

    public int KeysCount => _allKeys.Length;

    public HotkeysViewModel(IHotkeysService service)
    {
        Service = service;
        Service.IsPaused = true;

        _allKeys = Enum.GetValues<VirtualKey>();
        UpdateVirtualKeys();

        PropertyChanged += OnPropertyChanged;
        OnPropertyChanged(nameof(StartIndex));
    }

    private void OnPropertyChanged(object? sender, PropertyChangedEventArgs e)
    {
        if (e.PropertyName != nameof(StartIndex))
            return;

        UpdateVirtualKeys();
    }

    private void UpdateVirtualKeys()
    {
        VirtualKeys = _allKeys
            .Skip(StartIndex)
            .Take(_pageSize)
            .ToArray();
    }

    [RelayCommand]
    void RestartHook()
    {
        Service.ReattachHooks();
    }

    [RelayCommand]
    void PrevPage()
    {
        StartIndex = Math.Max(0, StartIndex - _pageSize);
        UpdateVirtualKeys();
    }

    [RelayCommand]
    void NextPage()
    {
        StartIndex += _pageSize;
        UpdateVirtualKeys();
    }

    public MultiKeyGesture TestGestures { get; } = new(new Gesture[]
    {
        new(VirtualKey.A, VirtualKeyModifiers.Control | VirtualKeyModifiers.Menu | VirtualKeyModifiers.Shift | VirtualKeyModifiers.Windows),
        new(VirtualKey.B),
        new(VirtualKey.Left),
        new(VirtualKey.Up),
        new(VirtualKey.Right),
        new(VirtualKey.Down),
        new(VirtualKey.Back),
    });
}

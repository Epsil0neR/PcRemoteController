using CommunityToolkit.WinUI;
using Epsiloner.WinUi.Services;
using H.NotifyIcon;
using Microsoft.UI.Xaml.Media.Imaging;
using RemoteController.WinUi.HotKeys.Items;

namespace RemoteController.WinUi.HostedServices;

public partial class TrayHostedService : IHostedService
{
    private TaskbarIcon? _icon;

    public DispatcherQueue Dispatcher { get; }
    public IHotkeysService HotkeysService { get; }
    public SwitchSoundOutputHotkey SwitchSoundOutputHotkey { get; }

    public TrayHostedService(
        DispatcherQueue dispatcher, 
        IHotkeysService hotkeysService,
        SwitchSoundOutputHotkey switchSoundOutputHotkey)
    {
        Dispatcher = dispatcher;
        HotkeysService = hotkeysService;
        SwitchSoundOutputHotkey = switchSoundOutputHotkey;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        await Dispatcher.EnqueueAsync(() =>
        {
            var iconPath = Path.Combine(AppContext.BaseDirectory, "Assets/WindowIcon.ico");
            var iconUri = new Uri(iconPath);
            var title = "Remote Controller";
            _icon = new()
            {
                ToolTipText = title,
                IconSource = new BitmapImage(iconUri),
                NoLeftClickDelay = true,
                LeftClickCommand = LeftClickCommand,
                MiddleClickCommand = MiddleClickCommand,
                ContextFlyout = new MenuFlyout()
                {
                    AreOpenCloseAnimationsEnabled = true,
                    Items =
                    {
                        new MenuFlyoutItem()
                        {
                            Text = title,
                            Command = ShowAppCommand
                        },
                        new MenuFlyoutSeparator(),
                        new MenuFlyoutItem()
                        {
                            Text = "Exit",
                            Command = ExitAppCommand
                        }
                    }
                }
            };
            _icon.ForceCreate();
        }, DispatcherQueuePriority.High);
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        await Dispatcher.EnqueueAsync(() =>
        {
            if (_icon is null)
                return;

            _icon.Visibility = Visibility.Collapsed;
            _icon.Dispose();
            _icon = null;
        }, DispatcherQueuePriority.High);
    }

    #region Commands
    [RelayCommand]
    private void LeftClick() => SwitchSoundOutputHotkey.Execute();

    [RelayCommand]
    private void MiddleClick() => HotkeysService.ReattachHooks();

    [RelayCommand]
    private void ShowApp() => App.MainWindow.Activate();

    [RelayCommand]
    private void ExitApp() => App.MainWindow.Close();
    #endregion
}
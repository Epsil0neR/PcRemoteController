namespace RemoteController.WinUi.HotKeys;

/// <summary>
/// Provides functionality to load/save gestures from/to options section while application is alive.
/// </summary>
public class HotkeysHostedService : IHostedService
{
    private readonly IHotkeysGestureService _hotkeysGestureService;

    public HotkeysHostedService(IHotkeysGestureService hotkeysGestureService)
    {
        _hotkeysGestureService = hotkeysGestureService;
    }

    /// <summary>
    /// Loads gestures from options and starts watching for gesture change in order to save changes into options file.
    /// </summary>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    public Task StartAsync(CancellationToken cancellationToken)
    {
        _hotkeysGestureService.Load();
        _hotkeysGestureService.StartWatch();

        return Task.CompletedTask;
    }

    /// <summary>
    /// Stops watching for gesture changes.
    /// </summary>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    public Task StopAsync(CancellationToken cancellationToken)
    {
        _hotkeysGestureService.StopWatch();

        return Task.CompletedTask;
    }
}
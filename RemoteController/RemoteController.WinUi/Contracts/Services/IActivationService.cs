namespace RemoteController.WinUi.Contracts.Services;

/// <summary>
/// Service to activate application window.
/// </summary>
public interface IActivationService : IHostedService
{
    /// <summary>
    /// Activates application window and shows to user.
    /// </summary>
    /// <param name="activationArgs">Application launch arguments.</param>
    /// <returns></returns>
    Task ActivateAsync(LaunchActivatedEventArgs? activationArgs);
}

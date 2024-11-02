namespace RemoteController.WinUi.Contracts.Services;

public interface IActivationService : IHostedService
{
    Task ActivateAsync(LaunchActivatedEventArgs? activationArgs);
}

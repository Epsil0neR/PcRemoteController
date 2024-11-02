namespace RemoteController.WinUi.Activation;

public interface IActivationHandler
{
    bool CanHandle(LaunchActivatedEventArgs? args);

    Task HandleAsync(LaunchActivatedEventArgs? args);
}

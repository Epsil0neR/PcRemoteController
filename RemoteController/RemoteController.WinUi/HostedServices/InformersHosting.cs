using RemoteController.Informer;
using RemoteController.WebSocket;
using RemoteController.WinUi.Extensions;

namespace RemoteController.WinUi.HostedServices;

public class InformersHosting : IHostedService
{
    public InformersManager Manager { get; }
    public WsServer Server { get; }

    public InformersHosting(InformersManager manager, WsServer server)
    {
        Manager = manager ?? throw new ArgumentNullException(nameof(manager));
        Server = server ?? throw new ArgumentNullException(nameof(server));
    }

    public Task StartAsync(CancellationToken cancellationToken)
    {
        Manager.InformerChanged += ManagerOnInformerChanged;
        Manager.Start();
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        Manager.InformerChanged -= ManagerOnInformerChanged;
        Manager.Stop();
        return Task.CompletedTask;
    }

    private void ManagerOnInformerChanged(object? sender, BaseInformer informer)
    {
        informer.Send(Server);
    }
}
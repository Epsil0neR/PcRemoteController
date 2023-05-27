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

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        Manager.InformerChanged += ManagerOnInformerChanged;
        Manager.Start();
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        Manager.InformerChanged -= ManagerOnInformerChanged;
        Manager.Stop();
    }

    private void ManagerOnInformerChanged(object? sender, BaseInformer informer)
    {
        informer.Send(Server);
    }
}
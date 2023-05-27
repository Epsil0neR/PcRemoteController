using Microsoft.Extensions.Options;
using RemoteController.Informer;
using RemoteController.Manipulator;
using RemoteController.Manipulator.Contexts;
using RemoteController.WebSocket;
using RemoteController.WinUi.Extensions;
using RemoteController.WinUi.Models;
using WindowsInput;

namespace RemoteController.WinUi.HostedServices;

public class ManipulatorsHosting : IHostedService
{
    public bool IsRunning { get; private set; }

    public IManipulatorsManager Manager { get; }
    public WsService Service { get; }

    public ManipulatorsHosting(IManipulatorsManager manager, WsService service)
    {
        Manager = manager ?? throw new ArgumentNullException(nameof(manager));
        Service = service ?? throw new ArgumentNullException(nameof(service));

        PopulateContexts();
        AddManipulations();
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        IsRunning = true;
        foreach (var manipulation in Manager)
        {
            Service.RegisterHandlerForAction(manipulation.Name, ManipulationHandler);
        }
        Manager.ItemStateChanged += ManagerOnItemStateChanged;
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        IsRunning = false;
        Manager.ItemStateChanged -= ManagerOnItemStateChanged;
        foreach (var manipulation in Manager)
        {
            Service.UnregisterHandlerForAction(manipulation.Name, ManipulationHandler);
        }
    }

    private void PopulateContexts()
    {
        var input = this.Resolve<InputSimulator>();
        Manager.SetContext(input.Keyboard);
        Manager.SetContext(input.Mouse);

        var fsc = Manager.GetContext<FileSystemContext>();
        if (fsc is null)
        {
            fsc = this.Resolve<FileSystemContext>();
            Manager.SetContext(fsc);
        }

        var options = this.Resolve<IOptions<FileSystemOptions>>();
        fsc.Roots = options.Value.Roots;
    }

    private void AddManipulations()
    {
        void Add(IEnumerable<IManipulation> manipulations)
        {
            foreach (var manipulation in manipulations)
                Manager.Add(manipulation);
        }

        Add(FileSystemManipulation.GetManipulations());
        Add(KeyboardManipulation.GetManipulations());
        Add(MouseManipulation.GetManipulations());

        var soundInformer = this.Resolve<SoundInformer>();
        Manager.Add(new CustomManipulation<SoundInformer?>(soundInformer.GetActionName(), () => soundInformer.CheckForChanges() ? null : soundInformer));
        Manager.Add(new CustomManipulation<bool>("Sound.Output.Volume", input =>
        {
            if (!int.TryParse(input, out var volume))
                return false;

            return soundInformer.ChangeOutputVolume(volume);
        }));
        Manager.Add(new CustomManipulation<bool>("Sound.Input.Volume", input =>
        {
            if (!int.TryParse(input, out var volume))
                return false;

            return soundInformer.ChangeInputVolume(volume);
        }));
    }

    private void ManagerOnItemStateChanged(object? sender, ManipulatorsItemEventArgs e)
    {
        if (e.Inserted)
            Service.RegisterHandlerForAction(e.Manipulation.Name, ManipulationHandler);
        else
            Service.UnregisterHandlerForAction(e.Manipulation.Name, ManipulationHandler);
    }

    private void ManipulationHandler(Message msg)
    {
        if (msg.Type != MessageType.Request)
        {
            msg.Sender.Send(new Message
            {
                ActionName = msg.ActionName,
                Hash = msg.Hash,
                Data = "Only Request message mode support for messages from clients",
                Type = MessageType.Error
            });
            return;
        }

        var data = Manager.TryExecute(msg.ActionName, msg.Data?.ToString());
        msg.Sender.Send(new Message
        {
            ActionName = msg.ActionName,
            Hash = msg.Hash,
            Data = data,
            Type = MessageType.Response
        });
    }
}
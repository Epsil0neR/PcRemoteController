using System;
using Microsoft.Extensions.DependencyInjection;
using NLog;
using RemoteController.Manipulator.Contexts;
using RemoteController.WebSocket;

namespace RemoteController.Manipulator;

public static class DependencyInjection
{
    public static IServiceCollection AddManipulatorModule(this IServiceCollection sc) => sc
        .AddSingleton<FileSystemContext>()
        .AddSingleton(ManipulatorsManagerFactory)
        .AddSingleton<IManipulatorsManager, ManipulatorsManager>()
        ;


    private static ManipulatorsManager ManipulatorsManagerFactory(IServiceProvider provider)
    {
        var logger = provider.GetRequiredService<Logger>();
        var manipulatorsManager = new ManipulatorsManager(logger);
        manipulatorsManager.ItemStateChanged += ManipulatorsManagerOnItemStateChanged;
        return manipulatorsManager;
    }

    private static void ManipulatorsManagerOnItemStateChanged(object? sender, ManipulatorsItemEventArgs e)
    {
        var s = IoC.Resolve<WsService>();
        if (e.Inserted)
            s.RegisterHandlerForAction(e.Manipulation.Name, ManipulationHandler);
        else
            s.UnregisterHandlerForAction(e.Manipulation.Name, ManipulationHandler);
    }

    private static void ManipulationHandler(Message msg)
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

        var manager = IoC.Resolve<ManipulatorsManager>();
        var data = manager.TryExecute(msg.ActionName, msg.Data?.ToString() ?? string.Empty);

        msg.Sender.Send(new Message
        {
            ActionName = msg.ActionName,
            Hash = msg.Hash,
            Data = data,
            Type = MessageType.Response
        });
    }
}
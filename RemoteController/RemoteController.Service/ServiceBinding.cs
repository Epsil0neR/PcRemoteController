using System;
using RemoteController.Manipulator;
using RemoteController.WebSocket;

namespace RemoteController.Service
{
    public class ServiceBinding : IDisposable
    {
        private readonly WsService _service;
        private readonly ManipulatorsManager _manipulators;

        public ServiceBinding(WsService service, ManipulatorsManager manipulators)
        {
            _service = service;
            _manipulators = manipulators;

            _manipulators.ItemStateChanged += ManipulatorsOnItemStateChanged;
        }

        public void Dispose()
        {
            _manipulators.ItemStateChanged -= ManipulatorsOnItemStateChanged;
        }

        private void ManipulatorsOnItemStateChanged(object sender, ManipulatorsItemEventArgs e)
        {
            if (e.Inserted)
                _service.RegisterHandlerForAction(e.Manipulation.Name, Handler);
            else
                _service.UnregisterHandlerForAction(e.Manipulation.Name, Handler);
        }

        private void Handler(Message msg)
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

            var data = _manipulators.TryExecute(msg.ActionName, msg.Data?.ToString());

            msg.Sender.Send(new Message
            {
                ActionName = msg.ActionName,
                Hash = msg.Hash,
                Data = data,
                Type = MessageType.Response
            });
        }
    }
}
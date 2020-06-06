using System;
using RemoteController.WebSocket;
using WebSocketSharp.Server;

namespace RemoteController.ViewModels
{
    public class MainViewModel
    {
        //public RemoteControllerService Service { get; }

        public WsServer WsServer { get; }


        public MainViewModel(WsServer wsServer)
        {
            WsServer = wsServer ?? throw  new ArgumentNullException(nameof(wsServer));
            //Service = service;
            //Service.Start(null);
        }
    }
}

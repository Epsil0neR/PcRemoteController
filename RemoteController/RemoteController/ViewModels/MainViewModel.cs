using RemoteController.WebSocket;

namespace RemoteController.ViewModels
{
    public class MainViewModel
    {
        //public RemoteControllerService Service { get; }

        public WsServer WsServer { get; }


        public MainViewModel(WsServer wsServer)
        {
            WsServer = wsServer;
            //Service = service;
            //Service.Start(null);
        }
    }
}

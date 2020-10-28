using System;
using System.Windows.Media.Animation;
using NLog;
using RemoteController.Configs;
using RemoteController.WebSocket;

namespace RemoteController.ViewModels
{
    public class MainViewModel
    {
        //public RemoteControllerService Service { get; }

        public WsServer WsServer { get; }
        public ServerConfig ServerConfig { get; }
        public FileSystemConfig FileSystemConfig { get; }


        public MainViewModel(
            WsServer wsServer,
            ServerConfig serverConfig,
            FileSystemConfig fileSystemConfig,
            ILogger logger)
        {
            WsServer = wsServer ?? throw new ArgumentNullException(nameof(wsServer));
            ServerConfig = serverConfig ?? throw new ArgumentNullException(nameof(serverConfig));
            FileSystemConfig = fileSystemConfig ?? throw new ArgumentNullException(nameof(fileSystemConfig));
        }
    }
}

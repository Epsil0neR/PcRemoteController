using System;
using System.Windows.Input;
using RemoteController.Configs;
using RemoteController.WebSocket;

namespace RemoteController.ViewModels.Pages
{
    public class OverviewPageViewModel : BasePageViewModel
    {
        public WsServer WsServer { get; }//TODO: Remove
        public ServerConfig ServerConfig { get; }//TODO: Remove
        public FileSystemConfig FileSystemConfig { get; } //TODO: Remove

        
        public OverviewPageViewModel(
            WsServer wsServer,
            ServerConfig serverConfig,
            FileSystemConfig fileSystemConfig)
            : base("Overview")
        {
            WsServer = wsServer ?? throw new ArgumentNullException(nameof(wsServer));
            ServerConfig = serverConfig ?? throw new ArgumentNullException(nameof(serverConfig));
            FileSystemConfig = fileSystemConfig ?? throw new ArgumentNullException(nameof(fileSystemConfig));
        }

        /// <summary>
        /// TODO: Count of currently connected clients.
        /// </summary>
        public int Connections { get; }

        public bool IsServerRunning { get; }
        public ICommand StopServerCommand { get; }
        public ICommand StartServerCommand { get; }
    }
}
using System;
using System.Windows.Input;
using Epsiloner.Wpf.ViewModels;
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
            ILogger logger,
            IPageViewModel[] pages)
        {
            WsServer = wsServer ?? throw new ArgumentNullException(nameof(wsServer));
            ServerConfig = serverConfig ?? throw new ArgumentNullException(nameof(serverConfig));
            FileSystemConfig = fileSystemConfig ?? throw new ArgumentNullException(nameof(fileSystemConfig));
        }
    }
    public interface IPageViewModel : IViewModel
    {
        /// <summary>
        /// Page name displayed in UI
        /// </summary>
        string Name { get; }

        /// <summary>
        /// Indicates if page is currently selected.
        /// </summary>
        bool IsSelected { get; set; }
    }

    public abstract class BasePageViewModel : ViewModel, IPageViewModel
    {
        private bool _isSelected;

        protected BasePageViewModel(string name)
        {
            Name = name;
        }

        /// <inheritdoc />
        public string Name { get; }

        /// <inheritdoc />
        public bool IsSelected
        {
            get => _isSelected;
            set => Set(ref _isSelected, value);
        }
    }

    public class OverviewPageViewModel : BasePageViewModel
    {
        public OverviewPageViewModel()
            : base("Overview")
        {
        }

        /// <summary>
        /// TODO: Count of currently connected clients.
        /// </summary>
        public int Connections { get; }

        public bool IsServerRunning { get; }
        public ICommand StopServerCommand { get; }
        public ICommand StartServerCommand { get; }
    }

    public class TestPageViewModel : BasePageViewModel
    {
        public TestPageViewModel()
            : base("TEST")
        {
        }
    }
}

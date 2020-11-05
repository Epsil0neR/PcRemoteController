using System;
using System.Linq;
using System.Windows.Input;
using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.CommandWpf;
using NLog;
using RemoteController.Configs;
using RemoteController.WebSocket;

namespace RemoteController.ViewModels
{
    public class MainViewModel : ViewModel
    {
        private IPageViewModel _selected;
        //public RemoteControllerService Service { get; }

        public WsServer WsServer { get; }//TODO: Remove
        public ServerConfig ServerConfig { get; }//TODO: Remove
        public FileSystemConfig FileSystemConfig { get; } //TODO: Remove

        /// <summary>
        /// All registered pages.
        /// </summary>
        public IPageViewModel[] Pages { get; }

        /// <summary>
        /// Currently selected page.
        /// </summary>
        public IPageViewModel Selected
        {
            get => _selected;
            set => Set(ref _selected, value);
        }

        public ICommand SelectCommand { get; }

        public int HexValue { get; } = 0xE105;

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

            Pages = pages ?? throw new ArgumentNullException(nameof(pages));
            Selected = Pages.FirstOrDefault();

            SelectCommand = new RelayCommand<IPageViewModel>(Select);
        }

        private void Select(IPageViewModel page)
        {
            Selected = page;
        }
    }

    public class TestPageViewModel : BasePageViewModel
    {
        public TestPageViewModel()
            : base("TEST")
        {
        }
    }
}

using System;
using System.Linq;
using System.Windows.Input;
using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.WebSocket;

namespace RemoteController.ViewModels
{
    public class MainViewModel : ViewModel
    {
        private IPageViewModel _selected;

        /// <summary>
        /// All registered pages.
        /// </summary>
        public IPageViewModel[] Pages { get; }

        public WsServer WsServer { get; }

        /// <summary>
        /// Currently selected page.
        /// </summary>
        public IPageViewModel Selected
        {
            get => _selected;
            set => Set(ref _selected, value);
        }

        /// <summary>
        /// Command to select <see cref="IPageViewModel"/>.
        /// </summary>
        public ICommand SelectCommand { get; }

        public ICommand StartServerCommand { get; }
        public ICommand StopServerCommand { get; }

        public MainViewModel(IPageViewModel[] pages, WsServer wsServer)
        {
            Pages = pages ?? throw new ArgumentNullException(nameof(pages));
            WsServer = wsServer;
            Selected = Pages.FirstOrDefault(x => x.Name == PageName.Paths);

            SelectCommand = new RelayCommand<IPageViewModel>(Select);
            StartServerCommand = new RelayCommand(StartServer);
            StopServerCommand = new RelayCommand(StopServer);
        }

        private void StartServer()
        {
            WsServer.StartServer();
        }

        private void StopServer()
        {
            WsServer.StopServer();
        }

        private void Select(IPageViewModel page)
        {
            if (page != null)
                Selected = page;
        }
    }
}

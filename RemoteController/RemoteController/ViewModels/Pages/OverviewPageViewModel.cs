using System;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Threading;
using Epsiloner.Wpf.Collections;
using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.Configs;
using RemoteController.WebSocket;

namespace RemoteController.ViewModels.Pages
{
    public class OverviewPageViewModel : BasePageViewModel
    {
        public WsServer WsServer { get; } //TODO: Remove
        public ServerConfig ServerConfig { get; } //TODO: Remove
        public FileSystemConfig FileSystemConfig { get; } //TODO: Remove


        public OverviewPageViewModel(
            WsServer wsServer,
            ServerConfig serverConfig,
            FileSystemConfig fileSystemConfig)
            : base((uint) PagePriority.Overview, "Overview")
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

    public class PathsManagerPageViewModel : BasePageViewModel
    {
        public FileSystemConfig FileSystemConfig { get; }
        public ObservableCollection<PathViewModel> Paths { get; }

        public PathsManagerPageViewModel(
            FileSystemConfig fileSystemConfig,
            Dispatcher dispatcher)
            : base((uint) PagePriority.Paths, "Paths")
        {
            FileSystemConfig = fileSystemConfig;
            Paths = new ObservableCollection<PathViewModel>
            {
                Dispatcher = dispatcher
            };
            
            foreach (var pair in FileSystemConfig.Roots)
                Paths.Add(new PathViewModel(pair.Key, pair.Value, RemoveAction));
        }

        private void RemoveAction(PathViewModel path)
        {
            Paths.Remove(path);
        }
    }

    public class PathViewModel : ViewModel
    {
        private string _name;
        private string _path;

        public string Name
        {
            get => _name;
            set => Set(ref _name, value);
        }

        public string Path
        {
            get => _path;
            set => Set(ref _path, value);
        }

        public ICommand ChangePathCommand { get; }
        public ICommand RemoveCommand { get; }

        public PathViewModel(string name, string path, Action<PathViewModel> removeAction)
        {
            Name = name;
            Path = path;
            ChangePathCommand = new RelayCommand(ChangePath);
            RemoveCommand = new RelayCommand(() => removeAction(this));
        }

        private void ChangePath()
        {
            using (var dlg = new FolderBrowserDialog())
            {
                dlg.SelectedPath = Path;
                dlg.ShowNewFolderButton = true;
                var res = dlg.ShowDialog();
                if (res == DialogResult.OK)
                {
                    Path = dlg.SelectedPath;
                }
            }
        }
    }
}
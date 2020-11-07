using System.Windows.Forms;
using System.Windows.Threading;
using Epsiloner.Wpf.Collections;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.Configs;
using RemoteController.Extensions;

namespace RemoteController.ViewModels.Pages
{
    public class PathsManagerPageViewModel : BasePageViewModel
    {
        private string _newPath;
        public FileSystemConfig FileSystemConfig { get; }
        public ObservableCollection<PathViewModel> Paths { get; }

        public string NewPath
        {
            get => _newPath;
            set => Set(ref _newPath, value);
        }

        public RelayCommand AddPathCommand { get; }

        public PathsManagerPageViewModel(
            FileSystemConfig fileSystemConfig,
            Dispatcher dispatcher)
            : base((uint)PagePriority.Paths, "Paths")
        {
            FileSystemConfig = fileSystemConfig;
            Paths = new ObservableCollection<PathViewModel>
            {
                Dispatcher = dispatcher
            };

            foreach (var pair in FileSystemConfig.Roots)
                Paths.Add(new PathViewModel(pair.Key, pair.Value, RemoveAction));

            AddPathCommand = new RelayCommand(AddPath, CanAddPath);
        }

        private void AddPath()
        {
            if (!CanAddPath())
                return;

            using var dlg = new FolderBrowserDialog
            {
                ShowNewFolderButton = true,
                Description = $"Select directory that will be associated with '{NewPath}'."
            };
            var res = dlg.ShowDialog();
            if (res != DialogResult.OK)
                return;

            var name = NewPath;
            var path = dlg.SelectedPath;

            FileSystemConfig.Roots.Add(name, path);
            Paths.Add(new PathViewModel(name, path, RemoveAction));
        }

        private bool CanAddPath()
        {
            if (string.IsNullOrWhiteSpace(NewPath))
                return false;

            if (FileSystemConfig.Roots.ContainsKey(NewPath))
                return false;

            if (!NewPath.IsValidRootName())
                return false;

            return true;
        }

        private void RemoveAction(PathViewModel path)
        {
            if (path != null && FileSystemConfig.Roots.Remove(path.Name))
                Paths.Remove(path);
        }
    }
}
using System.IO;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Threading;
using Epsiloner.OptionsModule;
using Epsiloner.Wpf.Collections;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.Configs;
using RemoteController.Extensions;
using RemoteController.Manipulator.Contexts;

namespace RemoteController.ViewModels.Pages
{
    public class PathsManagerPageViewModel : BasePageViewModel
    {
        private string _nameForNew;
        private string _pathForNew;
        public FileSystemConfig FileSystemConfig { get; }
        public Options Options { get; }
        public ObservableCollection<PathViewModel> Paths { get; }

        public string NameForNew
        {
            get => _nameForNew;
            set => Set(ref _nameForNew, value);
        }

        public string PathForNew
        {
            get => _pathForNew;
            set => Set(ref _pathForNew, value);
        }

        public RelayCommand AddPathCommand { get; }
        public ICommand SelectPathCommand { get; }

        public PathsManagerPageViewModel(
            FileSystemConfig fileSystemConfig,
            Options options,
            Dispatcher dispatcher)
            : base((uint)PagePriority.Paths, "Paths")
        {
            FileSystemConfig = fileSystemConfig;
            Options = options;
            Paths = new ObservableCollection<PathViewModel>
            {
                Dispatcher = dispatcher
            };

            foreach (var path in FileSystemConfig.Roots)
                Paths.Add(new PathViewModel(path.Name, path.Path, RemoveAction));

            AddPathCommand = new RelayCommand(AddPath, CanAddPath);
            SelectPathCommand = new RelayCommand(SelectPath);
        }

        private void SelectPath()
        {
            using var dlg = new FolderBrowserDialog
            {
                ShowNewFolderButton = true,
                Description = $"Select directory that will be associated with '{NameForNew}'.",
                SelectedPath = PathForNew,
            };
            var res = dlg.ShowDialog();
            if (res != DialogResult.OK)
                return;
            PathForNew = dlg.SelectedPath;
        }

        private void AddPath()
        {
            if (!CanAddPath())
                return;

            if (!Directory.Exists(PathForNew))
            {
                PathForNew = string.Empty;
                return;
            }

            var name = NameForNew;
            var path = PathForNew;

            FileSystemConfig.Roots.Add(new FileSystemPath
            {
                Name = name,
                Path = path
            });
            Options.Save();

            Paths.Add(new PathViewModel(name, path, RemoveAction));

            NameForNew = string.Empty;
            PathForNew = string.Empty;
        }

        private bool CanAddPath()
        {
            return FileSystemConfig.Roots.CanAdd(NameForNew);
        }

        private void RemoveAction(PathViewModel path)
        {
            if (path != null && FileSystemConfig.Roots.Remove(path.Name))
            {
                Paths.Remove(path);
                Options.Save();
            }
        }
    }
}
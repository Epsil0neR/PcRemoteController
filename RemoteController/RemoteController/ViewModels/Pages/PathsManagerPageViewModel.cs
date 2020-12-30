using System.Windows.Input;
using System.Windows.Threading;
using Epsiloner.OptionsModule;
using Epsiloner.Wpf.Collections;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.Configs;

namespace RemoteController.ViewModels.Pages
{
    public class PathsManagerPageViewModel : BasePageViewModel
    {
        private CreatePathViewModel _createPath;
        public FileSystemConfig FileSystemConfig { get; }
        public Options Options { get; }
        public ObservableCollection<PathViewModel> Paths { get; }

        public CreatePathViewModel CreatePath
        {
            get => _createPath;
            set => Set(ref _createPath, value);
        }

        public ICommand CreatePathCommand { get; }

        public PathsManagerPageViewModel(
            FileSystemConfig fileSystemConfig,
            Options options,
            Dispatcher dispatcher)
            : base(PageName.Paths)
        {
            FileSystemConfig = fileSystemConfig;
            Options = options;
            Paths = new ObservableCollection<PathViewModel>
            {
                Dispatcher = dispatcher
            };

            foreach (var path in FileSystemConfig.Roots)
                Paths.Add(new PathViewModel(path, RemoveAction));

            CreatePathCommand = new RelayCommand(CreatePathCommandHandler);
        }

        private void CreatePathCommandHandler()
        {
            CreatePath = new CreatePathViewModel(
                () => CreatePath = null,
                CreatePathSubmit,
                IsNameValid);
        }

        public override void UnSelected()
        {
            base.UnSelected();
            CreatePath = null;
        }

        private bool IsNameValid(string name)
        {
            return FileSystemConfig.Roots.CanAdd(name);
        }

        private void CreatePathSubmit()
        {
            if (CreatePath == null)
                return;

            var path = CreatePath.ToFileSystemPath();
            CreatePath = null;
            FileSystemConfig.Roots.Add(path);
            Options.Save(FileSystemConfig);

            Paths.Add(new PathViewModel(path, RemoveAction));
        }

        private void RemoveAction(PathViewModel path)
        {
            if (path != null && FileSystemConfig.Roots.Remove(path.Path))
            {
                Paths.Remove(path);
                Options.Save(FileSystemConfig);
            }
        }
    }
}
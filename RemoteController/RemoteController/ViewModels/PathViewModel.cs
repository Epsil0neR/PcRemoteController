using System;
using System.Windows.Forms;
using System.Windows.Input;
using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.Manipulator.Contexts;

namespace RemoteController.ViewModels
{
    public class PathViewModel : ViewModel
    {
        private readonly Action<PathViewModel> _removeAction;
        private readonly FileSystemPath _data;
        private string _path;
        private string _name;

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

        /// <param name="path">Actual path.</param>
        /// <param name="removeAction">Action for removing this item.</param>
        public PathViewModel(FileSystemPath path, Action<PathViewModel> removeAction)
        {
            _data = path;
            _removeAction = removeAction;
            Name = path.Name;
            Path = path.Path;
            ChangePathCommand = new RelayCommand(ChangePath);
            RemoveCommand = new RelayCommand(Remove);
        }

        private void ChangePath()
        {
            using var dlg = new FolderBrowserDialog
            {
                SelectedPath = Path,
                ShowNewFolderButton = true
            };
            var res = dlg.ShowDialog();
            if (res != DialogResult.OK)
                return;

            _data.Path = Path = dlg.SelectedPath;
        }

        private void Remove()
        {
            _removeAction(this);
        }
    }
}
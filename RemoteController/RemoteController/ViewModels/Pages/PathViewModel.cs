using System;
using System.Windows.Forms;
using System.Windows.Input;
using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.CommandWpf;

namespace RemoteController.ViewModels.Pages
{
    public class PathViewModel : ViewModel
    {
        private readonly Action<PathViewModel> _removeAction;
        private string _path;

        public string Name { get; }

        public string Path
        {
            get => _path;
            set => Set(ref _path, value);
        }

        public ICommand ChangePathCommand { get; }
        public ICommand RemoveCommand { get; }

        /// <param name="name">Displayed path to client.</param>
        /// <param name="path">Actual path.</param>
        /// <param name="removeAction">Action for removing this item.</param>
        public PathViewModel(string name, string path, Action<PathViewModel> removeAction)
        {
            _removeAction = removeAction;
            Name = name;
            Path = path;
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
            if (res == DialogResult.OK)
                Path = dlg.SelectedPath;
        }

        private void Remove()
        {
            _removeAction(this);
        }
    }
}
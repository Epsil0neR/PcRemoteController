using System;
using System.IO;
using System.Windows.Forms;
using System.Windows.Input;
using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.Manipulator.Contexts;

namespace RemoteController.ViewModels
{
    public class CreatePathViewModel : ViewModel
    {
        private readonly Action _submitAction;
        private readonly Func<string, bool> _nameValidator;
        private string _name;
        private string _path;
        private string _validationErrorMessage;

        public string Name
        {
            get => _name;
            set => Set(ref _name, value);
        }

        public string Path
        {
            get => _path;
            private set => Set(ref _path, value);
        }

        /// <summary>
        /// Validation message.
        /// </summary>
        public string ValidationErrorMessage
        {
            get => _validationErrorMessage;
            set => Set(ref _validationErrorMessage, value);
        }

        public ICommand CancelCommand { get; }
        public ICommand SubmitCommand { get; }
        public ICommand ChoosePathCommand { get; }

        /// <param name="cancelAction">Action to cancel new path creation.</param>
        /// <param name="submitAction">Action to submit path creation. Invoked only when state is valid.</param>
        /// <param name="nameValidator">Validator for path name.</param>
        public CreatePathViewModel(Action cancelAction, Action submitAction, Func<string, bool> nameValidator)
        {
            _submitAction = submitAction ?? throw new ArgumentNullException(nameof(submitAction));
            _nameValidator = nameValidator ?? throw new ArgumentNullException(nameof(nameValidator));

            CancelCommand = new RelayCommand(cancelAction ?? throw new ArgumentNullException(nameof(cancelAction)));
            SubmitCommand = new RelayCommand(Submit, CanSubmit);
            ChoosePathCommand = new RelayCommand(ChoosePath);
        }

        private void ChoosePath()
        {
            using var dlg = new FolderBrowserDialog
            {
                ShowNewFolderButton = true,
                Description = $"Select directory that will be associated with '{Name}'.",
                SelectedPath = Path,
            };
            var res = dlg.ShowDialog();
            if (res != DialogResult.OK)
                return;

            Path = dlg.SelectedPath;
        }

        private void Submit()
        {
            if (!CanSubmit())
                return;

            _submitAction();
        }

        private bool CanSubmit()
        {
            if (!_nameValidator(Name))
            {
                ValidationErrorMessage = "Name is not valid. It must be non empty and unique.";
                return false;
            }

            if (!Directory.Exists(Path))
            {
                Path = string.Empty;
                ValidationErrorMessage = "Path does not exists.";
                return false;
            }

            ValidationErrorMessage = null;
            return true;
        }


        public FileSystemPath ToFileSystemPath()
        {
            return new FileSystemPath
            {
                Name = Name,
                Path = Path
            };
        }
    }
}
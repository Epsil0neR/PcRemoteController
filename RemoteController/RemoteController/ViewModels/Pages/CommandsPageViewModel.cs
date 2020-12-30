using System;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Threading;
using Epsiloner.OptionsModule;
using Epsiloner.Wpf.Collections;
using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.Configs;
using RemoteController.Manipulator;

namespace RemoteController.ViewModels.Pages
{
    public class CommandsPageViewModel : BasePageViewModel
    {
        private CreateCommandViewModel _create;
        public Options Options { get; }
        public CommandsConfig Config { get; }
        public IManipulatorsManager Manager { get; }

        public ObservableCollection<CommandViewModel> Commands { get; }

        public ICommand TestCommand { get; }

        public object CreateCommand { get; }

        public CommandsPageViewModel(
            Dispatcher dispatcher,
            Options options,
            CommandsConfig config,
            IManipulatorsManager manager
            )
            : base(PageName.Commands)
        {
            Options = options ?? throw new ArgumentNullException(nameof(options));
            Config = config ?? throw new ArgumentNullException(nameof(config));
            Manager = manager ?? throw new ArgumentNullException(nameof(manager));

            Commands = new ObservableCollection<CommandViewModel>
            {
                Dispatcher = dispatcher ?? throw new ArgumentNullException(nameof(dispatcher))
            };
            Commands.RegisterHandler(CommandHandler);

            if (Config.Count == 0)
            {
                var c = new ManipulationCommand
                {
                    Name = "cmd.Test",
                    Data = "git status",//"msg %username% Your message here",
                    ShowCmdWindow = true
                };
                Config.Add(c);
                Options.Save(Config);
            }

            TestCommand = new RelayCommand(Test);
            CreateCommand = new RelayCommand(CreateCommandHandler);

            Manager.ItemStateChanged += ManagerOnItemStateChanged;
            ProceedConfig();
        }

        public override void UnSelected()
        {
            base.UnSelected();
            Create = null;
        }

        private void CreateCommandHandler()
        {
            Create = new CreateCommandViewModel(
                () => Create = null,
                SubmitAction,
                NameValidator
                );
        }

        private bool NameValidator(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
                return false;
            if (Manager.Find(name) != null)
                return false;

            return true;
        }

        private void SubmitAction()
        {
            if (Create == null)
                return;

            var command = Create.ToManipulationCommand();
            Config.Add(command);
            Options.Save(Config);

            var vm = new CommandViewModel(command);
            Commands.Add(vm);

            Create = null;
        }

        public CreateCommandViewModel Create
        {
            get => _create;
            private set => Set(ref _create, value);
        }

        private void Test()
        {
            var result = Manager.TryExecute("cmd.Test");
            Debugger.Break();
        }

        private void CommandHandler(bool inserted, CommandViewModel item, int index)
        {
            if (!inserted)
            {
                Manager.Remove(item.Manipulation);
                item.IsWorking = false;
            }
            else if (Config.IsEnabled && item.Config.IsEnabled && Manager.Find(item.Manipulation.Name) == null)
            {
                Manager.Add(item.Manipulation);
                item.IsWorking = true;
            }
        }

        private void ProceedConfig()
        {
            //1. Remove old manipulations.
            Config.PropertyChanged -= ConfigOnPropertyChanged;
            Commands.Clear();

            //2. Check which config items are invalid and remove them.
            var invalidCommands = Config.Where(x => !Validator.Validate(x)).ToList();
            if (invalidCommands.Count > 0)
            {
                Config.RemoveAll(invalidCommands.Contains);
                Options.Save(Config);
            }

            //3. Populate manipulator manager with items from config.
            foreach (var c in Config)
            {
                var vm = new CommandViewModel(c);
                Commands.Add(vm);
            }

            Config.PropertyChanged += ConfigOnPropertyChanged;
        }

        private void ConfigOnPropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            if (e.PropertyName != nameof(CommandsConfig.IsEnabled))
                return;

            if (Config.IsEnabled)
            {
                //IsEnabled == true  -> Add all enabled Command manipulations to manager.
                foreach (var command in Commands)
                    CommandHandler(true, command, -1);
            }
            else
            {
                //IsEnabled == false -> Remove from manager all manipulations that belongs to this page.
                foreach (var command in Commands)
                    CommandHandler(false, command, -1);
            }
        }

        private void ManagerOnItemStateChanged(object sender, ManipulatorsItemEventArgs e)
        {
            if (e.Inserted)
                return;

            var vm = Commands.FirstOrDefault(x => ReferenceEquals(x.Manipulation, e.Manipulation));
            if (vm == null)
                return;

            vm.IsWorking = false;
        }
    }

    public class CreateCommandViewModel : ViewModel
    {
        private readonly Action _submitAction;
        private readonly Func<string, bool> _nameValidator;
        private string _validationErrorMessage;
        private string _name;
        private ManipulationCommandType _type = ManipulationCommandType.Code;
        private string _code;
        private string _filePath;
        private string _workingDirectory;
        private bool _isHidden;
        private bool _waitForExecution;

        public string ValidationErrorMessage
        {
            get => _validationErrorMessage;
            private set => Set(ref _validationErrorMessage, value);
        }

        public string Name
        {
            get => _name;
            set => Set(ref _name, value);
        }

        public ManipulationCommandType Type
        {
            get => _type;
            set => Set(ref _type, value);
        }

        public string Code
        {
            get => _code;
            set => Set(ref _code, value);
        }

        public string FilePath
        {
            get => _filePath;
            set => Set(ref _filePath, value);
        }

        public string WorkingDirectory
        {
            get => _workingDirectory;
            set => Set(ref _workingDirectory, value);
        }

        public bool IsHidden
        {
            get => _isHidden;
            set => Set(ref _isHidden, value);
        }

        public bool WaitForExecution
        {
            get => _waitForExecution;
            set => Set(ref _waitForExecution, value);
        }

        public ICommand SelectFileCommand { get; }
        public ICommand SelectWorkingDirectoryCommand { get; }
        public ICommand ClearWorkingDirectoryCommand { get; }
        public ICommand CancelCommand { get; }
        public ICommand SubmitCommand { get; }

        public CreateCommandViewModel(Action cancelAction, Action submitAction, Func<string, bool> nameValidator)
        {
            _submitAction = submitAction ?? throw new ArgumentNullException(nameof(submitAction));
            _nameValidator = nameValidator ?? throw new ArgumentNullException(nameof(nameValidator));

            SelectFileCommand = new RelayCommand(SelectFile);
            SelectWorkingDirectoryCommand = new RelayCommand(SelectWorkingDirectory);
            ClearWorkingDirectoryCommand = new RelayCommand(() => WorkingDirectory = null);
            CancelCommand = new RelayCommand(cancelAction ?? throw new ArgumentNullException(nameof(cancelAction)));
            SubmitCommand = new RelayCommand(Submit, CanSubmit);
        }

        private void SelectFile()
        {
            using var browser = new OpenFileDialog
            {
                Multiselect = false,
                InitialDirectory = string.IsNullOrWhiteSpace(FilePath)
                    ? WorkingDirectory
                    : Path.GetDirectoryName(FilePath)
            };

            var result = browser.ShowDialog();
            if (result != DialogResult.OK)
                return;

            FilePath = browser.FileName;
        }

        private void SelectWorkingDirectory()
        {
            using var browser = new FolderBrowserDialog
            {
                SelectedPath = WorkingDirectory,
                ShowNewFolderButton = true
            };

            var result = browser.ShowDialog();
            if (result != DialogResult.OK)
                return;

            WorkingDirectory = browser.SelectedPath;
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
                ValidationErrorMessage = "Name is not valid. It must be non empty and unique to not conflict with other manipulations.";
                return false;
            }

            if (Type == ManipulationCommandType.Code && string.IsNullOrWhiteSpace(Code))
            {
                ValidationErrorMessage = "Code cannot be empty.";
                return false;
            }

            if (Type == ManipulationCommandType.File && !File.Exists(FilePath))
            {
                ValidationErrorMessage = "File not found.";
                return false;
            }

            if (!string.IsNullOrWhiteSpace(WorkingDirectory) && !Directory.Exists(WorkingDirectory))
            {
                ValidationErrorMessage = "Working directory does not exist.";
                return false;
            }

            ValidationErrorMessage = null;
            return true;
        }

        public ManipulationCommand ToManipulationCommand()
        {
            var rv = new ManipulationCommand
            {
                Name = Name,
                WorkingDirectory = WorkingDirectory,
                IsEnabled = true,
                AllowArgument = false,//TODO: Not implemented in UI
                Mode = Type,
                ShowCmdWindow = !IsHidden,
                Data = Type == ManipulationCommandType.Code ? Code : FilePath,
                WaitForExecution = WaitForExecution
            };

            return rv;
        }
    }
}

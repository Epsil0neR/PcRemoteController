using System;
using System.ComponentModel;
using System.Linq;
using System.Windows.Input;
using System.Windows.Threading;
using Epsiloner.OptionsModule;
using Epsiloner.Wpf.Collections;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.Configs;
using RemoteController.Manipulator;

namespace RemoteController.ViewModels.Pages
{
    public class CommandsPageViewModel : BasePageViewModel
    {
        public Options Options { get; }
        public CommandsConfig Config { get; }
        public IManipulatorsManager Manager { get; }

        public ObservableCollection<CommandViewModel> Commands { get; }

        public ICommand TestCommand { get; }

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

            Commands = new ObservableCollection<CommandViewModel>()
            {
                Dispatcher = dispatcher ?? throw new ArgumentNullException(nameof(dispatcher))
            };
            Commands.RegisterHandler(CommandHandler);

            if (Config.Count == 0)
            {
                var c = new ManipulationCommand()
                {
                    Name = "cmd.Test",
                    Data = "git status",//"msg %username% Your message here",
                    ShowCmdWindow = true
                };
                Config.Add(c);
                Options.Save(Config);
            }

            TestCommand = new RelayCommand(Test);

            Manager.ItemStateChanged += ManagerOnItemStateChanged;
            ProceedConfig();
        }

        private void Test()
        {
            var t = Manager.TryExecute("cmd.Test");
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
                //TODO: Add support for commands with File mode.
                if (c.Mode == ManipulationCommandType.Code)
                {
                    var vm = new CommandViewModel(c);
                    Commands.Add(vm);
                }
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
}

using System;
using System.Linq;
using System.Windows.Threading;
using Epsiloner.OptionsModule;
using Epsiloner.Wpf.Collections;
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

            ProceedConfig();
        }

        private void CommandHandler(bool inserted, CommandViewModel item, int index)
        {
            if (inserted)
                Manager.Add(item.Manipulation);
            else
                Manager.Remove(item.Manipulation);
        }

        private void ProceedConfig()
        {
            //1. Remove old manipulations.
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
                if (c.Mode == ManipulationCommandType.Code)
                {
                    var vm = new CommandViewModel(c);
                    Commands.Add(vm);
                }
            }
        }
    }
}

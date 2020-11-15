using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Threading;
using Epsiloner.OptionsModule;
using Epsiloner.Wpf.Collections;
using Epsiloner.Wpf.ViewModels;
using RemoteController.Configs;
using RemoteController.Manipulator;

namespace RemoteController.ViewModels.Pages
{
    public class CommandsPageViewModel : BasePageViewModel
    {
        private class Context
        {
            public CmdManipulation Manipulation { get; }
            public ManipulationCommand Config { get; }
            public CommandViewModel ViewModel { get; }

            public Context(ManipulationCommand config)
            {
                Config = config;
                Manipulation = new CmdManipulation(config.Name, config.Data, config.AllowArgument, config.ShowCmdWindow, config.WaitForExecution);
                ViewModel = new CommandViewModel();
            }
        }
        private readonly List<Context> _contexts = new List<Context>();

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
                Dispatcher =  dispatcher ?? throw new ArgumentNullException(nameof(dispatcher))
            };

            ProceedConfig();
        }

        private void ProceedConfig()
        {
            //1. Remove old manipulations.
            foreach (var item in _contexts)
                Manager.Remove(item.Manipulation);

            _contexts.Clear(); 

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
                    var context = new Context(c);
                    Manager.Add(context.Manipulation);
                    _contexts.Add(context);
                }
            }
        }
    }

    public class CommandViewModel: ViewModel {}
}

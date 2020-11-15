using Epsiloner.Wpf.ViewModels;
using RemoteController.Configs;
using RemoteController.Manipulator;

namespace RemoteController.ViewModels.Pages
{
    public class CommandViewModel : ViewModel
    {
        public CmdManipulation Manipulation { get; }
        public ManipulationCommand Config { get; }

        public CommandViewModel(ManipulationCommand config)
        {
            Config = config;
            Manipulation = new CmdManipulation(config.Name, config.Data, config.AllowArgument, config.ShowCmdWindow, config.WaitForExecution);
        }
    }
}
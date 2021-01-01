using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.CommandWpf;
using RemoteController.Configs;
using RemoteController.Manipulator;

namespace RemoteController.ViewModels
{
    public class CommandViewModel : ViewModel
    {
        private bool _isWorking;
        public CmdManipulation Manipulation { get; private set; }
        public ManipulationCommand Config { get; }
        public RelayCommand<CommandViewModel> EditCommand { get; }
        public RelayCommand<CommandViewModel> DeleteCommand { get; }

        public CommandViewModel(
            ManipulationCommand config,
            RelayCommand<CommandViewModel> editCommand,
            RelayCommand<CommandViewModel> deleteCommand
            )
        {
            Config = config;
            Manipulation = Config.ToManipulation();
            EditCommand = editCommand;
            DeleteCommand = deleteCommand;
        }

        public bool IsWorking
        {
            get => _isWorking;
            set => Set(ref _isWorking, value);
        }

        public void Update(IManipulatorsManager manager)
        {
            manager.Remove(Manipulation);
            Manipulation = Config.ToManipulation();
            manager.Add(Manipulation);
            RaisePropertyChanged(nameof(Config));
        }
    }
}
using System;
using System.Windows.Input;
using CommunityToolkit.Mvvm.Input;
using Epsiloner.Wpf.ViewModels;
using RemoteController.Configs;
using RemoteController.Manipulator;

namespace RemoteController.ViewModels;

public class CommandViewModel : ViewModel
{
    private readonly Action<CommandViewModel> _editAction;
    private readonly Action<CommandViewModel> _deleteAction;

    private bool _isWorking;
    public CmdManipulation Manipulation { get; private set; }
    public ManipulationCommand Config { get; }
    public ICommand EditCommand { get; }
    public ICommand DeleteCommand { get; }

    public bool IsWorking
    {
        get => _isWorking;
        set => Set(ref _isWorking, value);
    }

    public CommandViewModel(
        ManipulationCommand config,
        Action<CommandViewModel> editAction,
        Action<CommandViewModel> deleteAction
    )
    {
        _editAction = editAction;
        _deleteAction = deleteAction;
        Config = config;
        Manipulation = Config.ToManipulation();
        EditCommand = new RelayCommand(Edit);
        DeleteCommand = new RelayCommand(Delete);
    }

    private void Edit()
    {
        _editAction(this);
    }

    private void Delete()
    {
        _deleteAction(this);
    }

    public void Update(IManipulatorsManager manager)
    {
        manager.Remove(Manipulation);
        Manipulation = Config.ToManipulation();
        manager.Add(Manipulation);
        RaisePropertyChanged(nameof(Config));
    }
}
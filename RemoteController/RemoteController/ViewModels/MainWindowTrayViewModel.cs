using System.Windows;
using System.Windows.Input;
using CommunityToolkit.Mvvm.Input;
using Epsiloner.Wpf.ViewModels;

namespace RemoteController.ViewModels;

public class MainWindowTrayViewModel : ViewModel
{
    public MainWindow Window { get; }

    public ICommand DoubleClickCommand { get; }
    public ICommand ApplicationNameCommand { get; }
    public ICommand ExitCommand { get; }

    public MainWindowTrayViewModel(MainWindow window)
    {
        Window = window;

        DoubleClickCommand = new RelayCommand(FocusApp);
        ApplicationNameCommand = new RelayCommand(FocusApp);
        ExitCommand = new RelayCommand(Application.Current.Shutdown);
    }

    void FocusApp()
    {
        SystemCommands.RestoreWindow(Window);
        Window.Activate();
    }
}
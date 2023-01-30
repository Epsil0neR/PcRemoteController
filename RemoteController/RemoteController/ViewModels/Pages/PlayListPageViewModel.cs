using System.Windows.Threading;
using Epsiloner.OptionsModule;
using RemoteController.Configs;

namespace RemoteController.ViewModels.Pages;

public class PlayListPageViewModel : BasePageViewModel
{
    public Dispatcher Dispatcher { get; }
    
    public Options Options { get; }

    public PlayListsConfig Config { get; }

    public PlayListPageViewModel(
        Dispatcher dispatcher,
        Options options, 
        PlayListsConfig config) 
        : base(PageName.PlayList)
    {
        Dispatcher = dispatcher;
        Options = options;
        Config = config;
    }
}

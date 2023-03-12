using System.Collections.Generic;
using System.Linq;
using RemoteController.ViewModels.Pages;

namespace RemoteController.ViewModels;

public class WindowViewModel : ViewModel
{
    public IPageViewModel FirstPage { get; }

    public IReadOnlyList<IPageViewModel> NavigationItems { get; }

    public WindowViewModel()
    {
        NavigationItems = new List<IPageViewModel>
        {
            new GeneralViewModel(),
            new FoldersViewModel(),
            new CommandsViewModel(),
            new SoundDevicesViewModel(),
            new HotkeysViewModel(),
        };
        FirstPage = NavigationItems
            .OfType<GeneralViewModel>()
            .First();
    }
}
using Epsiloner.Wpf.ViewModels;

namespace RemoteController.ViewModels
{
    public interface IPageViewModel : IViewModel
    {
        /// <summary>
        /// Page name displayed in UI
        /// </summary>
        string Name { get; }

        /// <summary>
        /// Indicates if page is currently selected.
        /// </summary>
        bool IsSelected { get; set; }
    }
}
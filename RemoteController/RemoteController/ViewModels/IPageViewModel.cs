using Epsiloner.Wpf.ViewModels;

namespace RemoteController.ViewModels
{
    public interface IPageViewModel : IViewModel
    {
        /// <summary>
        /// Used to order pages by this property. Pages are sorted ascending.
        /// </summary>
        public PagePriority Priority { get; }

        /// <summary>
        /// Page name displayed in UI
        /// </summary>
        string Name { get; }

        /// <summary>
        /// Indicates if page is currently selected.
        /// </summary>
        bool IsSelected { get; set; }
    }

    public enum PagePriority:uint
    {
        Overview = 1,
        Paths = 5, //TODO: Move after overview.
        
        
        Test = 100, // TODO: When there will be enough pages -> remove this page.
    }
}
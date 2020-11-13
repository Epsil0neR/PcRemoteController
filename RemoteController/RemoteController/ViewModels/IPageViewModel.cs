using System.ComponentModel;
using Epsiloner.Wpf.ViewModels;

namespace RemoteController.ViewModels
{
    public interface IPageViewModel : IViewModel
    {
        /// <summary>
        /// Used to order pages by this property and display this as name for page. Pages are sorted ascending.
        /// </summary>
        public PageName Name { get; }

        /// <summary>
        /// Indicates if page is currently selected.
        /// </summary>
        bool IsSelected { get; set; }
    }

    public enum PageName:uint
    {
        Overview = 1,

        Paths = 5,

        // TODO: When there will be enough pages -> remove this test page.
        [Description("Random text")]
        Test = 100, 
    }
}
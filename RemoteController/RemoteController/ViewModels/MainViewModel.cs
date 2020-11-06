using System;
using System.Linq;
using System.Windows.Input;
using Epsiloner.Wpf.ViewModels;
using GalaSoft.MvvmLight.CommandWpf;

namespace RemoteController.ViewModels
{
    public class MainViewModel : ViewModel
    {
        private IPageViewModel _selected;

        /// <summary>
        /// All registered pages.
        /// </summary>
        public IPageViewModel[] Pages { get; }

        /// <summary>
        /// Currently selected page.
        /// </summary>
        public IPageViewModel Selected
        {
            get => _selected;
            set => Set(ref _selected, value);
        }

        /// <summary>
        /// Command to select <see cref="IPageViewModel"/>.
        /// </summary>
        public ICommand SelectCommand { get; }

        public MainViewModel(IPageViewModel[] pages)
        {
            Pages = pages ?? throw new ArgumentNullException(nameof(pages));
            Selected = Pages.FirstOrDefault();

            SelectCommand = new RelayCommand<IPageViewModel>(Select);
        }

        private void Select(IPageViewModel page)
        {
            if (page != null)
                Selected = page;
        }
    }
}

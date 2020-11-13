using Epsiloner.Wpf.ViewModels;

namespace RemoteController.ViewModels
{
    public abstract class BasePageViewModel : ViewModel, IPageViewModel
    {
        private bool _isSelected;

        protected BasePageViewModel(PagePriority priority)
        {
            Priority = priority;
        }

        /// <inheritdoc />
        public PagePriority Priority { get; }

        /// <inheritdoc />
        public bool IsSelected
        {
            get => _isSelected;
            set => Set(ref _isSelected, value);
        }
    }
}
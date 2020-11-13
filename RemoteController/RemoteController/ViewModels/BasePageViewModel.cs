using Epsiloner.Wpf.ViewModels;

namespace RemoteController.ViewModels
{
    public abstract class BasePageViewModel : ViewModel, IPageViewModel
    {
        private bool _isSelected;

        protected BasePageViewModel(PagePriority priority, string name)
        {
            Priority = priority;
            Name = name;
        }

        /// <inheritdoc />
        public PagePriority Priority { get; }

        /// <inheritdoc />
        public string Name { get; }

        /// <inheritdoc />
        public bool IsSelected
        {
            get => _isSelected;
            set => Set(ref _isSelected, value);
        }
    }
}
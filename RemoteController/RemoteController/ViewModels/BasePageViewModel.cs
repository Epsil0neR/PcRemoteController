using Epsiloner.Wpf.ViewModels;

namespace RemoteController.ViewModels
{
    public abstract class BasePageViewModel : ViewModel, IPageViewModel
    {
        private bool _isSelected;

        protected BasePageViewModel(PageName name)
        {
            Name = name;
        }

        /// <inheritdoc />
        public PageName Name { get; }

        /// <inheritdoc />
        public bool IsSelected
        {
            get => _isSelected;
            set => Set(ref _isSelected, value);
        }

        public virtual void UnSelected()
        {
            IsSelected = false;
        }

        public virtual void Selected()
        {
            IsSelected = true;
        }
    }
}
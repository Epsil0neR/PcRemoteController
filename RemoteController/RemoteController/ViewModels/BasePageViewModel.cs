using Epsiloner.Wpf.Glyphs;
using Epsiloner.Wpf.ViewModels;

namespace RemoteController.ViewModels;

public abstract class BasePageViewModel : ViewModel, IPageViewModel
{
    private bool _isSelected;

    protected BasePageViewModel(PageName name, MaterialDesignIcon icon = MaterialDesignIcon.LabelImportant)
    {
        Name = name;
        Icon = icon;
    }

    /// <inheritdoc />
    public PageName Name { get; }

    /// <inheritdoc />
    public MaterialDesignIcon Icon { get; }

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
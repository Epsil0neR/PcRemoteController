namespace RemoteController.WinUi.ViewModels;

public abstract class ActivatableVieModel : ObservableObject
{
    private bool _isActive;

    /// <summary>
    /// Current state.
    /// </summary>
    public bool IsActive => _isActive;

    public void Activate()
    {
        if (_isActive)
            return;

        _isActive = true;
        OnActivated();
    }

    public void Deactivate()
    {
        if (!_isActive)
            return;

        _isActive = false;
        OnDeactivated();
    }

    protected abstract void OnActivated();

    protected abstract void OnDeactivated();
}
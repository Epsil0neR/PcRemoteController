using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Navigation;
using RemoteController.ViewModels.Pages;

namespace RemoteController.Pages;

public abstract class BasePage<T> : Page where T: IPageViewModel
{
    public static DependencyProperty ViewModelProperty =
        DependencyProperty.Register(
            nameof(ViewModel),
            typeof(T),
            typeof(BasePage<T>),
            new(null, PropertyChangedCallback));

    private static void PropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        ((BasePage<T>)d).ViewModelChanged((T)e.NewValue);
    }

    public T? ViewModel
    {
        get => (T)GetValue(ViewModelProperty);
        set => SetValue(ViewModelProperty, value);
    }

    protected virtual void ViewModelChanged(T viewModel) { }

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
        DataContext = ViewModel = e.Parameter is T model ? model : default;
        base.OnNavigatedTo(e);
    }

    protected override void OnNavigatedFrom(NavigationEventArgs e)
    {
        DataContext = ViewModel = default;
        base.OnNavigatedFrom(e);
    }
}
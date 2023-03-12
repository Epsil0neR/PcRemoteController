using Microsoft.UI.Xaml.Controls;

namespace RemoteController.ViewModels.Pages;

public interface IPageViewModel : IViewModel
{
    Symbol Symbol { get; }
    string Title { get; }
}
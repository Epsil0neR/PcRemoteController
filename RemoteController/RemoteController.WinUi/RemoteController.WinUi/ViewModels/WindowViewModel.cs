using System;
using System.Collections.Generic;
using Microsoft.UI.Xaml.Controls;

namespace RemoteController.ViewModels;

public class NavigationItemViewModel
{
    public Symbol Symbol { get; init; }
    public string Title { get; init; }
    public Type Type { get; init; }
}

public class WindowViewModel : ViewModel
{
    public IEnumerable<NavigationItemViewModel> NavigationItems { get; }

    public WindowViewModel()
    {
        NavigationItems = new List<NavigationItemViewModel>()
        {
            new()
            {
                Symbol = Symbol.Play,
                Title = "Item1",
                Type = typeof(WindowViewModel)
            },
            new()
            {
                Symbol = Symbol.Save,
                Title = "Item2"
            },
            new()
            {
                Symbol = Symbol.Refresh,
                Title = "Item3"
            },
        };
    }
}
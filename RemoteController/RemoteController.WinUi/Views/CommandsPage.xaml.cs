﻿using Microsoft.UI.Xaml.Controls;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

[ViewFor<CommandsViewModel>]
public sealed partial class CommandsPage : Page
{
    public CommandsViewModel ViewModel
    {
        get;
    }

    public CommandsPage()
    {
        ViewModel = App.GetService<CommandsViewModel>();
        InitializeComponent();
    }
}
﻿using Microsoft.UI.Xaml.Controls;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels;

namespace RemoteController.WinUi.Views;

[ViewFor<FoldersViewModel>]
public sealed partial class FoldersPage : Page
{
    public FoldersViewModel ViewModel
    {
        get;
    }

    public FoldersPage()
    {
        ViewModel = App.GetService<FoldersViewModel>();
        InitializeComponent();
    }
}
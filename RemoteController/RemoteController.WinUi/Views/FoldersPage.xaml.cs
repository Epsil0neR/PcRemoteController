using System.ComponentModel;
using RemoteController.Manipulator.Contexts;
using RemoteController.WinUi.Attributes;
using Windows.Storage.Pickers;
using RemoteController.WinUi.ViewModels.Pages;
using WinRT.Interop;

namespace RemoteController.WinUi.Views;

[ViewFor<FoldersViewModel>(1)]
[PageSymbol(Symbol.Copy)]
[Description("Folders")]
public sealed partial class FoldersPage
{
    private readonly FolderPicker _folderPicker;

    public FoldersViewModel ViewModel { get; } = App.GetService<FoldersViewModel>();

    public FoldersPage()
    {
        InitializeComponent();

        _folderPicker = new()
        {
            SuggestedStartLocation = PickerLocationId.ComputerFolder,
            FileTypeFilter = { "*" }
        };
        var hWnd = WindowNative.GetWindowHandle(App.MainWindow);
        InitializeWithWindow.Initialize(_folderPicker, hWnd);
    }

    private async void FileSystemPath_OnClickEditPath(object sender, RoutedEventArgs e)
    {
        var btn = (Button)sender;
        if (btn.CommandParameter is not FileSystemPath item)
            return;

        var folder = await _folderPicker.PickSingleFolderAsync();
        if (folder is null) // User closed dialog without selecting folder.
            return;

        var changed = await ViewModel.ChangePath(item, folder.Path);
        if (!changed)
        {
            var dlg = new ContentDialog()
            {
                Title = "Error",
                Content = "Selected folder already in use by another item.",
                CloseButtonText = "Ok"
            };
            await dlg.ShowAsync();
        }
    }

    private async void FileSystemPath_OnClickCreate(object sender, RoutedEventArgs e)
    {
        CreateName.Text = string.Empty;
        ValidateCreateForm();
        await CreateDialog.ShowAsync();
    }

    private async void CreateDialog_OnPrimaryButtonClick(ContentDialog sender, ContentDialogButtonClickEventArgs args)
    {
        var name = CreateName.Text;
        var path = CreatePath.Text;
        ViewModel.Create(name, path);
    }

    private void CreateName_OnTextChanged(object sender, TextChangedEventArgs e)
    {
        ValidateCreateForm();
    }

    private void ValidateCreateForm()
    {
        var name = CreateName.Text;
        CreateNameValidation.Visibility = string.IsNullOrWhiteSpace(name) || ViewModel.IsNameTaken(name)
            ? Visibility.Visible
            : Visibility.Collapsed;

        var path = CreatePath.Text;
        CreatePathValidation.Visibility = !string.IsNullOrEmpty(path) && ViewModel.IsPathTaken(path)
            ? Visibility.Visible
            : Visibility.Collapsed;

        CreateDialog.IsPrimaryButtonEnabled = CreateNameValidation.Visibility == Visibility.Collapsed &&
                                              CreatePathValidation.Visibility == Visibility.Collapsed &&
                                              !string.IsNullOrEmpty(path);
    }

    private async void CreateForm_OnPathClick(object sender, RoutedEventArgs e)
    {
        var folder = await _folderPicker.PickSingleFolderAsync();
        if (folder is null) // User closed dialog without selecting folder.
        {
            return;
        }

        CreatePath.Text = folder.Path;
        ValidateCreateForm();
    }
}
using System.ComponentModel;
using RemoteController.Manipulator.Contexts;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels;
using Windows.Storage.Pickers;
using WinRT.Interop;

namespace RemoteController.WinUi.Views;

[ViewFor<FoldersViewModel>(1)]
[PageSymbol(Symbol.Copy)]
[Description("Folders")]
public sealed partial class FoldersPage
{
    private readonly FolderPicker _folderPicker;

    public FoldersViewModel ViewModel { get; }

    public FoldersPage()
    {
        ViewModel = App.GetService<FoldersViewModel>();
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
}
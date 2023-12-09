using RemoteController.Manipulator.Contexts;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.ViewModels;

public partial class FoldersViewModel : ObservableRecipient
{
    public FoldersViewModel(
        IWritableOptions<FileSystemOptions> fileSystemOptions
        )
    {
        FileSystemOptions = fileSystemOptions;
    }
    public IWritableOptions<FileSystemOptions> FileSystemOptions { get; }

    public FileSystemPaths Paths => FileSystemOptions.Value.Roots;

    [RelayCommand]
    void GoToCreate()
    {

    }

    [RelayCommand]
    void EditPath(FileSystemPath path){}

    [RelayCommand(CanExecute = nameof(CanDeletePath))]
    void DeletePath(FileSystemPath path)
    {
        FileSystemOptions.Update(options => options.Roots.Remove(path));
        OnPropertyChanged(nameof(Paths));
    }

    bool CanDeletePath(FileSystemPath path) => FileSystemOptions.Value.Roots.Contains(path);
}

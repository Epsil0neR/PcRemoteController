using RemoteController.Manipulator.Contexts;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.ViewModels;

public partial class FoldersViewModel : ObservableRecipient
{
    [ObservableProperty]
    private IReadOnlyList<FileSystemPath> _paths;

    public IWritableOptions<FileSystemOptions> FileSystemOptions { get; }

    public FoldersViewModel(
        IWritableOptions<FileSystemOptions> fileSystemOptions
        )
    {
        FileSystemOptions = fileSystemOptions;
        UpdatePaths();
    }

    private void UpdatePaths()
    {
        Paths = FileSystemOptions.Value.Roots.ToList();
    }

    [RelayCommand]
    void GoToCreate()
    {
        throw new NotImplementedException();
    }

    public async Task<bool> ChangePath(FileSystemPath item, string path)
    {
        if (Paths.Any(x => string.Equals(path, x.Path, StringComparison.InvariantCultureIgnoreCase)))
            return false;
        
        FileSystemOptions.Update(options =>
        {
            item.Path = path;
        });
        UpdatePaths();

        return true;
    }

    [RelayCommand(CanExecute = nameof(CanDeletePath))]
    void DeletePath(FileSystemPath path)
    {
        FileSystemOptions.Update(options => options.Roots.Remove(path));
        UpdatePaths();
    }

    bool CanDeletePath(FileSystemPath path) => FileSystemOptions.Value.Roots.Contains(path);
}

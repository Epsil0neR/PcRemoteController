using RemoteController.Manipulator.Contexts;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Models;

namespace RemoteController.WinUi.ViewModels.Pages;

public partial class FoldersViewModel : ObservableObject
{
    [ObservableProperty]
    private IReadOnlyList<FileSystemPath> _paths = null!;

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

    public async Task<bool> ChangePath(FileSystemPath item, string path)
    {
        if (Enumerable.Any<FileSystemPath>(Paths, x => string.Equals(path, x.Path, StringComparison.InvariantCultureIgnoreCase)))
            return false;

        FileSystemOptions.Update(options =>
        {
            item.Path = path;
        });
        UpdatePaths();

        return true;
    }

    [RelayCommand]
    void DeletePath(string name)
    {
        FileSystemOptions.Update(options => options.Roots.RemoveAll(x=>string.Equals(x.Name, name, StringComparison.InvariantCultureIgnoreCase)));
        UpdatePaths();
    }

    public bool IsNameTaken(string name)
    {
        return Enumerable.Any<FileSystemPath>(Paths, x => string.Equals(x.Name, name, StringComparison.InvariantCultureIgnoreCase));
    }

    public bool IsPathTaken(string path)
    {
        return Enumerable.Any<FileSystemPath>(Paths, x => string.Equals(x.Path, path, StringComparison.InvariantCultureIgnoreCase));
    }

    public void Create(string name, string path)
    {
        FileSystemOptions.Update(options => options.Roots.Add(new()
        {
            Name = name, 
            Path = path
        }));
        UpdatePaths();
    }
}

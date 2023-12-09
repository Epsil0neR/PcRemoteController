using RemoteController.ViewModels;
using System.Drawing;
using System.IO;
using System.Windows;
using System.Windows.Media.Imaging;

namespace RemoteController;

public partial class MainWindow
{
    public MainWindow()
    {
        InitializeComponent();

        using var stream = App.GetIconStream();
        InitializeIcon(stream);
        InitializeTrayIcon(stream);

        WindowStateProperty.AddOwner(typeof(MainWindow),
            new FrameworkPropertyMetadata(WindowStatePropertyChangedCallback));
    }

    private void InitializeIcon(Stream stream)
    {
        Icon = ConvertToImage(stream);
    }

    private void InitializeTrayIcon(Stream stream)
    {
        tray.Icon = ConvertToIcon(stream);
        tray.DataContext = new MainWindowTrayViewModel(this);
    }

    private void WindowStatePropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
    {
        if (e.NewValue is WindowState n)
            ShowInTaskbar = n != WindowState.Minimized;
    }

    private static BitmapImage ConvertToImage(Stream stream)
    {
        var p = stream.Position;
        var b = new BitmapImage();
        b.BeginInit();
        b.StreamSource = stream;
        b.CacheOption = BitmapCacheOption.OnLoad;
        b.EndInit();
        stream.Position = p;
        return b;
    }

    private static Icon ConvertToIcon(Stream stream)
    {
        var p = stream.Position;
        var icon = new Icon(stream);
        stream.Position = p;
        return icon;
    }
}
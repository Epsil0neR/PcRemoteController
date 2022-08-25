using System.Windows;
using System.Windows.Shell;

namespace RemoteController.Resources.Styles;

public partial class StyledWindow
{
    private void HeaderBackground_OnSizeChanged(object sender, SizeChangedEventArgs e)
    {
        if (!(sender is System.Windows.Shapes.Rectangle rectangle)) 
            return;

        //1. Find window
        var window = Window.GetWindow(rectangle);

        if (window == null)
            return;

        var chrome = WindowChrome.GetWindowChrome(window);
        if (chrome != null)
            chrome.CaptionHeight = rectangle.ActualHeight;
    }
}
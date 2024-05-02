using System.ComponentModel;
using RemoteController.WinUi.Attributes;
using RemoteController.WinUi.ViewModels.Pages;
using Windows.System;
using Windows.UI.Core;

namespace RemoteController.WinUi.Views;

[ViewFor<HotkeysViewModel>(4)]
[PageSymbol(Symbol.Keyboard)]
[Description("Hotkeys")]
public sealed partial class HotkeysPage
{
    public HotkeysViewModel ViewModel { get; } = App.GetService<HotkeysViewModel>();

    public HotkeysPage()
    {
        RunTest();
        InitializeComponent();
        var isShiftPressed = Microsoft.UI.Input.InputKeyboardSource.GetKeyStateForCurrentThread(VirtualKey.Shift) == CoreVirtualKeyStates.Down;
    }

    private void RunTest()
    {
        var resources = new string[]
        {
            "AccentButtonBackgroundDisabled",
            "AccentButtonForegroundDisabled",
            "AccentButtonBorderBrushDisabled",
            "InfoBarErrorSeverityBackgroundBrush",
            "InfoBarErrorSeverityIconBackground",
            "InfoBarErrorSeverityIconBackground",
            "AccentButtonBackground",
            "AccentButtonForeground",
            "AccentButtonBorderBrush",
            "ButtonBorderThemeThickness",
            "ButtonBackground",
            "ButtonForeground",
            "ButtonBorderBrush",
            "SymbolThemeFontFamily",
            "ButtonBackground",
            "ButtonForeground",
            "ButtonBorderBrush",
            "SymbolThemeFontFamily",
        }
            .Distinct()
            .ToArray();
        var result = resources.ToDictionary(
            x => x,
            Test);
    }

    private bool Test(string resourceKey)
    {
        try
        {
            var resource = App.Current.Resources[resourceKey];
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
}

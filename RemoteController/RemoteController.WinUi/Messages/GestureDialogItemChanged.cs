using RemoteController.WinUi.Controls;

namespace RemoteController.WinUi.Messages;

public class GestureDialogItemChanged()
{
    public required HotkeyItemControl ItemControl { get; init; }
}
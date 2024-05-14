namespace RemoteController.WinUi.Attributes;

public abstract class BaseViewForAttribute(Type type, int order) : Attribute
{
    public Type Type { get; } = type;

    /// <summary>
    /// Menu item in left pane order starting from 0.
    /// </summary>
    public int Order { get; } = order;
}
namespace RemoteController.WinUi.Attributes;

public abstract class BaseViewForAttribute : Attribute
{
    protected BaseViewForAttribute(Type type, int order)
    {
        Type = type;
        Order = order;
    }

    public Type Type
    {
        get;
    }

    public int Order
    {
        get;
    }
}
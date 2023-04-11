namespace RemoteController.WinUi.Attributes;

public abstract class BaseViewForAttribute : Attribute
{
    protected BaseViewForAttribute(Type type)
    {
        Type = type;
    }

    public Type Type
    {
        get;
    }
}
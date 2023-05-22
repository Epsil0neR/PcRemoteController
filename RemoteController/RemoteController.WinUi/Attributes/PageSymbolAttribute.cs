namespace RemoteController.WinUi.Attributes;

[AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
public class PageSymbolAttribute : Attribute
{
    public PageSymbolAttribute(Symbol symbol)
    {
        Symbol = symbol;
    }

    public Symbol Symbol
    {
        get;
    }
}
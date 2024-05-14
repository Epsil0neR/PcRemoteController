namespace RemoteController.WinUi.Attributes;

[AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
public class PageSymbolAttribute(Symbol symbol) : Attribute
{
    public Symbol Symbol { get; } = symbol;
}
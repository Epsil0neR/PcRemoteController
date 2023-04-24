namespace RemoteController.WinUi.Attributes;

/// <summary>
/// Attribute to map ViewModel and View.
/// </summary>
/// <typeparam name="T"></typeparam>
[AttributeUsage(AttributeTargets.Class, AllowMultiple = true, Inherited = false)]
public class ViewForAttribute<T> : BaseViewForAttribute
{
    public ViewForAttribute(int order = int.MaxValue)
        : base(typeof(T), order)
    {
    }
}
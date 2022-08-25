using System;
using System.Windows;
using System.Windows.Markup;

namespace RemoteController.IoCs;

/// <summary>
/// Implements a markup extension that provides object resolvable from IoC by specifying object type.
/// </summary>
[MarkupExtensionReturnType(typeof(object))]
[Localizability(LocalizationCategory.NeverLocalize)]
public class IoCExtension : MarkupExtension
{
    private object _value;

    /// <summary>
    /// Type of object to resolve.
    /// </summary>
    [ConstructorArgument("type")]
    public Type Type { get; set; }

    public bool ResolveEachTime { get; set; }

    public IoCExtension() { }
    public IoCExtension(Type type)
    {
        Type = type;
    }

    /// <inheritdoc />
    public override object ProvideValue(IServiceProvider serviceProvider)
    {
        if (Type == null)
            return null;

        if (_value != null && !ResolveEachTime)
            return _value;

        _value = IoC.Resolve(Type);
        return _value;
    }
}
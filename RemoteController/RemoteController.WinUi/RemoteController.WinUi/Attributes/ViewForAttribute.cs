using System;
using System.Collections.Generic;
using System.Reflection;
using Epsiloner.Helpers;
using RemoteController.ViewModels;

namespace RemoteController.Attributes;

public abstract class ViewForAttribute : Attribute
{
    public abstract Type Type { get; }

    #region Fields
    /// <summary>
    /// Shortcut for this type.
    /// </summary>
    private static readonly Type _type = typeof(ViewForAttribute);
    private static readonly List<Assembly> _proceededAssemblies = new List<Assembly>();

    /// <summary>
    /// Key - type for which Value is best matching view.
    /// </summary>
    private static readonly Dictionary<Type, Type> _bestMatchingTypes = new Dictionary<Type, Type>();
    #endregion

    /// <summary>
    /// Registers best matching view type for model type.
    /// </summary>
    /// <param name="modelType">Model type</param>
    /// <param name="viewType">View type</param>
    private static void RegisterType(Type modelType, Type viewType)
    {
        _bestMatchingTypes[modelType] = viewType;
    }

    /// <summary>
    /// Proceeds assembly and registers best matching types to views.
    /// </summary>
    /// <param name="assembly">Assembly to proceed. Same assembly will be proceeded only once.</param>
    public static void ProceedAssembly(Assembly assembly)
    {
        if (assembly == null)
            throw new ArgumentNullException(nameof(assembly));

        // Check if assembly was already proceeded.
        if (_proceededAssemblies.Contains(assembly))
            return;

        _proceededAssemblies.Add(assembly);

        // Get all types defined in assembly
        var types = assembly.GetTypes();
        foreach (Type type in types)
        {
            // Try get attribute for each type
            var attributes = GetCustomAttributes(type, _type, true);

            foreach (var attribute in attributes)
            {
                var attr = (ViewForAttribute)attribute;
                // If attribute found, then register suitable type and what type to use.
                RegisterType(attr.Type, type);
            }
        }
    }

    /// <summary>
    /// Proceeds current assembly and dependent assemblies.
    /// </summary>
    public static void ProceedRelatedAssemblies()
    {
        ProceedAssembly(_type.Assembly);
        foreach (var assembly in _type.Assembly.GetDependentAssemblies())
        {
            ProceedAssembly(assembly);
        }
    }

    /// <summary>
    /// Gets best matching registered view for specified model type.
    /// </summary>
    /// <param name="modelType">Type of model.</param>
    /// <returns></returns>
    public static Type GetBestMatchingViewType(Type modelType)
    {
        if (modelType == null)
            throw new ArgumentNullException(nameof(modelType));

        // 1. Try find already registered type
        if (_bestMatchingTypes.ContainsKey(modelType))
            return _bestMatchingTypes[modelType];

        // 2. Try to find best matching implemented interface type            
        var interfaces = modelType.GetDirectlyImplementedInterfaces();
        foreach (Type type in interfaces)
        {
            if (_bestMatchingTypes.TryGetValue(type, out var rv))
            {
                RegisterType(type, rv);
                return rv;
            }
        }

        // 3. Otherwise find to find for base model type.
        var baseType = modelType.BaseType;
        if (baseType != null)
        {
            var rv = GetBestMatchingViewType(baseType);
            if (rv != null)
            {
                RegisterType(modelType, rv);
                return rv;
            }
        }

        return null;
    }

    /// <summary>
    /// Gets best matching registered view for specified model object.
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    public static Type GetBestMatchingViewType(object model)
    {
        if (model == null)
            throw new ArgumentNullException(nameof(model));

        var type = model as Type;
        return GetBestMatchingViewType(type ?? model.GetType());
    }
}

/// <summary>
/// Marks class to become view for specified type and all nested types if type is class and all implementing types if type is interface.
/// </summary>
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Interface, AllowMultiple = true)]
public class ViewForAttribute<T> : ViewForAttribute
{
    public override Type Type => typeof(T);
}
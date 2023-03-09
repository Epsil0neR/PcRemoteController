using System.Collections.Generic;
using System;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;

namespace RemoteController.ViewModels;

public interface IViewModel : INotifyPropertyChanged
{
}


/// <summary>
/// Provides <see cref="ViewModel"/> behavior to any type that cannot inherit from <see cref="ViewModel"/>.
/// </summary>
public class ViewModelUtil
{
    #region "Static"
    private static readonly Dictionary<Type, Dictionary<string, IEnumerable<string>>> Dependencies = new Dictionary<Type, Dictionary<string, IEnumerable<string>>>();

    private static void ProcessType(Type type)
    {
        lock (Dependencies)
        {
            if (Dependencies.ContainsKey(type))
                return;

            var t = typeof(DependsOnAttribute);
            var props = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            var dict = new Dictionary<string, List<string>>();

            foreach (var prop in props)
            {
                var attributes = prop.GetCustomAttributes(t, true);
                foreach (var attribute in attributes)
                {
                    var attr = (DependsOnAttribute)attribute;
                    if (attr.Name == null)
                        continue;

                    var name = attr.Name;
                    var list = dict.ContainsKey(name) ? dict[name] : (dict[name] = new List<string>());
                    list.Add(prop.Name);
                }
            }

            var result = dict.ToDictionary(x => x.Key, x => x.Value.Distinct().ToList() as IEnumerable<string>);
            Dependencies[type] = result.Any() ? result : null;
        }
    }
    #endregion

    private readonly Type _ownerType;
    private readonly Action<string> _propertyChangedInvoker;

    /// <summary>
    /// Creates instances of util.
    /// </summary>
    /// <param name="ownerType">Type where util is used. In this type dependencies will be looked up.</param>
    /// <param name="propertyChangedInvoker">Actions that raises <see cref="INotifyPropertyChanged.PropertyChanged"/> event.</param>
    public ViewModelUtil(Type ownerType, Action<string> propertyChangedInvoker)
    {
        _ownerType = ownerType ?? throw new ArgumentNullException(nameof(ownerType));
        _propertyChangedInvoker = propertyChangedInvoker ?? throw new ArgumentNullException(nameof(propertyChangedInvoker));

        ProcessType(_ownerType);
    }

    /// <summary>
    /// Sets new value for backing field and raises <see cref="INotifyPropertyChanged.PropertyChanged"/> event for <paramref name="propertyName"/> and all depending properties.
    /// Depending properties can be specified in param <paramref name="dependingPropertyNames"/> or via attribute <see cref="DependsOnAttribute"/> in same class.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="backingField">Backing field</param>
    /// <param name="newValue">new value</param>
    /// <param name="propertyName">Property name</param>
    /// <param name="dependingPropertyNames">Depending properties</param>
    /// <returns></returns>
    public bool Set<T>(ref T backingField, T newValue, [CallerMemberName] string propertyName = null, params string[] dependingPropertyNames)
    {
        var valueChanged = !EqualityComparer<T>.Default.Equals(backingField, newValue);
        if (valueChanged)
        {
            backingField = newValue;
            RaisePropertyChanged(propertyName);

            if (dependingPropertyNames != null)
                foreach (var name in dependingPropertyNames)
                    RaisePropertyChanged(name);

            var t = _ownerType;
            Dictionary<string, IEnumerable<string>> dependencies;

            lock (Dependencies)
                dependencies = Dependencies.ContainsKey(t) ? Dependencies[t] : null;

            if (propertyName != null && dependencies?.ContainsKey(propertyName) == true)
            {
                var names = dependencies[propertyName];
                if (dependingPropertyNames != null)
                    names = names.Where(x => !dependingPropertyNames.Contains(x)).ToList();
                foreach (var name in names)
                    RaisePropertyChanged(name);
            }
        }
        return valueChanged;
    }

    private void RaisePropertyChanged(string propertyName)
    {
        _propertyChangedInvoker.Invoke(propertyName);
    }
}

/// <summary>
/// Base view model.
/// </summary>
public abstract class ViewModel : IViewModel
{
    /// <summary>
    /// Constructor
    /// </summary>
    protected ViewModel()
    {
        ViewModelUtil = new ViewModelUtil(this.GetType(), RaisePropertyChanged);
    }

    /// <summary>
    /// Util that actually contains whole logic for value set and notification of all related properties.
    /// </summary>
    protected ViewModelUtil ViewModelUtil { get; }

    /// <inheritdoc />
    public event PropertyChangedEventHandler PropertyChanged;

    /// <summary>
    /// Sets new value for backing field and raises <see cref="INotifyPropertyChanged.PropertyChanged"/> event for <paramref name="propertyName"/> and all depending properties.
    /// Depending properties can be specified in param <paramref name="dependingPropertyNames"/> or via attribute <see cref="DependsOnAttribute"/> in same class.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="backingField">Backing field</param>
    /// <param name="newValue">new value</param>
    /// <param name="propertyName">Property name</param>
    /// <param name="dependingPropertyNames">Depending properties</param>
    /// <returns></returns>
    protected bool Set<T>(ref T backingField, T newValue, [CallerMemberName] string propertyName = null, params string[] dependingPropertyNames)
    {
        return ViewModelUtil.Set(ref backingField, newValue, propertyName, dependingPropertyNames);
    }

    /// <summary>
    /// Raises <see cref="INotifyPropertyChanged.PropertyChanged"/> event for specified <paramref name="propertyName"/>.
    /// </summary>
    /// <param name="propertyName">Name of property which value has been changed.</param>
    protected void RaisePropertyChanged(string propertyName)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}
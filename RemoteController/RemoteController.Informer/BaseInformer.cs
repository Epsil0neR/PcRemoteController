using System;
using System.Collections.Generic;
using System.Linq;

namespace RemoteController.Informer;

public abstract class BaseInformer : IDisposable
{
    /// <summary>
    /// Unique name for each informer
    /// </summary>
    public abstract string Name { get; }

    /// <summary>
    /// Raise when some data in informer has been changed.
    /// </summary>
    public event EventHandler Changed;

    /// <summary>
    /// Raises <see cref="Changed"/> event.
    /// </summary>
    protected void RaiseChanged()
    {
        Changed?.Invoke(this, EventArgs.Empty);
    }

    /// <summary>
    /// Checks for changes in system.
    /// NOTE: Not all OS components notifies about changes.
    /// </summary>
    public abstract bool CheckForChanges();

    /// <summary>
    /// Start monitoring system for changes.
    /// </summary>
    public abstract void Start();

    /// <summary>
    /// Stops system monitoring.
    /// </summary>
    public abstract void Stop();

    /// <inheritdoc />
    public virtual void Dispose()
    {
        Stop();
    }

    /// <summary>
    /// Sets backfield to value and returns true if value changed, otherwise returns false.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="prop"></param>
    /// <param name="value"></param>
    /// <returns></returns>
    protected bool Set<T>(ref T prop, T value)
    {
        bool changed = !EqualityComparer<T>.Default.Equals(prop, value);
        if (changed)
        {
            prop = value;
        }
        return changed;
    }

    /// <summary>
    /// Sets list to values and returns true if lists differs by item counts or by values.
    /// If changed only order of items - returns false.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="prop"></param>
    /// <param name="values"></param>
    /// <returns></returns>
    protected bool SetList<T>(ref IList<T> prop, IEnumerable<T> values)
    {
        var v = values?.ToList();
        var changed = prop?.Count != v?.Count;
        var comparer = EqualityComparer<T>.Default;
        if (!changed && v != null && prop != null)
        {
            foreach (var itm in v)
            {
                if (prop.Contains(itm, comparer))
                    continue;

                changed = true;
                break;
            }
        }
        prop = v;
        return changed;
    }
}
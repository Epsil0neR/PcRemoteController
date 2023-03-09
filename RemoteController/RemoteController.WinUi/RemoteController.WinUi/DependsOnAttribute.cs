using System;

namespace RemoteController;

[AttributeUsage(AttributeTargets.Field | AttributeTargets.Property, AllowMultiple = true, Inherited = true)]
internal class DependsOnAttribute : Attribute
{
    public DependsOnAttribute(string name)
    {
        Name = name;
    }

    public string Name { get; }
}
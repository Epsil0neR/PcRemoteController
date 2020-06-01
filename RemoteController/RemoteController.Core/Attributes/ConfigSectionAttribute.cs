using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Epsiloner.Helpers;
using Microsoft.Extensions.Configuration;

namespace RemoteController.Attributes
{
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
    public class ConfigSectionAttribute : Attribute
    {
        public ConfigSectionAttribute(string name)
        {
            Name = name;
        }

        /// <summary>
        /// Section name.
        /// </summary>
        public string Name { get; }


        /// <summary>
        /// List of initialized configuration sections.
        /// </summary>
        private static readonly List<string> Initialized = new List<string>();

        /// <summary>
        /// Scans all assemblies and registers sections as instances in IoC.
        /// </summary>
        /// <param name="configuration"></param>
        public static void Init(IConfiguration configuration)
        {
            lock (Initialized) // to perform only 1 at a time.
            {
                var t = typeof(ConfigSectionAttribute);
                var assemblies = t.Assembly.GetDependentAssemblies();
                foreach (var type in assemblies.SelectMany(x => x.GetTypes()))
                {
                    var attrs = type.GetCustomAttributes<ConfigSectionAttribute>();
                    foreach (var attr in attrs)
                    {
                        if (Initialized.Contains(attr.Name))
                            continue; //TODO: Maybe better throw exception?

                        Initialized.Add(attr.Name);
                        var section = IoC.Resolve(type);
                        configuration.GetSection(attr.Name).Bind(section);
                        IoC.RegisterInstance(type, section);
                    }
                }
            }
        }
    }
}

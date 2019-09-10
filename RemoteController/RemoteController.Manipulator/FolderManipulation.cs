using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using RemoteController.Manipulator.Contexts;

namespace RemoteController.Manipulator
{
    public class FolderManipulation : IManipulation
    {
        public FolderManipulation(string name)
        {
            Name = name;
        }

        public string Name { get; }

        public object Execute(IManipulatorsManager manager, string param)
        {
            var c = manager.GetContext<FolderContexts>();
            var rv = new List<string>();
            if (c?.Roots?.Any() != true)
                return null;

            if (string.IsNullOrWhiteSpace(param))
            {

                if (c.Roots.Count == 1)
                {
                    rv.AddRange(GetFolderContent(c, c.Roots[0]));
                }
                else
                {
                    rv.AddRange(c.Roots);
                }

                return rv;
            }

            if (!c.Roots.Any(x => param.StartsWith(x, StringComparison.InvariantCultureIgnoreCase)))
                return null;


            rv.AddRange(GetFolderContent(c, param));

            return rv.Any() ? rv : null;
        }

        private IEnumerable<string> GetFolderContent(FolderContexts contexts, params string[] paths)
        {
            var rv = new List<string>();
            var path = Path.Combine(paths);
            var di = new DirectoryInfo(path);

            if (di.Exists)
            {
                rv.AddRange(di.GetDirectories().Select(x => x.FullName));
                rv.AddRange(di.GetFiles().Select(x => x.FullName));
            }

            return rv;
        }
    }
}
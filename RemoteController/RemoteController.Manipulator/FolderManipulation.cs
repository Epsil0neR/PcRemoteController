﻿using System;
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
            var rv = new Dictionary<string, IEnumerable<string>>();
            if (c?.Roots?.Any() != true)
                return null;

            if (string.IsNullOrWhiteSpace(param))
            {

                if (c.Roots.Count == 1)
                {
                    PopulateContent(rv, c, c.Roots.ElementAt(0).Key);
                }
                else
                {
                    rv["d"] = c.Roots.Keys;
                }

                return rv;
            }

            PopulateContent(rv, c, param);

            return rv.Any() ? rv : null;
        }

        private void PopulateContent(Dictionary<string, IEnumerable<string>> rv, FolderContexts contexts, params string[] paths)
        {
            var path = Path.Combine(paths);
            var root = GetRoot(path);
            var rootKey = contexts.Roots.Keys.FirstOrDefault(x => string.Equals(root, x, StringComparison.InvariantCultureIgnoreCase));

            if (!string.IsNullOrEmpty(rootKey) && contexts.Roots.TryGetValue(rootKey, out var rootOrig))
            {
                var di = new DirectoryInfo(rootOrig);
                if (di.Exists)
                {
                    var folders = di.GetDirectories()
                        .Select(x => x.FullName.Replace(rootOrig, rootKey))
                        .ToList();
                    if (folders.Any())
                        rv["d"] = folders;
                    var files = di.GetFiles()
                        .Select(x => x.FullName.Replace(rootOrig, rootKey))
                        .ToList();
                    if (files.Any())
                        rv["f"] = files.ToList();
                }
            }
        }

        private string GetRoot(string path)
        {
            var rv = path;
            while (!string.IsNullOrEmpty(rv))
            {
                var p = Path.GetDirectoryName(rv);
                if (string.IsNullOrEmpty(p))
                    return rv;

                rv = p;
            }

            return rv;
        }
    }
}
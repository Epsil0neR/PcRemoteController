using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using RemoteController.Manipulator.Contexts;

namespace RemoteController.Manipulator
{

    public enum FileSystemManipulationType
    {
        List,
        Exec
    }

    public class FileSystemManipulation : IManipulation
    {
        public FileSystemManipulation(string name, FileSystemManipulationType type)
        {
            Name = name;
            Type = type;
        }

        public string Name { get; }
        public FileSystemManipulationType Type { get; }

        public object Execute(IManipulatorsManager manager, string param)
        {
            switch (Type)
            {
                case FileSystemManipulationType.Exec:
                    return Exec(manager, param);
                case FileSystemManipulationType.List:
                    return List(manager, param);
                default:
                    return null;
            }
        }

        /// <summary>
        /// Executes file at specified path.
        /// </summary>
        /// <param name="manager"></param>
        /// <param name="path">Path to file with fake root.</param>
        /// <returns></returns>
        private bool Exec(IManipulatorsManager manager, string path)
        {
            var c = manager.GetContext<FileSystemContext>();
            var root = GetRoot(path);
            var rootKey = c.Roots.Keys.FirstOrDefault(x => string.Equals(root, x, StringComparison.InvariantCultureIgnoreCase));

            if (string.IsNullOrEmpty(rootKey) || !c.Roots.TryGetValue(rootKey, out var rootOrig))
                return false;

            var pathOrig = GetOriginalPath(path, root, rootOrig);

            if (!File.Exists(pathOrig))
                return false;

            // Check if file matches search pattern:
            var dir = Directory.GetParent(pathOrig);
            var files = dir.GetFiles(c.FileSearchPattern).Select(x => x.FullName.ToLowerInvariant());
            if (!files.Contains(pathOrig.ToLowerInvariant()))
                return false;

            // Check if folders filter allows that file containing folder.
            if (c.FolderFilter?.Invoke(Directory.GetParent(pathOrig)?.FullName) == false)
                return false;

            // Check if file filter allows that file.
            if (c.FileFilter?.Invoke(pathOrig) == false)
                return false;

            try
            {
                var p = new Process
                {
                    StartInfo = new ProcessStartInfo
                    {
                        UseShellExecute = true,
                        FileName = pathOrig
                    }
                };
                p.Start();
                return true;
            }
            catch
            {
                // ignored
            }

            return false;
        }

        /// <summary>
        /// Enumerates content of specified directory.
        /// </summary>
        /// <param name="manager"></param>
        /// <param name="param">Path to directory with fake root.</param>
        /// <returns></returns>
        private IReadOnlyDictionary<string, IEnumerable<string>> List(IManipulatorsManager manager, string param)
        {
            var c = manager.GetContext<FileSystemContext>();
            var rv = new Dictionary<string, IEnumerable<string>>();
            if (c?.Roots?.Any() != true)
                return null;

            if (string.IsNullOrWhiteSpace(param))
            {
                if (c.Roots.Count == 1)
                    PopulateContent(rv, c, c.Roots.ElementAt(0).Key);
                else
                    rv["folders"] = c.Roots.Keys;

                return rv;
            }

            PopulateContent(rv, c, param);

            return rv.Any() ? rv : null;
        }

        private void PopulateContent(Dictionary<string, IEnumerable<string>> rv, FileSystemContext contexts, params string[] paths)
        {
            var path = Path.Combine(paths);
            var root = GetRoot(path);
            var rootKey = contexts.Roots.Keys.FirstOrDefault(x => string.Equals(root, x, StringComparison.InvariantCultureIgnoreCase));

            if (string.IsNullOrEmpty(rootKey)
                || !contexts.Roots.TryGetValue(rootKey, out var rootOrig))
                return;

            var pathOrig = GetOriginalPath(path, root, rootOrig);
            var di = new DirectoryInfo(pathOrig);
            if (!di.Exists)
                return;

            var folders = di.GetDirectories()
                .FilterDirectories(contexts.FolderFilter)
                .Select(x => x.FullName.Replace(rootOrig, rootKey))
                .ToList();
            if (folders.Any())
                rv["folders"] = folders;

            var fp = string.IsNullOrWhiteSpace(contexts.FileSearchPattern) ? "*" : contexts.FileSearchPattern;
            var files = di.GetFiles(fp, SearchOption.TopDirectoryOnly)
                .FilterFiles(contexts.FileFilter)
                .Select(x => x.FullName.Replace(rootOrig, rootKey))
                .ToList();
            if (files.Any())
                rv["files"] = files.ToList();
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

        private string GetOriginalPath(string path, string rootFake, string rootOrig)
        {
            if (string.Equals(path, rootFake, StringComparison.InvariantCultureIgnoreCase))
                return rootOrig;

            var relative = path.Substring(rootFake.Length + 1);
            var rv = Path.Combine(rootOrig, relative);
            return rv;
        }

    }

    internal static class FileSystemManipulationHelpers
    {

        public static IEnumerable<DirectoryInfo> FilterDirectories(this DirectoryInfo[] directoryInfos, Func<string, bool> filter)
        {
            if (filter == null)
                return directoryInfos;

            return directoryInfos
                .Where(x => filter(x.FullName));
        }

        public static IEnumerable<FileInfo> FilterFiles(this FileInfo[] fileInfos, Func<string, bool> filter)
        {
            if (filter == null)
                return fileInfos;

            return fileInfos
                .Where(x => filter(x.FullName));
        }

    }
}
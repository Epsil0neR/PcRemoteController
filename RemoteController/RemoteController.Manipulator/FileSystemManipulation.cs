using RemoteController.Manipulator.Contexts;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace RemoteController.Manipulator
{
    /// <summary>
    /// Indicates in what mode <see cref="FileSystemManipulation"/> will work.
    /// </summary>
    public enum FileSystemManipulationMode
    {
        /// <summary>
        /// Lists directory content.
        /// </summary>
        List,

        /// <summary>
        /// Executes file.
        /// </summary>
        Exec
    }

    public class FileSystemManipulation : IManipulation
    {
        public static IManipulation[] GetManipulations()
        {
            return new IManipulation[]
            {
                new FileSystemManipulation("FileSystem.List", FileSystemManipulationMode.List),
                new FileSystemManipulation("FileSystem.Exec", FileSystemManipulationMode.Exec)
            };
        }

        public FileSystemManipulation(string name, FileSystemManipulationMode mode)
        {
            Name = name;
            Mode = mode;
        }

        public string Name { get; }
        public FileSystemManipulationMode Mode { get; }

        public object Execute(IManipulatorsManager manager, string param)
        {
            switch (Mode)
            {
                case FileSystemManipulationMode.Exec:
                    return Exec(manager, param);
                case FileSystemManipulationMode.List:
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
            var root = c.Roots.Find(GetRoot(path));

            if (root == null)
                return false;

            var pathOrig = root.ToActualPath(path);

            if (!File.Exists(pathOrig))
                return false;

            if (!string.IsNullOrWhiteSpace(c.FileSearchPattern))
            {
                // Check if file matches search pattern:
                var dir = Directory.GetParent(pathOrig);
                var files = dir.GetFiles(c.FileSearchPattern).Select(x => x.FullName.ToLowerInvariant());
                if (!files.Contains(pathOrig.ToLowerInvariant()))
                    return false;
            }

            // Check if folders filter allows that file containing folder.
            if (c.FolderFilter?.Invoke(Directory.GetParent(pathOrig)?.FullName) == false)
                return false;

            // Check if file filter allows that file.
            if (c.FileFilter?.Invoke(pathOrig) == false)
                return false;

            try
            {
                var process = new Process
                {
                    StartInfo = new ProcessStartInfo
                    {
                        UseShellExecute = true,
                        FileName = pathOrig
                    }
                };
                process.Start();
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
                    PopulateContent(rv, c, c.Roots[0].Path);
                else
                    rv["folders"] = c.Roots.Select(x => x.Name).ToArray();

                return rv;
            }

            PopulateContent(rv, c, param);

            return rv.Any() ? rv : null;
        }

        private void PopulateContent(Dictionary<string, IEnumerable<string>> rv, FileSystemContext contexts, params string[] paths)
        {
            var path = Path.Combine(paths);
            var root = contexts.Roots.Find(GetRoot(path));

            if (root == null)
                return;

            var pathOrig = root.ToActualPath(path);
            var di = new DirectoryInfo(pathOrig);
            if (!di.Exists || !di.FullName.StartsWith(root.Path)) //TODO: Forbidden.
                return;

            var folders = di.GetDirectories()
                .FilterDirectories(contexts.FolderFilter)
                .Select(x => root.ToFakePath(x.FullName))
                .ToList();
            if (folders.Any())
                rv["folders"] = folders.Select(Path.GetFileName).ToList();

            var fp = string.IsNullOrWhiteSpace(contexts.FileSearchPattern) ? "*" : contexts.FileSearchPattern;
            var files = di.GetFiles(fp, SearchOption.TopDirectoryOnly)
                .FilterFiles(contexts.FileFilter)
                .Select(x => root.ToFakePath(x.FullName))
                .ToList();
            if (files.Any())
                rv["files"] = files.Select(Path.GetFileName).ToList();

            rv["path"] = path.ToPathParts();
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

        public static IEnumerable<string> ToPathParts(this string path)
        {
            var rv = new List<string>();

            while (!string.IsNullOrEmpty(path))
            {
                var part = Path.GetFileName(path);
                path = Path.GetDirectoryName(path);
                rv.Insert(0, part);
            }

            return rv;
        }
    }
}
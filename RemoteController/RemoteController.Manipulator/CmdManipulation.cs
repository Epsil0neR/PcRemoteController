using System;
using System.Diagnostics;
using System.IO;

namespace RemoteController.Manipulator
{
    public enum ManipulationCommandType
    {
        Code,
        File,
        PowerShell
    }

    /// <summary>
    /// Manipulation with CMD command.
    /// </summary>
    public class CmdManipulation : IManipulation
    {
        /// <summary>
        /// Default working directory for CMD process. Always links to application directory.
        /// </summary>
        public static string DefaultWorkingDirectory { get; }

        static CmdManipulation()
        {
            DefaultWorkingDirectory = AppDomain.CurrentDomain.BaseDirectory;
        }

        private readonly ManipulationCommandType _type;
        private readonly string _data;
        private readonly bool _supportParam;
        private readonly string _workingDirectory;
        private readonly bool _hidden;
        private readonly bool _wait;

        /// <summary>
        /// Creates manipulation instance for CMD
        /// </summary>
        /// <param name="name">Name of manipulation. Must be unique in list of used.</param>
        /// <param name="type">Manipulation type.</param>
        /// <param name="data">CMD command to execute or path to file to execute.</param>
        /// <param name="supportParam">Indicates if CMD command supports params</param>
        /// <param name="workingDirectory">Working directory for CMD process. If empty - will be used <see cref="DefaultWorkingDirectory"/>.</param>
        /// <param name="hidden">Indicates if CMD window will be hidden or shown.</param>
        /// <param name="wait">Indicates if CMD command execution should be waited.</param>
        public CmdManipulation(string name, ManipulationCommandType type, string data, bool supportParam = false, string workingDirectory = null, bool hidden = true, bool wait = false)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            _type = type;
            _data = data ?? throw new ArgumentNullException(nameof(data));
            _supportParam = supportParam;
            _workingDirectory = string.IsNullOrWhiteSpace(workingDirectory) || !Directory.Exists(workingDirectory)
                ? DefaultWorkingDirectory 
                : workingDirectory;
            _hidden = hidden;
            _wait = wait;
        }

        /// <inheritdoc />
        public string Name { get; }

        /// <inheritdoc />
        public object Execute(IManipulatorsManager manager, string param)
        {
            switch (_type)
            {
                case ManipulationCommandType.Code:
                    return ExecuteCode(manager, param);
                case ManipulationCommandType.File:
                    return ExecuteFile(manager, param);
                case ManipulationCommandType.PowerShell:
                    return ExecutePowerShell(manager, param);
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        private object ExecuteCode(IManipulatorsManager manager, string param)
        {
            var arguments = $@"/C {_data}";
            if (_supportParam)
                arguments = $"{arguments} \"{param}\"";

            var dir = DefaultWorkingDirectory;
            if (!string.IsNullOrWhiteSpace(_workingDirectory) && Directory.Exists(_workingDirectory))
                dir = _workingDirectory;

            Process proc = new Process // https://stackoverflow.com/a/22869734/1763586
            {
                StartInfo =
                {
                    FileName = @"C:\Windows\System32\cmd.exe",
                    Arguments = arguments,
                    WorkingDirectory = dir,
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                }
            };

            if (_hidden)
                proc.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;

            proc.Start();
            var output = proc.StandardOutput.ReadToEnd();
            if (_wait)
                proc.WaitForExit();

            return output;
        }

        private object ExecuteFile(IManipulatorsManager manager, string param)
        {
            if (!File.Exists(_data))
                return false;

            var dir = DefaultWorkingDirectory;
            if (!string.IsNullOrWhiteSpace(_workingDirectory) && Directory.Exists(_workingDirectory))
                dir = _workingDirectory;

            Process proc = new Process
            {
                StartInfo =
                {
                    FileName = _data,
                    Arguments = _supportParam && !string.IsNullOrEmpty(param) ? param : string.Empty,
                    WorkingDirectory = dir,
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                }
            };

            if (_hidden)
                proc.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;

            proc.Start();
            var output = proc.StandardOutput.ReadToEnd();
            if (_wait)
                proc.WaitForExit();

            return output;
        }

        private object ExecutePowerShell(IManipulatorsManager manager, string param)
        {
            if (!File.Exists(_data))
                return false;

            var dir = DefaultWorkingDirectory;
            if (!string.IsNullOrWhiteSpace(_workingDirectory) && Directory.Exists(_workingDirectory))
                dir = _workingDirectory;

            var arguments = $"-ExecutionPolicy Bypass -File \"{_data}\"";
            if (_supportParam)
                arguments = $"{arguments} \"{param}\"";

            Process proc = new Process // https://stackoverflow.com/a/22869734/1763586
            {
                StartInfo =
                {
                    FileName = @"powershell.exe",
                    Arguments = arguments,
                    WorkingDirectory = dir,
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                }
            };

            if (_hidden)
                proc.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;

            proc.Start();
            var output = proc.StandardOutput.ReadToEnd();
            if (_wait)
                proc.WaitForExit();

            return output;
        }
    }
}
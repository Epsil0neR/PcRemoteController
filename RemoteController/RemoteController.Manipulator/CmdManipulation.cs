using System;
using System.Diagnostics;
using System.IO;

namespace RemoteController.Manipulator
{
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

        private readonly string _command;
        private readonly bool _supportParam;
        private readonly string _workingDirectory;
        private readonly bool _hidden;
        private readonly bool _wait;

        /// <summary>
        /// Creates manipulation instance for CMD
        /// </summary>
        /// <param name="name">Name of manipulation. Must be unique in list of used.</param>
        /// <param name="cmdArgument">CMD command to execute</param>
        /// <param name="supportParam">Indicates if CMD command supports params</param>
        /// <param name="workingDirectory">Working directory for CMD process. If empty - will be used <see cref="DefaultWorkingDirectory"/>.</param>
        /// <param name="hidden">Indicates if CMD window will be hidden or shown.</param>
        /// <param name="wait">Indicates if CMD command execution should be waited.</param>
        public CmdManipulation(string name, string cmdArgument, bool supportParam = false, string workingDirectory = null, bool hidden = true, bool wait = false)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            _command = cmdArgument ?? throw new ArgumentNullException(nameof(cmdArgument));
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
            var arguments = $@"/C {_command}";
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
    }
}
using System;
using System.Diagnostics;

namespace RemoteController.Manipulator
{
    /// <summary>
    /// Manipulation with CMD command.
    /// </summary>
    public class CmdManipulation : IManipulation
    {
        private readonly string _command;
        private readonly bool _hidden;
        private readonly bool _wait;

        /// <summary>
        /// Creates manipulation instance for CMD
        /// </summary>
        /// <param name="name">Name of manipulation. Must be unique in list of used.</param>
        /// <param name="cmdArgument">CMD command to execute</param>
        /// <param name="hidden">Indicates if CMD window will be hidden or shown.</param>
        /// <param name="wait">Indicates if CMD command execution should be waited.</param>
        public CmdManipulation(string name, string cmdArgument, bool hidden = false, bool wait = false)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            _command = cmdArgument ?? throw new ArgumentNullException(nameof(cmdArgument));
            _hidden = hidden;
            _wait = wait;
        }

        /// <inheritdoc />
        public string Name { get; }

        /// <inheritdoc />
        public bool Execute(IManipulatorsManager manager)
        {
            Process proc = new Process
            {
                StartInfo =
                {
                    FileName = "CMD.exe",
                    Arguments = $@"/C {_command}",
                }
            };

            if (_hidden)
                proc.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;

            proc.Start();
            if (_wait)
                proc.WaitForExit();

            return true;
        }
    }
}
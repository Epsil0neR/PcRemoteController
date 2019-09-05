using System;
using System.Diagnostics;

namespace RemoteController.Manipulator
{
    public class CmdManipulation : IManipulation
    {
        private string _command;
        public CmdManipulation(string name, string cmdArgument)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            _command = cmdArgument ?? throw new ArgumentNullException(nameof(cmdArgument));
        }

        public string Name { get; }

        public void Execute()
        {
            Process proc = new Process
            {
                StartInfo =
                {
                    FileName = "CMD.exe",
                    Arguments = _command,
                    WindowStyle = ProcessWindowStyle.Hidden
                }
            };
            proc.Start();
            //proc.WaitForExit();
        }

    }
}
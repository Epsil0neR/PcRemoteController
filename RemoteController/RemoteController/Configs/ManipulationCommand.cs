using System.ComponentModel;

namespace RemoteController.Configs
{
    public enum ManipulationCommandType
    {
        Code,
        File
    }

    public class ManipulationCommand
    {
        /// <summary>
        /// Command name. Must be unique.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Command code or path to command file.
        /// </summary>
        public string Data { get; set; }

        /// <summary>
        /// Command mode. Depends on it will be executed differently.
        /// </summary>
        public ManipulationCommandType Mode { get; set; }

        /// <summary>
        /// Indicates if command supports argument at end of code or file.
        /// </summary>
        [DefaultValue(false)]
        public bool AllowArgument { get; set; }

        /// <summary>
        /// Indicates if command is enabled.
        /// </summary>
        [DefaultValue(true)]
        public bool IsEnabled { get; set; } = true;

        /// <summary>
        /// Working directory for CMD process. If empty - will be used application directory.
        /// </summary>
        [DefaultValue(null)]
        public string WorkingDirectory { get; set; }

        [DefaultValue(true)]
        public bool ShowCmdWindow { get; set; } = true;

        [DefaultValue(true)]
        public bool WaitForExecution { get; set; } = true;
    }
}
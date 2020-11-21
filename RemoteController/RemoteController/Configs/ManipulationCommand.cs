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
        public bool AllowArgument { get; set; }

        /// <summary>
        /// Indicates if command is enabled.
        /// </summary>
        public bool IsEnabled { get; set; }

        public bool ShowCmdWindow { get; set; } = true;

        public bool WaitForExecution { get; set; } = true;
    }
}
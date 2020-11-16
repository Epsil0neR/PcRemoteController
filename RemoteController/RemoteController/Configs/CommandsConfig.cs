using System.Collections.Generic;
using Epsiloner.OptionsModule;

namespace RemoteController.Configs
{
    public class CommandsConfig : List<ManipulationCommand>, IOptionsSection
    {
        /// <summary>
        /// Indicates if whole commands module is enabled.
        /// </summary>
        private bool IsEnabled { get; set; }
    }
}
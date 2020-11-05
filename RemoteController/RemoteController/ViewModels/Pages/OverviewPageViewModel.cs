using System.Windows.Input;

namespace RemoteController.ViewModels.Pages
{
    public class OverviewPageViewModel : BasePageViewModel
    {
        public OverviewPageViewModel()
            : base("Overview")
        {
        }

        /// <summary>
        /// TODO: Count of currently connected clients.
        /// </summary>
        public int Connections { get; }

        public bool IsServerRunning { get; }
        public ICommand StopServerCommand { get; }
        public ICommand StartServerCommand { get; }
    }
}
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using Epsiloner.OptionsModule;
using Epsiloner.Wpf.Utils;

namespace RemoteController.Configs
{
    public class CommandsConfig : List<ManipulationCommand>, IOptionsSection, INotifyPropertyChanged
    {
        private readonly ViewModelUtil _vm;
        private bool _isEnabled;

        public event PropertyChangedEventHandler PropertyChanged;

        /// <summary>
        /// Indicates if whole commands module is enabled.
        /// </summary>
        public bool IsEnabled
        {
            get => _isEnabled;
            set => _vm.Set(ref _isEnabled, value);
        }

        public CommandsConfig()
        {
            _vm = new ViewModelUtil(typeof(CommandsConfig), OnPropertyChanged);
        }


        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
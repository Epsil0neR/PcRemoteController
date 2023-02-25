using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Input;
using Epsiloner.Wpf.Gestures;
using RemoteController.Services;

namespace RemoteController.Controls
{
    public class GestureEditor : TextBox
    {
        private ModifierKeys _modifierKeys = ModifierKeys.None;
        private bool _isPausing;

        public static readonly DependencyProperty GestureProperty =
            DependencyProperty.Register(
                nameof(Gesture),
                typeof(Gesture),
                typeof(GestureEditor),
                new FrameworkPropertyMetadata(
                    default(Gesture),
                    FrameworkPropertyMetadataOptions.BindsTwoWayByDefault,
                    GesturePropertyChanged
                )
            );

        public static readonly DependencyProperty ShortcutNameProperty =
                DependencyProperty.Register(
                    nameof(ShortcutName),
                    typeof(string),
                    typeof(GestureEditor),
                    new FrameworkPropertyMetadata(
                        string.Empty,
                        FrameworkPropertyMetadataOptions.None,
                        ShortcutNamePropertyChangedCallback));

        public static readonly DependencyProperty ShortcutsServiceProperty =
            DependencyProperty.Register(
                nameof(ShortcutsService),
                typeof(ShortcutsService),
                typeof(GestureEditor));

        private static void GesturePropertyChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            if (d is not GestureEditor editor)
                return;

            var service = editor.ShortcutsService;
            if (service is null)
                return;

            if (string.IsNullOrWhiteSpace(editor.ShortcutName))
                return;

            service.Change(editor.ShortcutName, (Gesture?)e.NewValue);
        }

        private static void ShortcutNamePropertyChangedCallback(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            if (d is not GestureEditor editor)
                return;

            var service = editor.ShortcutsService;
            if (service is null)
                return;

            editor.Gesture = service.GetGesture((string)e.NewValue);
        }

        public Gesture? Gesture
        {
            get => (Gesture?)GetValue(GestureProperty);
            set => SetValue(GestureProperty, value);
        }

        public string? ShortcutName
        {
            get => (string)GetValue(ShortcutNameProperty);
            set => SetValue(ShortcutNameProperty, value);
        }

        public ShortcutsService? ShortcutsService
        {
            get => (ShortcutsService)GetValue(ShortcutsServiceProperty);
            set => SetValue(ShortcutsServiceProperty, value);
        }

        public GestureEditor()
        {
            ContextMenu = new()
            {
                Visibility = Visibility.Collapsed
            };
            IsReadOnlyCaretVisible = false;
            IsReadOnly = true;
            IsUndoEnabled = false;
            ShortcutsService = IoC.Resolve<ShortcutsService>();

            var b = new Binding(nameof(Gesture))
            {
                TargetNullValue = "<not set>",
                Source = this,
                Mode = BindingMode.OneWay
            };
            BindingOperations.SetBinding(this, TextProperty, b);


            AddHandler(PreviewKeyDownEvent, new KeyEventHandler(OnPreviewKeyDown), true);
            AddHandler(PreviewKeyUpEvent, new KeyEventHandler(OnPreviewKeyUp), true);
            GotFocus += OnGotFocus;
            LostFocus += OnLostFocus;
        }

        private void OnLostFocus(object sender, RoutedEventArgs e)
        {
            if (ShortcutsService is null || !_isPausing)
                return;

            ShortcutsService.IsPaused = false;
            _isPausing = false;
        }

        private void OnGotFocus(object sender, RoutedEventArgs e)
        {
            if (ShortcutsService is null || _isPausing)
                return;

            _isPausing = true;
            ShortcutsService.IsPaused = true;
        }

        private void OnPreviewKeyUp(object sender, KeyEventArgs e)
        {
            // Don't let the event pass further
            // because we don't want standard textbox shortcuts working
            e.Handled = true;

            switch (e.Key)
            {
                case Key.LeftShift:
                case Key.RightShift:
                    _modifierKeys &= ~ModifierKeys.Shift;
                    break;
                case Key.LeftAlt:
                case Key.RightAlt:
                    _modifierKeys &= ~ModifierKeys.Alt;
                    break;
                case Key.LeftCtrl:
                case Key.RightCtrl:
                    _modifierKeys &= ~ModifierKeys.Control;
                    break;
                case Key.LWin:
                case Key.RWin:
                    _modifierKeys &= ~ModifierKeys.Windows;
                    break;
            }
        }

        private void OnPreviewKeyDown(object sender, KeyEventArgs e)
        {
            // Don't let the event pass further
            // because we don't want standard textbox shortcuts working
            e.Handled = true;

            // Get modifiers and key data
            var key = e.Key;
            // When Alt is pressed, SystemKey is used instead
            if (key == Key.System)
            {
                key = e.SystemKey;
            }

            switch (key)
            {
                case Key.LeftShift:
                case Key.RightShift:
                    _modifierKeys |= ModifierKeys.Shift;
                    return;
                case Key.LeftAlt:
                case Key.RightAlt:
                    _modifierKeys |= ModifierKeys.Alt;
                    return;
                case Key.LeftCtrl:
                case Key.RightCtrl:
                    _modifierKeys |= ModifierKeys.Control;
                    return;
                case Key.LWin:
                case Key.RWin:
                    _modifierKeys |= ModifierKeys.Windows;
                    return;
            }

            // Pressing delete, backspace or escape without modifiers clears the current value
            if (_modifierKeys == ModifierKeys.None &&
                key is Key.Delete or Key.Back or Key.Escape)
            {
                Gesture = null;
                return;
            }

            // Update the value
            Gesture = new(key, _modifierKeys);
        }
    }
}

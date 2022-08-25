using System.Collections.Generic;
using System.ComponentModel;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Markup;

namespace RemoteController.Controls
{
    [DefaultProperty("Content")]
    [ContentProperty("Content")]
    public class StyledWindow : Window
    {
        static StyledWindow()
        {
            var type = typeof(StyledWindow);
            DefaultStyleKeyProperty.OverrideMetadata(type, new FrameworkPropertyMetadata(type));
        }

        public static readonly DependencyProperty ShowTitleProperty = DependencyProperty.Register(
            nameof(ShowTitle),
            typeof(bool),
            typeof(StyledWindow),
            new FrameworkPropertyMetadata(true,
                FrameworkPropertyMetadataOptions.AffectsArrange |
                FrameworkPropertyMetadataOptions.AffectsMeasure));

        public static readonly DependencyProperty HeaderMenuProperty = DependencyProperty.Register(
            nameof(HeaderMenu),
            typeof(Menu),
            typeof(StyledWindow),
            new FrameworkPropertyMetadata(null,
                FrameworkPropertyMetadataOptions.AffectsArrange |
                FrameworkPropertyMetadataOptions.AffectsMeasure));

        public static readonly DependencyProperty HeaderLeftContentProperty = DependencyProperty.Register(
            nameof(HeaderLeftContent),
            typeof(object),
            typeof(StyledWindow),
            new FrameworkPropertyMetadata(null,
                FrameworkPropertyMetadataOptions.AffectsArrange |
                FrameworkPropertyMetadataOptions.AffectsMeasure));

        public static readonly DependencyProperty HeaderRightContentProperty = DependencyProperty.Register(
            nameof(HeaderRightContent),
            typeof(object),
            typeof(StyledWindow),
            new FrameworkPropertyMetadata(null,
                FrameworkPropertyMetadataOptions.AffectsArrange |
                FrameworkPropertyMetadataOptions.AffectsMeasure));

        private readonly List<CommandBinding> _commands;

        public bool ShowTitle
        {
            get => (bool)GetValue(ShowTitleProperty);
            set => SetValue(ShowTitleProperty, value);
        }

        public Menu HeaderMenu
        {
            get => (Menu)GetValue(HeaderMenuProperty);
            set => SetValue(HeaderMenuProperty, value);
        }

        public object HeaderLeftContent
        {
            get => GetValue(HeaderLeftContentProperty);
            set => SetValue(HeaderLeftContentProperty, value);
        }

        public object HeaderRightContent
        {
            get => GetValue(HeaderRightContentProperty);
            set => SetValue(HeaderRightContentProperty, value);
        }

        public StyledWindow()
        {
            _commands = new List<CommandBinding>
            {
                new CommandBinding(SystemCommands.CloseWindowCommand, OnCloseWindow),
                new CommandBinding(SystemCommands.MaximizeWindowCommand, OnMaximizeWindow, OnCanResizeWindow),
                new CommandBinding(SystemCommands.MinimizeWindowCommand, OnMinimizeWindow, OnCanMinimizeWindow),
                new CommandBinding(SystemCommands.RestoreWindowCommand, OnRestoreWindow, OnCanResizeWindow)
            };
            CommandBindings.AddRange(_commands);
        }

        ~StyledWindow()
        {
            if (Dispatcher.HasShutdownStarted)
                return;

            Dispatcher.Invoke(() =>
            {
                foreach (var command in _commands) 
                    CommandBindings.Remove(command);
                _commands.Clear();
            });
        }

        #region Command handlers

        private void OnCloseWindow(object target, ExecutedRoutedEventArgs e)
        {
            if (target is Window w)
                SystemCommands.CloseWindow(w);
        }

        private void OnMaximizeWindow(object target, ExecutedRoutedEventArgs e)
        {
            if (target is Window w)
                SystemCommands.MaximizeWindow(w);
        }

        private void OnMinimizeWindow(object target, ExecutedRoutedEventArgs e)
        {
            if (target is Window w)
                SystemCommands.MinimizeWindow(w);
        }

        private void OnRestoreWindow(object target, ExecutedRoutedEventArgs e)
        {
            if (target is Window w)
                SystemCommands.RestoreWindow(w);
        }

        private void OnCanResizeWindow(object sender, CanExecuteRoutedEventArgs e)
        {
            e.CanExecute = sender is Window w &&
                           (w.ResizeMode == ResizeMode.CanResize ||
                            w.ResizeMode == ResizeMode.CanResizeWithGrip);
        }

        private void OnCanMinimizeWindow(object sender, CanExecuteRoutedEventArgs e)
        {
            e.CanExecute = sender is Window w && w.ResizeMode != ResizeMode.NoResize;
        }
        #endregion
    }
}

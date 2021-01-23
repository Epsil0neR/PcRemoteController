using System;
using System.Threading.Tasks;
using System.Windows.Threading;
using NLog;

namespace RemoteController
{
    /// <summary>
    /// Unhandled event registrar.
    /// Registers and handles events from domain, tasks and dispatchers.
    /// </summary>
    public static class DomainExceptionHandler
    {
        public static void HandleDomainExceptions()
        {
            UnHandleDomainExceptions();

            AppDomain.CurrentDomain.UnhandledException += OnUnhandledDomainException;
            TaskScheduler.UnobservedTaskException += OnUnobservedTaskException;
            Dispatcher.CurrentDispatcher.UnhandledException += OnUnhandledDispatcherException;
        }

        public static void UnHandleDomainExceptions()
        {
            AppDomain.CurrentDomain.UnhandledException -= OnUnhandledDomainException;
            TaskScheduler.UnobservedTaskException -= OnUnobservedTaskException;
            Dispatcher.CurrentDispatcher.UnhandledException -= OnUnhandledDispatcherException;
        }

        public static void OnUnhandledDomainException(object sender, UnhandledExceptionEventArgs e)
        {
            LogException(e.ExceptionObject as Exception);
        }

        public static void OnUnobservedTaskException(object sender, UnobservedTaskExceptionEventArgs e)
        {
            if (e.Observed)
                return;

            e.SetObserved();
            LogAggregatedException(e.Exception);
        }

        public static void OnUnhandledDispatcherException(object sender, DispatcherUnhandledExceptionEventArgs e)
        {
            if (e.Handled)
                return;

            e.Handled = true;
            LogException(e.Exception);
        }

        public static void LogAggregatedException(AggregateException exceptions)
        {
            if (exceptions?.InnerExceptions == null)
                return;

            foreach (var exception in exceptions.InnerExceptions)
            {
                LogException(exception);
            }
        }

        public static void LogException(Exception exception)
        {
            if (exception == null)
                return;

            Log.ShortLogger.Log(LogLevel.Fatal, exception);
        }

    }
}
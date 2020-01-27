using System;
using System.Diagnostics;
using System.IO;
using Microsoft.Extensions.Configuration;
using NLog;
using Topshelf;
using Topshelf.Logging;

namespace RemoteController.Service
{
    public class Program
    {
        public static Logger Logger { get; set; }

        static void Main(string[] args)
        {
            Logger = LogManager.GetLogger("File");

            var proc = Process.GetCurrentProcess();
            var loc = proc.MainModule?.FileName;
            var dir = Path.GetDirectoryName(loc);
#if DEBUG
            Console.Write("Base path: ");
            WriteLineColored(ConsoleColor.Green, dir);
            Console.Write("AppContext.BaseDirectory: ");
            WriteLineColored(ConsoleColor.Green, AppContext.BaseDirectory);
#endif
            var config = new ConfigurationBuilder()
                .SetBasePath(dir)
                .AddJsonFile("settings.config", true, true)
                .Build();

            var rv = HostFactory.Run(x =>
            {
                x.UseNLog();
                x.Service<RemoteControllerService>(c =>
                {
                    c.ConstructUsing(name => new RemoteControllerService(Logger, config));
                    c.WhenStarted((s, host) => s.Start(host));
                    c.WhenStopped((s, host) => s.Stop(host));
                });

                x.EnableServiceRecovery(rc =>
                {
                    // first failure
                    rc.RestartService(TimeSpan.FromMinutes(1));

                    // second failure
                    rc.RestartService(TimeSpan.FromMinutes(1));

                    // subsequent failures
                    rc.RestartService(TimeSpan.FromMinutes(2));
                });

                x.SetDisplayName("PC Remote controller");
                x.SetDescription("Host service for PC remote controller that lets via WebSocket connection manipulate PC where service runs.");
                x.SetServiceName("Epsiloner.PcRemoteController");

                x.RunAsLocalSystem();
                x.StartAutomatically();
                x.EnableShutdown();
            });

            var exitCode = (int)Convert.ChangeType(rv, rv.GetTypeCode());
            Environment.ExitCode = exitCode;
        }


        /// <summary>
        /// Writes specified message in colored way without going to next line after specified <paramref name="text"/>.
        /// </summary>
        /// <param name="color"></param>
        /// <param name="text"></param>
        public static void WriteColored(ConsoleColor color, string text)
        {
            Console.ForegroundColor = color;
            Console.Write(text);
            Console.ResetColor();
        }

        /// <summary>
        /// Writes specified message in colored way.
        /// </summary>
        /// <param name="color"></param>
        /// <param name="text"></param>
        public static void WriteLineColored(ConsoleColor color, string text)
        {
            Console.ForegroundColor = color;
            Console.WriteLine(text);
            Console.ResetColor();
        }

        /// <summary>
        /// Log method used by NLog. DO NOT REMOVE IT unless it also removed in NLog.config file.
        /// </summary>
        /// <param name="level"></param>
        /// <param name="message"></param>
        // ReSharper disable once UnusedMember.Global
        public static void LogMethod(string level, string message)
        {
            ConsoleColor color = level switch
            {
                "Trace" => ConsoleColor.White,
                "Debug" => ConsoleColor.White,
                "Info" => ConsoleColor.White,
                "Warn" => ConsoleColor.Yellow,
                "Error" => ConsoleColor.Red,
                "Fatal" => ConsoleColor.DarkRed,
                _ => ConsoleColor.White
            };
            var l = level switch
            {
                "Trace" => LogLevel.Trace,
                "Debug" => LogLevel.Debug,
                "Info" => LogLevel.Info,
                "Warn" => LogLevel.Warn,
                "Error" => LogLevel.Error,
                "Fatal" => LogLevel.Fatal,
                _ => LogLevel.Info
            };

            Logger.Log(l, message);
            WriteLineColored(color, message);
        }
    }
}

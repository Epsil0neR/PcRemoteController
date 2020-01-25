using System;
using System.Diagnostics;
using System.IO;
using Microsoft.Extensions.Configuration;
using Topshelf;
using Topshelf.Logging;

namespace RemoteController.Service
{
    class Program
    {
        static void Main(string[] args)
        {
            var proc = Process.GetCurrentProcess();
            var loc = proc.MainModule?.FileName;
            var dir = Path.GetDirectoryName(loc);
#if DEBUG
            Console.Write("Base path: ");
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(dir);
            Console.ResetColor();
            Console.Write("AppContext.BaseDirectory: ");
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(AppContext.BaseDirectory);
            Console.ResetColor();
#endif
            var config = new ConfigurationBuilder()
                .SetBasePath(dir)
                .AddJsonFile("settings.config", true, true)
                .Build();

            var rv = HostFactory.Run(x =>
            {
                x.Service<RemoteControllerService>(c =>
                {
                    x.UseNLog();
                    c.ConstructUsing(name => new RemoteControllerService(HostLogger.Current.Get(string.Empty), config));
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
    }
}

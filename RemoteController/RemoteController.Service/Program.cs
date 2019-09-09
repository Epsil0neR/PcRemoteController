using System;
using System.ComponentModel;
using RemoteController.WebSocket;
using Topshelf;
using Topshelf.Logging;
using WebSocketSharp;

namespace RemoteController.Service
{
    class Program
    {
        static void Main(string[] args)
        {
            var rv = HostFactory.Run(x =>
            {

                x.Service<RemoteControllerService>(c =>
                {
                    x.UseNLog();
                    c.ConstructUsing(name => new RemoteControllerService(HostLogger.Current.Get(string.Empty)));
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

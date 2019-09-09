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

            //Console.WriteLine("Hello World!");
            //var mm = new ManipulatorsManager();


            //while (true)
            //{
            //    Console.Write("Command name: ");
            //    var name = Console.ReadLine();

            //    if (string.IsNullOrWhiteSpace(name))
            //        break;

            //    Console.Write("Parameter:    ");
            //    var param = Console.ReadLine();

            //    Console.WriteLine($"Executed: {mm.TryExecute(name, param)}");
            //    Console.WriteLine();
            //}

            //RunWebSocketServer();

            //Console.WriteLine("Ready to exit...");
            //Console.ReadKey(true);
        }

        private static void RunWebSocketServer()
        {
            throw new NotImplementedException();

            WsServer server = null;
            var service = new WsService(server);

            server.Started += ServerOnStarted;
            server.Stopped += ServerOnStopped;
            server.AddressInUse += ServerOnAddressInUse;
            server.ClientConnected += ServerOnClientConnected;
            server.ClientDisconnected += ServerOnClientDisconnected;
            server.Message += ServerOnMessage;

            Console.WriteLine("Starting WS server");
            server.StartServer();

            Console.WriteLine("Press any key to exit gratefully!");
            Console.ReadKey(true);

            server.StopServer();

        }

        private static void ServerOnMessage(object sender, MessageEventArgs e)
        {
            Console.WriteLine("WS - message");
        }

        private static void ServerOnClientDisconnected(object sender, CloseEventArgs e)
        {
            Console.WriteLine("WS - client - disconnected");
        }

        private static void ServerOnClientConnected(object sender, EventArgs e)
        {
            Console.WriteLine("WS - client - connected");
        }

        private static void ServerOnAddressInUse(object sender, EventArgs e)
        {
            Console.WriteLine("WS - address in use");
        }

        private static void ServerOnStopped(object sender, EventArgs e)
        {
            Console.WriteLine("WS - stopped");
        }

        private static void ServerOnStarted(object sender, EventArgs e)
        {
            Console.WriteLine("WS - started");
        }
    }
}

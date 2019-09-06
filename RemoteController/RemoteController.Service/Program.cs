using System;
using System.ComponentModel;
using WindowsInput;
using WindowsInput.Native;
using RemoteController.Manipulator;
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

                x.Service<MyService>(c =>
                {
                    x.UseNLog();
                    c.ConstructUsing(name => new MyService(HostLogger.Current.Get(string.Empty)));
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
            var server = new WsServer("localhost", 6431, "/Testing");
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

    public class MyService : ServiceControl
    {
        //THIS LINE IS IMPORTANT - this is how we get logger.
        public LogWriter Logger { get; }

        public ManipulatorsManager Manipulators { get; }
        public WsServer Server { get; }
        public WsService Service { get; }


        public MyService(LogWriter logger)
        {

            Logger = logger ?? HostLogger.Get<MyService>();
            Manipulators = new ManipulatorsManager();
            Server = new WsServer("localhost", 6431, "/Testing");
            Service = new WsService(Server);

            Configurator.Configure(Manipulators);
            Configurator.Configure(Service);
        }



        public bool Start(HostControl hostControl)
        {
            Configurator.SetContexts(Manipulators);
            Server.StartServer();
            return true;
        }

        public bool Stop(HostControl hostControl)
        {
            Server.StopServer();
            Configurator.ClearContexts(Manipulators);
            return true;
        }
    }

    internal static class Configurator
    {
        public static void Configure(ManipulatorsManager manipulatorsManager)
        {
            SetContexts(manipulatorsManager);

            manipulatorsManager.Add(new CmdManipulation("cmd.git.stage", "git add -A"));
            manipulatorsManager.Add(new CmdManipulation("cmd.git.unstage", "git reset"));
            manipulatorsManager.Add(new CmdManipulation("cmd.git", "git", true));
            manipulatorsManager.Add(new CmdManipulation("cmd.git.2", "git", true, false, true));
            manipulatorsManager.Add(new CmdManipulation("cmd.git.3", "git", true, true, true));

            manipulatorsManager.Add(new KeyboardManipulation("Key"));
            manipulatorsManager.Add(new KeyboardManipulation("Key.Media.Play", VirtualKeyCode.MEDIA_PLAY_PAUSE));
            manipulatorsManager.Add(new KeyboardManipulation("Key.Media.Next", VirtualKeyCode.MEDIA_NEXT_TRACK));
            manipulatorsManager.Add(new KeyboardManipulation("Key.Media.Prev", VirtualKeyCode.MEDIA_PREV_TRACK));
            manipulatorsManager.Add(new KeyboardManipulation("Key.Volume.-", VirtualKeyCode.VOLUME_DOWN));
            manipulatorsManager.Add(new KeyboardManipulation("Key.Volume.+", VirtualKeyCode.VOLUME_UP));
            manipulatorsManager.Add(new KeyboardManipulation("Key.Volume.Mute", VirtualKeyCode.VOLUME_MUTE));

            manipulatorsManager.Add(new MouseManipulation("Mouse.Move.X", (simulator, param) =>
            {
                if (!int.TryParse(param, out var x))
                    x = 100;
                simulator.MoveMouseBy(x, 0);
            }));
            manipulatorsManager.Add(new MouseManipulation("Mouse.Move.Y", (simulator, param) =>
            {
                if (!int.TryParse(param, out var y))
                    y = 100;
                simulator.MoveMouseBy(0, y);
            }));

        }

        public static void SetContexts(ManipulatorsManager manipulatorsManager)
        {
            var inputSimulator = new InputSimulator();
            manipulatorsManager.SetContext(inputSimulator.Keyboard);
            manipulatorsManager.SetContext(inputSimulator.Mouse);
        }

        public static void ClearContexts(ManipulatorsManager manipulators)
        {
            manipulators.SetContext<IKeyboardSimulator>(null);
            manipulators.SetContext<IMouseSimulator>(null);
        }

        public static void Configure(WsService service)
        {
            throw new NotImplementedException();
        }
    }
}

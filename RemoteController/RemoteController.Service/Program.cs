using System;
using System.ComponentModel;
using WindowsInput;
using WindowsInput.Native;
using RemoteController.Manipulator;
using RemoteController.WebSocket;
using WebSocketSharp;

namespace RemoteController.Service
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var mm = new ManipulatorsManager();
            var inputSimulator = new InputSimulator();

            mm.SetContext(inputSimulator.Keyboard);
            mm.SetContext(inputSimulator.Mouse);


            mm.Add(new CmdManipulation("cmd.git.stage", "git add -A"));
            mm.Add(new CmdManipulation("cmd.git.unstage", "git reset"));
            mm.Add(new KeyboardManipulation("Key"));
            mm.Add(new KeyboardManipulation("Key.Media.Play", VirtualKeyCode.MEDIA_PLAY_PAUSE));
            mm.Add(new KeyboardManipulation("Key.Media.Next", VirtualKeyCode.MEDIA_NEXT_TRACK));
            mm.Add(new KeyboardManipulation("Key.Media.Prev", VirtualKeyCode.MEDIA_PREV_TRACK));
            mm.Add(new KeyboardManipulation("Key.Volume.-", VirtualKeyCode.VOLUME_DOWN));
            mm.Add(new KeyboardManipulation("Key.Volume.+", VirtualKeyCode.VOLUME_UP));
            mm.Add(new KeyboardManipulation("Key.Volume.Mute", VirtualKeyCode.VOLUME_MUTE));
            mm.Add(new MouseManipulation("Mouse.Move.X", (simulator, param) =>
            {
                if (!int.TryParse(param, out var x))
                    x = 100;
                simulator.MoveMouseBy(x, 0);
            }));
            mm.Add(new MouseManipulation("Mouse.Move.Y", (simulator, param) =>
            {
                if (!int.TryParse(param, out var y))
                    y = 100;
                simulator.MoveMouseBy(0, y);
            }));

            while (true)
            {
                Console.Write("Command name: ");
                var name = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(name))
                    break;

                Console.Write("Parameter:    ");
                var param = Console.ReadLine();

                Console.WriteLine($"Executed: {mm.TryExecute(name, param)}");
                Console.WriteLine();
            }

            RunWebSocketServer();

            Console.WriteLine("Ready to exit...");
            Console.ReadKey(true);
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
}

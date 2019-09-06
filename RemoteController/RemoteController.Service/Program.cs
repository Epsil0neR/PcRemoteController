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

            mm.Add(new KeyboardManipulation("Key.Media.Play", simulator => simulator.KeyPress(VirtualKeyCode.MEDIA_PLAY_PAUSE)));
            mm.Add(new KeyboardManipulation("Key.Media.Next", simulator => simulator.KeyPress(VirtualKeyCode.MEDIA_NEXT_TRACK)));
            mm.Add(new KeyboardManipulation("Key.Media.Prev", simulator => simulator.KeyPress(VirtualKeyCode.MEDIA_PREV_TRACK)));
            mm.Add(new KeyboardManipulation("Key.Volume.-", simulator => simulator.KeyPress(VirtualKeyCode.VOLUME_DOWN)));
            mm.Add(new KeyboardManipulation("Key.Volume.+", simulator => simulator.KeyPress(VirtualKeyCode.VOLUME_UP)));
            mm.Add(new KeyboardManipulation("Key.Volume.Mute", simulator => simulator.KeyPress(VirtualKeyCode.VOLUME_MUTE)));
            mm.Add(new MouseManipulation("Mouse.Move", simulator => simulator.MoveMouseBy(100, 50)));

            while (true)
            {
                Console.Write("Command name: ");
                var name = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(name))
                    break;

                Console.WriteLine($"Executed: {mm.TryExecute(name)}");
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

using System;
using System.ComponentModel;
using RemoteController.WebSocket;
using WebSocketSharp;

namespace RemoteController.Service
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var server = new WsServer("localhost", 6431, "/Testing");
            var service = new WsService(server);

            server.Started += ServerOnStarted;
            server.Stopped += ServerOnStopped;
            server.AddressInUse += ServerOnAddressInUse;
            server.ClientConnected += ServerOnClientConnected;
            server.ClientDisconnected += ServerOnClientDisconnected;
            server.Message += ServerOnMessage;
            server.PropertyChanged += ServerOnPropertyChanged;

            Console.WriteLine("Starting WS server");
            server.StartServer();
            Console.WriteLine("Press any key to exit gratefully!");
            Console.ReadKey(true);

            server.StopServer();

            Console.WriteLine("Ready to exit...");
            Console.ReadKey(true);
        }

        private static void ServerOnPropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            Console.WriteLine($"WS - property changed - {e.PropertyName}");
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

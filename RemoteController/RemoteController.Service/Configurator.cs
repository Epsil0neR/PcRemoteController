using System.Text;
using WindowsInput;
using WindowsInput.Native;
using RemoteController.Manipulator;
using RemoteController.WebSocket;
using WebSocketSharp;
using WebSocketSharp.Net;
using WebSocketSharp.Server;

namespace RemoteController.Service
{
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

        public static void Configure(WsService service, ManipulatorsManager manipulators)
        {
            service.UnhandledMessage += (sender, message) => manipulators.TryExecute(message.ActionName, message.Data?.ToString());
        }

        public static void Web(HttpServer http)
        {
            http.DocumentRootPath = "../../../Web";
            http.OnGet += (sender, e) => {
                var req = e.Request;
                var res = e.Response;

                var path = req.RawUrl;
                if (path == "/")
                    path += "index.html";

                byte[] contents;
                if (!e.TryReadFile(path, out contents))
                {
                    res.StatusCode = (int)HttpStatusCode.NotFound;
                    return;
                }

                if (path.EndsWith(".html"))
                {
                    res.ContentType = "text/html";
                    res.ContentEncoding = Encoding.UTF8;
                }
                else if (path.EndsWith(".js"))
                {
                    res.ContentType = "application/javascript";
                    res.ContentEncoding = Encoding.UTF8;
                }

                res.WriteContent(contents);
            };
        }
    }
}
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WindowsInput;
using WindowsInput.Native;
using RemoteController.Manipulator;
using RemoteController.Manipulator.Contexts;
using RemoteController.WebSocket;
using WebSocketSharp;
using WebSocketSharp.Net;
using WebSocketSharp.Server;

namespace RemoteController.Service
{
    internal static class Configurator
    {
        public static void Configure(ManipulatorsManager manipulatorsManager, WsService service)
        {
            SetContexts(manipulatorsManager);
            manipulatorsManager.Add(new FileSystemManipulation("FileSystem.List", FileSystemManipulationMode.List));
            manipulatorsManager.Add(new FileSystemManipulation("FileSystem.Exec", FileSystemManipulationMode.Exec));

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

            (int x, int y) GetMouseParam(string param)
            {
                var values = param?
                    .Replace(',', ' ')
                    .Replace('.', ' ')
                    .Split(" ")
                    .Select(v => int.TryParse(v.Trim(), out var r) ? r : (int?)null)
                    .Where(v => v.HasValue)
                    .Take(2)
                    .ToList();

                var x = values?.FirstOrDefault() ?? 0;
                var y = values?.LastOrDefault() ?? 0;

                return (x, y);
            }
            manipulatorsManager.Add(new MouseManipulation("Mouse.Move", (simulator, param) =>
            {
                var (x, y) = GetMouseParam(param);

                if (x != 0 || y != 0)
                    simulator.MoveMouseBy(x, y);
                else
                    return false;

                return true;
            }));
        }

        public static void SetContexts(ManipulatorsManager manipulatorsManager)
        {
            var inputSimulator = new InputSimulator();
            manipulatorsManager.SetContext(inputSimulator.Keyboard);
            manipulatorsManager.SetContext(inputSimulator.Mouse);

            if (manipulatorsManager.GetContext<FileSystemContext>() == null)
            {
                var fc = new FileSystemContext
                {
                    Roots = new Dictionary<string, string>()
                    {
                        //{"Testing", @"C:\testing" }
                        { "Download",  @"E:\Download"},
                        { "Downloads", @"C:\Users\Epsil0neR\Downloads"}
                    }
                };
                manipulatorsManager.SetContext(fc);
            }
        }

        public static void ClearContexts(ManipulatorsManager manipulators)
        {
            manipulators.SetContext<IKeyboardSimulator>(null);
            manipulators.SetContext<IMouseSimulator>(null);
        }

        public static void Web(HttpServer http)
        {
#if DEBUG
            http.DocumentRootPath = "../../../Web";
#else
            http.DocumentRootPath = "./Web";
#endif
            http.OnGet += (sender, e) =>
            {
                var req = e.Request;
                var res = e.Response;

                var path = req.RawUrl;
                if (path == "/")
                    path += "index.html";

                if (!e.TryReadFile(path, out var contents))
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
                } else if (path.EndsWith(".css"))
                {
                    res.ContentType = "text/css";
                    res.ContentEncoding = Encoding.UTF8;
                }

                res.WriteContent(contents);
            };
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RemoteController.Informer;
using RemoteController.Manipulator;
using RemoteController.Manipulator.Contexts;
using RemoteController.Service.Configs;
using RemoteController.WebSocket;
using WebSocketSharp;
using WebSocketSharp.Net;
using WebSocketSharp.Server;
using WindowsInput;
using Level = NLog.LogLevel;
using Log = NLog.Logger;

namespace RemoteController.Service
{
    internal static class Configurator
    {
        public static void Configure(ManipulatorsManager manipulatorsManager,
            WsService service,
            InformersManager informersManager)
        {
            manipulatorsManager.Add(new FileSystemManipulation("FileSystem.List", FileSystemManipulationMode.List));
            manipulatorsManager.Add(new FileSystemManipulation("FileSystem.Exec", FileSystemManipulationMode.Exec));

            // Disable CMD commands for now
            //manipulatorsManager.Add(new CmdManipulation("cmd.git.stage", "git add -A"));
            //manipulatorsManager.Add(new CmdManipulation("cmd.git.unstage", "git reset"));
            //manipulatorsManager.Add(new CmdManipulation("cmd.git", "git", true));
            //manipulatorsManager.Add(new CmdManipulation("cmd.git.2", "git", true, false, true));
            //manipulatorsManager.Add(new CmdManipulation("cmd.git.3", "git", true, true, true));

            manipulatorsManager.Add(new KeyboardManipulation("Key", KeyboardManipulation.PressAction));
            manipulatorsManager.Add(new KeyboardManipulation("Key.Down", KeyboardManipulation.KeyDownAction));
            manipulatorsManager.Add(new KeyboardManipulation("Key.Up", KeyboardManipulation.KeyUpAction));

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

            service.Server.ClientConnected += ServerOnClientConnected;
            void ServerOnClientConnected(object sender, EventArgs e)
            {
                var socket = sender as IWsSocket;
                if (!(socket is WebSocketBehavior behavior))
                    return;
                
                var task = Task.Delay(1000);
                task.ConfigureAwait(false);
                task.ContinueWith(t =>
                {
                    if (behavior?.State != WebSocketState.Open)
                        return;

                    informersManager.Informers.Send(socket);
                });
            }

            service.Server.PropertyChanged += (sender, args) =>
            {
                if (args.PropertyName == nameof(WsServer.ConnectionsCount))
                {
                    Console.Write("Connected clients: ");
                    Program.WriteLineColored(ConsoleColor.Green, service.Server.ConnectionsCount.ToString());
                }
            };

            var soundInformer = informersManager.Informer<SoundInformer>();
            if (soundInformer != null)
            {
                manipulatorsManager.Add(new CustomManipulation<SoundInformer>(soundInformer.GetActionName(), () => soundInformer.CheckForChanges() ? null : soundInformer));
                manipulatorsManager.Add(new CustomManipulation<bool>("Sound.Output.Volume", input =>
                {
                    if (!int.TryParse(input, out int volume))
                        return false;

                    return soundInformer.ChangeOutputVolume(volume);
                }));
                manipulatorsManager.Add(new CustomManipulation<bool>("Sound.Input.Volume", input =>
                {
                    if (!int.TryParse(input, out int volume))
                        return false;

                    return soundInformer.ChangeInputVolume(volume);
                }));
            }
        }

        public static void SetContexts(ManipulatorsManager manipulatorsManager, FileSystemConfig config)
        {
            var inputSimulator = new InputSimulator();
            manipulatorsManager.SetContext(inputSimulator.Keyboard);
            manipulatorsManager.SetContext(inputSimulator.Mouse);

            if (manipulatorsManager.GetContext<FileSystemContext>() == null)
            {
                var fc = new FileSystemContext
                {
                    Roots = config.Roots
                };
                manipulatorsManager.SetContext(fc);
            }
        }

        public static void ClearContexts(ManipulatorsManager manipulators)
        {
            manipulators.SetContext<IKeyboardSimulator>(null);
            manipulators.SetContext<IMouseSimulator>(null);
        }

        public static void Web(HttpServer http, Log log)
        {
            http.Log.Output = (data, s) =>
            {
                var level = data.Level switch
                {
                    LogLevel.Trace => Level.Debug,
                    LogLevel.Debug => Level.Debug,
                    LogLevel.Info => Level.Info,
                    LogLevel.Warn => Level.Warn,
                    LogLevel.Error => Level.Error,
                    LogLevel.Fatal => Level.Fatal,
                    _ => Level.Off
                };
                var m = data.Caller?.GetMethod();
                var separator = data.Message.Contains(Environment.NewLine) ? Environment.NewLine : " | ";
                var text = $"{m?.DeclaringType?.Name ?? "unknown"}.{m?.Name ?? "unknown"}{separator}{data.Message}";
                log.Log(level, text);
            };

#if DEBUG
            http.DocumentRootPath = "../../../../Web";
#else
            http.DocumentRootPath = "./Web";
#endif
            http.OnGet += HttpOnGetSinglePage;
        }

        private static void HttpOnGetMultiPages(object sender, HttpRequestEventArgs e)
        {
            var req = e.Request;
            var res = e.Response;
            var path = req.Url.AbsolutePath;
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
            }
            else if (path.EndsWith(".css"))
            {
                res.ContentType = "text/css";
                res.ContentEncoding = Encoding.UTF8;
            }

            res.WriteContent(contents);
        }

        private static void HttpOnGetSinglePage(object sender, HttpRequestEventArgs e)
        {
            var req = e.Request;
            var res = e.Response;
            var path = req.Url.AbsolutePath;

            if (e.TryReadFile(path, out var contents))
            {
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
                else if (path.EndsWith(".css"))
                {
                    res.ContentType = "text/css";
                    res.ContentEncoding = Encoding.UTF8;
                }
            }
            else if (e.TryReadFile("/index.html", out contents))
            {
                res.ContentType = "text/html";
                res.ContentEncoding = Encoding.UTF8;
            }
            else
            {
                res.StatusCode = (int)HttpStatusCode.NotFound;
                return;
            }

            res.WriteContent(contents);
        }

        public static void Configure(InformersManager manager)
        {
            manager.Register(new SoundInformer());
        }

        public static void Send(this IEnumerable<BaseInformer> informers, IWsSocket socket)
        {
            foreach (var info in informers)
                info.Send(socket);
        }

        public static void Send(this BaseInformer informer, IWsSocket socket)
        {
            socket.Send(informer.ToMessage());
        }

        public static void Send(this BaseInformer informer, WsServer server)
        {
            var msg = informer.ToMessage();
            server.Broadcast(msg);
        }

        /// <summary>
        /// Provides name for custom manipulator.
        /// </summary>
        /// <param name="informer"></param>
        /// <returns></returns>
        public static string GetActionName(this BaseInformer informer)
        {
            return $"Informer.{informer.Name}";
        }

        /// <summary>
        /// Converts informer to <see cref="Message"/>.
        /// </summary>
        /// <param name="informer"></param>
        /// <returns></returns>
        public static Message ToMessage(this BaseInformer informer)
        {
            var rv = new Message()
            {
                Type = MessageType.Notification,
                ActionName = informer.GetActionName(),
                Data = informer,
            };
            return rv;
        }
    }
}
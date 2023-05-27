using RemoteController.Informer;
using RemoteController.WebSocket;
using RemoteController.WinUi.Core.Options;
using RemoteController.WinUi.Extensions;
using RemoteController.WinUi.Models;
using WebSocketSharp;
using WebSocketSharp.Net;
using WebSocketSharp.Server;

namespace RemoteController.WinUi.HostedServices;

public class WebHosting : IHostedService
{
    private bool _wasRunning;

    public HttpServer HttpServer { get; }
    public WsServer WebSocketServer { get; }
    public IWritableOptions<ServerOptions> Options { get; }
    public InformersManager InformersManager { get; }

    public WebHosting(
        HttpServer httpServer,
        WsServer webSocketServer,
        IWritableOptions<ServerOptions> options,
        InformersManager informersManager)
    {
        HttpServer = httpServer ?? throw new ArgumentNullException(nameof(httpServer));
        WebSocketServer = webSocketServer ?? throw new ArgumentNullException(nameof(webSocketServer));
        Options = options ?? throw new ArgumentNullException(nameof(options));
        InformersManager = informersManager ?? throw new ArgumentNullException(nameof(informersManager));
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        HttpServer.OnGet += OnGetSinglePage;

        WebSocketServer.ClientConnected += ServerOnClientConnected;
        if (Options.Value.StartWithApp || _wasRunning)
        {
            WebSocketServer.StartServer();
        }
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        HttpServer.OnGet -= OnGetSinglePage;

        WebSocketServer.ClientConnected -= ServerOnClientConnected;
        _wasRunning = WebSocketServer.IsStarted;
        WebSocketServer.StopServer();
    }

    public static void OnGetMultiPages(object? sender, HttpRequestEventArgs e)
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
            res.AddHeader("Feature-Policy", "wake-lock '*'");
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

    public static void OnGetSinglePage(object? sender, HttpRequestEventArgs e)
    {
        var req = e.Request;
        var res = e.Response;
        var path = req.Url.AbsolutePath;

        if (e.TryReadFile(path, out var contents))
        {
            if (path.EndsWith(".html"))
            {
                res.ContentType = "text/html";
                res.AddHeader("Feature-Policy", "wake-lock '*'");
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
            res.AddHeader("Feature-Policy", "wake-lock '*'");
            res.ContentEncoding = Encoding.UTF8;
        }
        else
        {
            res.StatusCode = (int)HttpStatusCode.NotFound;
            return;
        }

        res.WriteContent(contents);
    }

    private void ServerOnClientConnected(object? sender, EventArgs e)
    {
        var socket = sender as IWsSocket;
        if (socket is not WebSocketBehavior behavior)
            return;

        var task = Task.Delay(1000); //TODO: Move this setting to config.
        task.ConfigureAwait(false);
        task.ContinueWith(t =>
        {
            if (behavior?.State != WebSocketState.Open)
                return;

            InformersManager.Informers.Send(socket);
        });
    }
}
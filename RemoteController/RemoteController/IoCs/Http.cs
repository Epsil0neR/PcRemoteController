using System.Text;
using WebSocketSharp;
using WebSocketSharp.Net;
using WebSocketSharp.Server;

namespace RemoteController.IoCs
{
    /// <summary>
    /// HTTP server handlers.
    /// </summary>
    internal static class Http
    {
        public static void OnGetMultiPages(object sender, HttpRequestEventArgs e)
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

        public static void OnGetSinglePage(object sender, HttpRequestEventArgs e)
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
    }
}
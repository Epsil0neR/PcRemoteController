using System;
using System.IO;
using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using Microsoft.Extensions.DependencyInjection;
using RemoteController.Configs;
using WebSocketSharp;
using WebSocketSharp.Server;
using Level = NLog.LogLevel;
using Logger = NLog.Logger;

namespace RemoteController.IoCs;

/// <summary>
/// IoC factories
/// </summary>
internal static class Factories
{
    public static HttpServer HttpServer(IServiceProvider provider)
    {
        var config = provider.GetRequiredService<ServerConfig>();
        var log = IoC.Resolve<Logger>();
        var cert = new X509Certificate2(
            Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "RemoteController.pfx"),
            "{0x719dca02,0xb331,0x45fb,{0xb8,0xd1,0xbb,0x39,0xec,0x5d,0x39,0x8b}}");
        var http = new HttpServer(config.Port, true)
        {
            KeepClean = true,
            SslConfiguration =
            {
                ServerCertificate = cert,
                EnabledSslProtocols = SslProtocols.Tls12
            },
        };


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
        http.OnGet += Http.OnGetSinglePage;
        return http;
    }
}
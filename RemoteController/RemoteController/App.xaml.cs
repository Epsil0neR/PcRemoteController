using System.Diagnostics;
using System.IO;
using Microsoft.Extensions.Configuration;
using RemoteController.Configs;

namespace RemoteController
{
    public partial class App
    {
        public App()
        {
            DomainExceptionHandler.HandleDomainExceptions();
            ConfigureIoC();
        }

        /// <summary>
        /// Log method used by NLog. DO NOT REMOVE IT unless it also removed in NLog.config file.
        /// </summary>
        /// <param name="level"></param>
        /// <param name="message"></param>
        // ReSharper disable once UnusedMember.Global
        public static void LogMethod(string level, string message)
        {
            // TODO;
        }

        private void ConfigureIoC()
        {
            IoC.RegisterInstance(Log.Logger);
            var c = CreateConfiguration();
            IoC.RegisterInstance(c);

            var fsc = new FileSystemConfig();
            c.GetSection("FileSystem").Bind(fsc);
            IoC.RegisterInstance(fsc);

            var sc = new ServerConfig();
            c.GetSection("Server").Bind(sc);
            IoC.RegisterInstance(sc);
        }

        private IConfiguration CreateConfiguration()
        {
            var proc = Process.GetCurrentProcess();
            var loc = proc.MainModule?.FileName;
            var dir = Path.GetDirectoryName(loc);

            var configuration = new ConfigurationBuilder()
                .SetBasePath(dir)
                .AddJsonFile("settings.config",true, true)
                .Build();
            return configuration;
        }
    }
}

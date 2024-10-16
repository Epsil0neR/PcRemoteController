﻿using System.IO;
using System.Reflection;
using NLog;

namespace RemoteController;

/// <summary>
/// Log based on NLog
/// </summary>
public static class Log
{
    static Log()
    {
        var root = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
        PathToLogsDirectory = Path.Combine(root, "logs");
    }

    /// <summary>
    /// Direct exposure on instantiate ILogger from NLog
    /// </summary>
    public static Logger Logger { get; } = LogManager.GetLogger("File");


    /// <summary>
    /// Direct exposure on instantiate ILogger from NLog with short layout.
    /// </summary>
    public static Logger ShortLogger { get; } = LogManager.GetLogger("Short");

    public static string PathToLogsDirectory { get; }
}
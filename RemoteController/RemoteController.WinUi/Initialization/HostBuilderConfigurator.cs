using Newtonsoft.Json;
using RemoteController.WinUi.Converters.Json;

namespace RemoteController.WinUi.Initialization;

internal static class HostBuilderConfigurator
{
    /// <summary>
    /// Configures <see cref="JsonConvert"/> to support custom json convertors.
    /// </summary>
    /// <param name="hostBuilder"></param>
    /// <returns></returns>
    public static IHostBuilder ConfigureJson(this IHostBuilder hostBuilder)
    {
        
        JsonConvert.DefaultSettings = () => new()
        {
            Converters = new List<JsonConverter>
            {
                // Here are a list of custom typed converters
                new MultiKeyGestureConverter()
            }
        };

        return hostBuilder;
    }
}
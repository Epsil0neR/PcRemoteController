namespace RemoteController.WinUi.Extensions;

public static class Global
{
    /// <summary>Gets the service object of the specified type.</summary>
    /// <typeparam name="T">Type of service object to get</typeparam>
    /// <returns>A service object of type <typeparamref name="T"/>.
    /// 
    /// -or-
    /// 
    /// throws <see cref="ArgumentException"/>.</returns>
    public static T Resolve<T>(this object _) where T : class 
        => App.GetService<T>();
}
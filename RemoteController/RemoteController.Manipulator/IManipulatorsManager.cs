namespace RemoteController.Manipulator
{
    public interface IManipulatorsManager
    {
        /// <summary>
        /// Gets context for specified type
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        T GetContext<T>();

        /// <summary>
        /// Sets context for specified type.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="context"></param>
        void SetContext<T>(T context);

        /// <summary>
        /// Tries to execute manipulation.
        /// </summary>
        /// <param name="name">Name of manipulation.</param>
        /// <param name="param">Optional parameter for manipulation.</param>
        /// <returns></returns>
        bool TryExecute(string name, string param = null);

        /// <summary>
        /// Adds manipulation for managing.
        /// </summary>
        /// <param name="manipulation"></param>
        void Add(IManipulation manipulation);

        /// <summary>
        /// Removes manipulation from managing.
        /// </summary>
        /// <param name="manipulation"></param>
        bool Remove(IManipulation manipulation);
    }
}
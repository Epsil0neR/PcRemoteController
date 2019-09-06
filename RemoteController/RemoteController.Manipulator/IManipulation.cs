namespace RemoteController.Manipulator
{
    public interface IManipulation
    {
        /// <summary>
        /// Name of manipulation. Must be unique in list of used.
        /// </summary>
        string Name { get; }

        /// <summary>
        /// Executes manipulation.
        /// </summary>
        /// <param name="manager">Manager where context for execution can be grabbed.</param>
        /// <param name="param">Optional parameter.</param>
        /// <returns>Returns true if manipulation executed successfully, otherwise - false.</returns>
        bool Execute(IManipulatorsManager manager, string param);
    }
}

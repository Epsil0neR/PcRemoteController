namespace RemoteController.Manipulator
{
    public interface IManipulation
    {
        /// <summary>
        /// Name of manipulation. Must be unique in list of used.
        /// </summary>
        string Name { get; }
    }
}

using System;
using System.Collections.Generic;

namespace RemoteController.Manipulator
{
    public interface IManipulatorsManager
    {
        /// <summary>
        /// Raised when <see cref="IManipulation"/> is added or removed from manager.
        /// </summary>
        event EventHandler<ManipulatorsItemEventArgs> ItemStateChanged;

        /// <summary>
        /// Gets context for specified mode
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        T GetContext<T>();

        /// <summary>
        /// Sets context for specified mode.
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
        object TryExecute(string name, string param = null);

        /// <summary>
        /// Adds manipulation for managing.
        /// </summary>
        /// <param name="manipulation"></param>
        /// <exception cref="ArgumentException">Name is empty or whitespace.</exception>
        /// <exception cref="ArgumentException">Manipulation with same name already registered..</exception>
        void Add(IManipulation manipulation);

        /// <summary>
        /// Removes manipulation from managing.
        /// </summary>
        /// <param name="manipulation"></param>
        bool Remove(IManipulation manipulation);

        /// <summary>
        /// Finds manipulation by name.
        /// </summary>
        /// <param name="name">Manipulation name.</param>
        /// <returns></returns>
        IManipulation Find(string name);

        /// <summary>
        /// Finds all manipulations of specified type.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        IEnumerable<T> FindAll<T>() where T: IManipulation;
    }
}
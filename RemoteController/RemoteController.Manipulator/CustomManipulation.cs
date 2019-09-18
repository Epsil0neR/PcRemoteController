using System;

namespace RemoteController.Manipulator
{
    public class CustomManipulation<TResult> : IManipulation
    {
        private readonly Func<IManipulatorsManager, string, TResult> _handler;

        public CustomManipulation(string name, Func<IManipulatorsManager, string, TResult> handler)
        {
            _handler = handler;
            Name = name;
        }
        public CustomManipulation(string name, Func<IManipulatorsManager, TResult> handler)
            : this(name, (manager, s) => handler(manager))
        { }
        public CustomManipulation(string name, Func<string, TResult> handler)
            : this(name, (manager, s) => handler(s))
        { }

        public CustomManipulation(string name, Func<TResult> handler)
            : this(name, (manager, s) => handler())
        { }


        public string Name { get; }
        public object Execute(IManipulatorsManager manager, string param)
        {
            if (_handler == null)
                return default(TResult);
            return _handler.Invoke(manager, param);
        }
    }
}
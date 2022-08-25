using System;
using System.Drawing;
using System.Linq;
using WindowsInput;

namespace RemoteController.Manipulator;

public class MouseManipulation : TypedManipulation<IMouseSimulator>
{
    public static IManipulation[] GetManipulations()
    {
        return new IManipulation[]
        {
            new MouseManipulation("Mouse.Move", MouseMove),
        };
    }

    public MouseManipulation(string name, Action<IMouseSimulator, string> action)
        : base(name, action) { }

    public MouseManipulation(string name, Action<IMouseSimulator> action)
        : base(name, action) { }

    public MouseManipulation(string name, Func<IMouseSimulator, string, bool> action)
        : base(name, action) { }

    public MouseManipulation(string name, Func<IMouseSimulator, bool> action)
        : base(name, action) { }


    public static bool MouseMove(IMouseSimulator simulator, string param)
    {
        var point = GetMouseParam(param);
        var (x, y) = (point.X, point.Y);

        if (x != 0 || y != 0)
            simulator.MoveMouseBy(x, y);
        else
            return false;

        return true;
    }

    private static Point GetMouseParam(string param)
    {
        var values = param?
            .Replace(',', ' ')
            .Replace('.', ' ')
            .Split(' ')
            .Select(v => int.TryParse(v.Trim(), out var r) ? r : (int?)null)
            .Where(v => v.HasValue)
            .Take(2)
            .ToList();

        var x = values?.FirstOrDefault() ?? 0;
        var y = values?.LastOrDefault() ?? 0;
        var p = new Point(x, y);
        return p;
    }
}
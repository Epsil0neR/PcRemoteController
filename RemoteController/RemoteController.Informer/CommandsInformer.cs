using System;
using System.Collections.Generic;
using System.Linq;
using Epsiloner.Cooldowns;
using Microsoft.Extensions.Logging;
using RemoteController.Manipulator;

namespace RemoteController.Informer;

/// <summary>
/// Manages what commands are available for web-clients over WebSocket connection.
/// </summary>
public class CommandsInformer : BaseInformer
{
    private readonly EventCooldown _cooldown;
    private readonly IManipulatorsManager _manager;
    private readonly ILogger<CommandsInformer> _logger;

    private IList<string> _commands;
    private bool _started;

    /// <inheritdoc />
    public override string Name => "Commands";

    /// <summary>
    /// List of available commands.
    /// </summary>
    public IEnumerable<string> Commands => _commands;

    public CommandsInformer(IManipulatorsManager manager, ILogger<CommandsInformer> logger)
    {
        _manager = manager ?? throw new ArgumentNullException(nameof(manager));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _cooldown = new EventCooldown(
            TimeSpan.FromMilliseconds(250),
            () => Check(),
            TimeSpan.FromSeconds(1));

        _manager.ItemStateChanged += ManagerOnItemStateChanged;
    }

    private void ManagerOnItemStateChanged(object? sender, ManipulatorsItemEventArgs e)
    {
        if (_started)
            _cooldown.Accumulate();
    }

    public override bool CheckForChanges()
    {
        _cooldown.Cancel();
        return Check();
    }

    public override void Start()
    {
        _started = true;
    }

    public override void Stop()
    {
        _started = false;
        _cooldown.Cancel();
    }

    private bool Check()
    {
        var changed = false;
        try
        {
            var commands = _manager
                .FindAll<CmdManipulation>()
                .Select(x => x.Name)
                .ToList();

            changed = SetList(ref _commands, commands);
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Failed to check for CommandsInformer changes.");
        }

        if (changed)
            RaiseChanged();
        return changed;
    }
}
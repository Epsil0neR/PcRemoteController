using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using Epsiloner.OptionsModule;

namespace RemoteController.Configs;

public class SoundDeviceItem
{
    /// <summary>
    /// Device friendly name.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Indicates if item is selected by user.
    /// </summary>
    [DefaultValue(false)]
    public bool IsSelected { get; set; }
}

public class SoundDevicesConfig : List<SoundDeviceItem>, IOptionsSection
{
    public bool IsSelected(string name)
    {
        return Find(name)?.IsSelected ?? true;
    }


    public SoundDeviceItem? Find(string name)
    {
        return this.FirstOrDefault(x => x.Name == name);
    }

    public void SetIsSelected(string name, bool isSelected)
    {
        var item = Find(name);
        if (item is null)
        {
            Add(new()
            {
                Name = name,
                IsSelected = isSelected
            });
        }
        else
        {
            item.IsSelected = isSelected;
        }

        IoC.Resolve<Options>().Save<SoundDevicesConfig>();
    }
}
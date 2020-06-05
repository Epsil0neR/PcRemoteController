using System.Collections.Generic;
using RemoteController.Informer;
using RemoteController.Manipulator;

namespace RemoteController.Configurations
{
    public static class ManipulationConfiguration
    {
        public static void Configure()
        {
            var manager = IoC.Resolve<IManipulatorsManager>();
            var soundInformer = IoC.Resolve<SoundInformer>();

            FileSystemManipulation.GetManipulations().AddTo(manager);
            KeyboardManipulation.GetManipulations().AddTo(manager);
            MouseManipulation.GetManipulations().AddTo(manager);

            manager.Add(new CustomManipulation<SoundInformer>(soundInformer.GetActionName(), () => soundInformer.CheckForChanges() ? null : soundInformer));
            manager.Add(new CustomManipulation<bool>("Sound.Output.Volume", input =>
            {
                if (!int.TryParse(input, out var volume))
                    return false;

                return soundInformer.ChangeOutputVolume(volume);
            }));
            manager.Add(new CustomManipulation<bool>("Sound.Input.Volume", input =>
            {
                if (!int.TryParse(input, out var volume))
                    return false;

                return soundInformer.ChangeInputVolume(volume);
            }));
        }

        private static void AddTo(this IEnumerable<IManipulation> manipulations, IManipulatorsManager manager)
        {
            foreach (var manipulation in manipulations)
                manager.Add(manipulation);
        }
    }
}

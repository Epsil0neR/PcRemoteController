using RemoteController.Configs;

namespace RemoteController
{
    public static class Validator
    {
        public static bool Validate(ManipulationCommand command)
        {
            if (command == null)
                return false;

            if (string.IsNullOrWhiteSpace(command.Name))
                return false;

            if (string.IsNullOrWhiteSpace(command.Data))
                return false;

            return true;
        }
    }
}

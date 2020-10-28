namespace RemoteController.Services
{
    public interface IAuthService
    {
        public bool TryAuthorize(string token);
        public bool IsAuthorized(string token);
        public bool Register(string token, string username, string description); //TODO: Add extra fields like Username, Description, Roles
    }

    public interface IRolesService
    {

    }
}

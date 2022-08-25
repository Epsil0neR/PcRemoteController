namespace RemoteController.Services;

public interface IAuthService
{
    bool TryAuthorize(string token);
    bool IsAuthorized(string token);
    bool Register(string token, string username, string description); //TODO: Add extra fields like Username, Description, Roles
}

public interface IRolesService
{

}
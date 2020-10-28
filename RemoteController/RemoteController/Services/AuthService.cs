using System;

namespace RemoteController.Services
{
    public class AuthService : IAuthService
    {
        public bool TryAuthorize(string token)
        {
            return string.IsNullOrWhiteSpace(token);
        }

        public bool IsAuthorized(string token)
        {
            return string.IsNullOrWhiteSpace(token);
        }

        public bool Register(string token, string username, string description)
        {
            throw new NotImplementedException();
        }
    }
}

using DwellDeal.Models.Entities;

namespace DwellDeal.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Authenticate(string username, string password);
        void Register(string username, string password);
        bool MatchHashedPassword(string password, byte[] hashedPassword, byte[] hasehKey);
        Task<bool> UserAlreadyExists(string username);
    }
}

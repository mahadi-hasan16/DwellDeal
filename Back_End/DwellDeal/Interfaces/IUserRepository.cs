using DwellDeal.Models.Entities;

namespace DwellDeal.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Authenticate(string username, string password);
    }
}

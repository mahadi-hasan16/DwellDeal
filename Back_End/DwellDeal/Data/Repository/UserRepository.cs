using DwellDeal.Interfaces;
using DwellDeal.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DwellDeal.Data.Repository
{
    public class UserRepository : IUserRepository
    {
        public readonly ApplicationDbContext _dbContext;

        public UserRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<User> Authenticate(string username, string password)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(user => user.Username == username && user.Password == password);

            if(user == null)
            {
                return null;
            }
            return user;
        }
    }
}

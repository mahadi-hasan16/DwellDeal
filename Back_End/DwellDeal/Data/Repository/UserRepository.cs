using System.Security.Cryptography;
using System.Text;
using DwellDeal.Interfaces;
using DwellDeal.Models.Entities;
using Microsoft.AspNetCore.Http.HttpResults;
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
            var user = await _dbContext.Users.FirstOrDefaultAsync(user => user.Username == username);

            if(user == null)
            {
                return null;
            }

            if (MatchHashedPassword(password, user.Password, user.PasswordKey))
                return user;
            else
                return null;
        }

        public void Register(string username, string password)
        {
            byte[] passwordHash, passwordKey;

            using(var hmac = new HMACSHA512())
            {
                passwordKey = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }

            User user = new User();
            user.Username = username;
            user.Password = passwordHash;
            user.PasswordKey = passwordKey;

            _dbContext.Users.Add(user);
        }

        public async Task<bool>UserAlreadyExists(string userName)
        {
            return await _dbContext.Users.AnyAsync(u => u.Username == userName);
        }
        
        public bool MatchHashedPassword(string password, byte[] hashedPassword, byte[] hashKey)
        {
            byte[] generatedHash;

            using(var hmac = new HMACSHA512(hashKey))
            {
                generatedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }

            /*for(int i = 0; i< generatedHash.Length; i ++)
            {
                if(generatedHash[i] != hashedPassword[i])
                    return false;
            }*/

           
            return generatedHash.SequenceEqual(hashedPassword);
        }
    }
}

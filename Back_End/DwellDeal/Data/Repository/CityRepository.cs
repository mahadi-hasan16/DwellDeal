using DwellDeal.Interfaces;
using DwellDeal.Models.DTOs;
using DwellDeal.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DwellDeal.Data.Repository
{
    public class CityRepository : ICityRepository
    {
        private readonly ApplicationDbContext _dbContext;
        public CityRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        public async Task AddCityAsync(City NewCity)
        {
            await _dbContext.Cities.AddAsync(NewCity);

            //throw new NotImplementedException();
        }

        public async Task<IEnumerable<City>> GetCitiesAsync()
        {
            var cities = await _dbContext.Cities.ToListAsync();
            return cities;

            //throw new NotImplementedException();
        }

        public async void RemoveCity(int CityId)
        {
            var city = await _dbContext.Cities.FindAsync(CityId);
            _dbContext.Cities.Remove(city);
            //throw new NotImplementedException();
        }
    }
}

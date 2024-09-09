using DwellDeal.Models.DTOs;
using DwellDeal.Models.Entities;

namespace DwellDeal.Interfaces
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetCitiesAsync();
        Task AddCityAsync(City NewCity);
        void RemoveCity(int CityId);
    }
}

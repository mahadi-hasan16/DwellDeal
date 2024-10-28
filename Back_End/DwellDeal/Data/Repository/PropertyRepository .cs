using DwellDeal.Interfaces;
using DwellDeal.Models.Entities;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DwellDeal.Data.Repository
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public PropertyRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void AddProperty(Property property)
        {
            _dbContext.Properties.AddAsync(property);
        }

        public void DeleteProperty(int id)
        {
            var property = _dbContext.Properties.FindAsync(id);
           // _dbContext.Properties.Remove();
        }

        public async Task<IEnumerable<Property>> GetPropertiesAsync(int SellRent)
        {
            var properties = await  _dbContext.Properties
            .Include(p => p.PropertyType)
            .Include(p => p.City)
            .Include(p => p.FurnishingType)
            .Where(p => p.SellRent == SellRent)
            .ToListAsync();
            return properties;
        }

    }
}
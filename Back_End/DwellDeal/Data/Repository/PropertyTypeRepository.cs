using DwellDeal.Interfaces;
using DwellDeal.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DwellDeal.Data.Repository
{
    public class PropertyTypeRepository: IPropertyTypeRepository
    {
        private readonly ApplicationDbContext _dbContext;
        public PropertyTypeRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<PropertyType>> GetPropertyTypesAsync()
        {
            return await _dbContext.PropertyTypes.ToListAsync();
        }

    }
}
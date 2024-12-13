using DwellDeal.Interfaces;
using DwellDeal.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DwellDeal.Data.Repository
{
    public class FurnishingTypeRepository : IFurnishingTypeRepository
    {
        private readonly ApplicationDbContext _dbContext;
        public FurnishingTypeRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<IEnumerable<FurnishingType>> GetFurnishingTypesAsync()
        {
            var furnushingTypes = await _dbContext.FurnishingTypes.ToListAsync();
            return furnushingTypes;
        }
    }
}
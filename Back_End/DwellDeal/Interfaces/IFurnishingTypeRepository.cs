using DwellDeal.Models.Entities;

namespace DwellDeal.Interfaces
{
    public interface IFurnishingTypeRepository
    {
         Task<IEnumerable<FurnishingType>> GetFurnishingTypesAsync();
    }
}
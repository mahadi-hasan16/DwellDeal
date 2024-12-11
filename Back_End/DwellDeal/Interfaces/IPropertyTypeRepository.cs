using DwellDeal.Models.Entities;

namespace DwellDeal.Interfaces
{
    public interface IPropertyTypeRepository
    {
         Task<IEnumerable<PropertyType>> GetPropertyTypesAsync();
    }
}
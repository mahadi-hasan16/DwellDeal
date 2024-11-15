using DwellDeal.Models.Entities;

namespace DwellDeal.Interfaces
{
    public interface IPropertyRepository
    {
         Task<IEnumerable<Property>>GetPropertiesAsync(int SellRent);
         Task<Property>GetPropertyDetailAsync(int id);
         void AddProperty(Property property);
         void DeleteProperty(int id);
    }
}
using System.ComponentModel.DataAnnotations;

namespace DwellDeal.Models.Entities
{
    public class PropertyType : BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}
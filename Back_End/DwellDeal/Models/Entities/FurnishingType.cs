using System.ComponentModel.DataAnnotations;

namespace DwellDeal.Models.Entities
{
    public class FurnishingType : BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}
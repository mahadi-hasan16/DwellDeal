using System.ComponentModel.DataAnnotations;

namespace DwellDeal.Models.Entities
{
    public class User : BaseEntity
    {
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public byte[] Password { get; set; }
        public byte[] PasswordKey { get; set; }
    }
}

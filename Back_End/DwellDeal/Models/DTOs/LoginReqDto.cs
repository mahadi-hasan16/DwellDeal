using Azure.Identity;

namespace DwellDeal.Models.DTOs
{
    public class LoginReqDto
    {
        public string Username {get;set;}
        public string Password { get; set; }
    }
}

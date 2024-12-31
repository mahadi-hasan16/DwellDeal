using Azure.Identity;

namespace DwellDeal.Models.DTOs.LoginDtos
{
    public class LoginReqDto
    {
        public string Username {get;set;}
        public string Password { get; set; }
    }
}

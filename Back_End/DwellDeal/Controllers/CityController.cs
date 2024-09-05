using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DwellDeal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Dhaka", "Chittagong", "Sylhet" };
        }
    }
}

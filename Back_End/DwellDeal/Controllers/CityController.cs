using System.Linq;
using DwellDeal.Data;
using DwellDeal.Models.DTOs;
using DwellDeal.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DwellDeal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public CityController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var cities = await _dbContext.Cities.ToListAsync();
            return Ok(cities);
        }

        [HttpPost("add/{cityName}")]
        public async Task<IActionResult> AddCity(string cityName)
        {
            var newCity = new City()
            {
                Name = cityName
            };

            await _dbContext.Cities.AddAsync(newCity);
            await _dbContext.SaveChangesAsync();
            
            return Ok(newCity);
        }

        [HttpDelete("delete/{Id}")]
        public async Task<IActionResult> DeleteCity(int Id)
        {
            var city = await _dbContext.Cities.FindAsync(Id);
            if(city is null)
            {
                return NotFound();
            }

            _dbContext.Cities.Remove(city);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}

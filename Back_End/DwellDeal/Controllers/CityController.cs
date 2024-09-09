using System.Linq;
using AutoMapper;
using DwellDeal.Data;
using DwellDeal.Interfaces;
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
        private readonly IUnitOfWork _unitOfWork;

        private readonly IMapper _mapper;
        public CityController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;

            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var cities = await _unitOfWork.CityRepository.GetCitiesAsync();

            var citiesDto = _mapper.Map<IEnumerable<CityDto>>(cities);

            /*var citiesDto = from city in cities
                            select new CityDto()
                            {
                                Id = city.Id,
                                Name = city.Name
                            };*/

            return Ok(citiesDto);
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddCityAsync(CityDto NewCity)
        {
            var city = _mapper.Map<City>(NewCity);

          /*  var city = new City()
            {
                Name = NewCity.Name
            }; */

            await _unitOfWork.CityRepository.AddCityAsync(city);
            await _unitOfWork.SaveChangesAsync();
            
            return StatusCode(201);
        }

        [HttpDelete("remove/{Id}")]
        public async Task<IActionResult> RemoveCity(int Id)
        {
            _unitOfWork.CityRepository.RemoveCity(Id);
            await _unitOfWork.SaveChangesAsync();
            return Ok();
        }
    }
}

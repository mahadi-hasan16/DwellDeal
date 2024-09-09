using AutoMapper;
using DwellDeal.Models.DTOs;
using DwellDeal.Models.Entities;

namespace DwellDeal.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City, CityDto>();
            CreateMap<CityDto, City>();
        }
    }
}

using AutoMapper;
using DwellDeal.Models.DTOs;
using DwellDeal.Models.Entities;

namespace DwellDeal.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City, CityDto>().ReverseMap();

            CreateMap<Photo, PhotoDto>().ReverseMap();

            CreateMap<Property, PropertyListDto>()
            .ForMember(destination => destination.City, option => option.MapFrom(source => source.City.Name))
            .ForMember(destination => destination.Country, option => option.MapFrom(source => source.City.Country))
            .ForMember(destination => destination.PropertyType, option => option.MapFrom(source => source.PropertyType.Name))
            .ForMember(destination => destination.FurnishingType, option => option.MapFrom(source => source.FurnishingType.Name));

            CreateMap<Property, PropertyDetailDto>()
            .ForMember(destination => destination.City, option => option.MapFrom(source => source.City.Name))
            .ForMember(destination => destination.Country, option => option.MapFrom(source => source.City.Country))
            .ForMember(destination => destination.PropertyType, option => option.MapFrom(source => source.PropertyType.Name))
            .ForMember(destination => destination.FurnishingType, option => option.MapFrom(source => source.FurnishingType.Name));

            CreateMap<PropertyType, KeyValuePairDto>().ReverseMap();

            CreateMap<FurnishingType, KeyValuePairDto>().ReverseMap();
        }
    }
}

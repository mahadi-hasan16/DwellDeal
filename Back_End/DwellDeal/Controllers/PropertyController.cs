using AutoMapper;
using DwellDeal.Interfaces;
using DwellDeal.Models.DTOs;
using DwellDeal.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DwellDeal.Controllers
{
    public class PropertyController : BaseController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public PropertyController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("list/{sellRent}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetPropertyList(int sellRent)
        {
            var properties = await _unitOfWork.PropertyRepository.GetPropertiesAsync(sellRent);
            var propertyListDto = _mapper.Map<IEnumerable<PropertyListDto>>(properties);
            return Ok(propertyListDto);
        }

        [HttpGet("detail/{id}")]
        public async Task<IActionResult> GetPropertyDetail(int id)
        {
            var propertyDetail = await _unitOfWork.PropertyRepository.GetPropertyDetailAsync(id);
            var propertyDetailDto = _mapper.Map<PropertyDetailDto>(propertyDetail);
            return Ok(propertyDetailDto);
        }
    }
}
using AutoMapper;
using DwellDeal.Interfaces;
using DwellDeal.Models.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DwellDeal.Controllers
{
    public class PropertyTypeController: BaseController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public PropertyTypeController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("list")]
        [AllowAnonymous]
        public async Task<IActionResult> GetPropertyTypes()
        {
            var propertyTypes = await _unitOfWork.PropertyTypeRepository.GetPropertyTypesAsync();
            var propertyTypeDto = _mapper.Map<IEnumerable<KeyValuePairDto>>(propertyTypes);

            return Ok(propertyTypeDto);
        }
    }
}
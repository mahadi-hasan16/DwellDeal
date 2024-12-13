using AutoMapper;
using DwellDeal.Data;
using DwellDeal.Interfaces;
using DwellDeal.Models.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DwellDeal.Controllers
{
    public class FurnishingTypeController : BaseController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public FurnishingTypeController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("list")]
        [AllowAnonymous]
        public async Task<IActionResult> GetFurnishingTypes()
        {
            var furnishingTypes = await _unitOfWork.FurnishingTypeRepository.GetFurnishingTypesAsync();

            var furnishingTypeDto = _mapper.Map<IEnumerable<KeyValuePairDto>>(furnishingTypes);

            return Ok(furnishingTypeDto);
        }
    }
}
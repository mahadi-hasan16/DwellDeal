using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DwellDeal.Interfaces;
using DwellDeal.Models.DTOs;
using DwellDeal.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace DwellDeal.Controllers
{
    [Authorize]
    public class ApplicationController : BaseController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _configuration;
        public ApplicationController(IUnitOfWork unitOfWork, IConfiguration configuration)
        {
            _unitOfWork = unitOfWork;
            _configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost("/register")]
        public async Task<IActionResult> Register(LoginReqDto loginReqDto)
        {
            if(await _unitOfWork.UserRepository.UserAlreadyExists(loginReqDto.Username))
            {
                return BadRequest("User already exists. Please try something else.");
            }

            _unitOfWork.UserRepository.Register(loginReqDto.Username, loginReqDto.Password);
            await _unitOfWork.SaveChangesAsync();

            return StatusCode(210);
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginReqDto loginReqDto)
        {
            var user = await _unitOfWork.UserRepository.Authenticate(loginReqDto.Username, loginReqDto.Password);

            if(user == null)
            {
                return Unauthorized();
            }

            var loginResDto = new LoginResDto()
            {
                Username = user.Username,
                Token = CreateJwt(user)
            };

            return Ok(loginResDto);
        }

        private string CreateJwt(User user)
        {
            var secretKey = _configuration.GetSection("Appsettings:Key").Value;
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            var signingCredential = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(1),
                SigningCredentials = signingCredential
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}

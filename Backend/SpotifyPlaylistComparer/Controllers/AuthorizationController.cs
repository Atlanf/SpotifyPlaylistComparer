using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpotifyPlaylistComparer.Model.Authorization;
using SpotifyPlaylistComparer.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        public IConfiguration _config { get; set; }
        private readonly IAuthorizationService _authService;

        public AuthorizationController(IConfiguration config, IAuthorizationService authService)
        {
            _authService = authService;
            _config = config;
        }

        [HttpPost("token")]
        public async Task<IActionResult> RequestAuthToken([FromBody] AccessTokenRequest tokenRequest)
        {
            var clientId = _config["Client:Id"];
            var secret = _config["Client:Secret"];
            
            if (tokenRequest.Code == null)
            {
                return BadRequest();
            }

            var token = await _authService.GetSpotifyAccessTokenAsync(tokenRequest, clientId, secret);

            return Ok(token);
        }

        [HttpPost("refresh")]
        public async Task<IActionResult> RequestRefreshToken([FromBody] RefreshAccessTokenRequest tokenRequest)
        {
            var clientId = _config["Client:Id"];
            var secret = _config["Client:Secret"];

            if (tokenRequest.RefreshToken == null)
            {
                return BadRequest();
            }

            var token = await _authService.RefreshAccessTokenAsync(tokenRequest, clientId, secret);

            return Ok(token);
        }

        [HttpGet("clientId")]
        public IActionResult GetClientId()
        {
            return Ok(_config["Client:Id"]);
        }
    }
}

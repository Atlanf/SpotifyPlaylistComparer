using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        [HttpPost("/request")]
        public IActionResult RequestAuthToken()
        {
            return Ok();
        }

        // Redirects to Spotify auth page
        // If User netrs creds -> redirects back to the application
        [HttpGet("/token")]
        public IActionResult GetAuthCode()
        {
            return Ok();
        }

        [HttpPost("/refresh")]
        public IActionResult RequestRefreshToken()
        {
            return Ok();
        }
    }
}

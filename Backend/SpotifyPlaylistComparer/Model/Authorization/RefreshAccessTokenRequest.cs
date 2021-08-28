using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Model.Authorization
{
    public class RefreshAccessTokenRequest
    {
        public string GrantType { get; set; } = "refresh_token";

        [Required]
        public string RefreshToken { get; set; }
    }
}

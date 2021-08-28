using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Model.Authorization
{
    public class AccessTokenRequest
    {
        public string GrantType { get; set; } = "authorization_code";
        
        [Required]
        public string Code { get; set; }

        public string RedirectUri { get; set; } = "http://localhost:3000/";
    }
}

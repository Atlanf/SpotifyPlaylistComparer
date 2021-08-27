using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Model
{
    public class AccessTokenRequest
    {
        public string GrantType { get; set; } = "authorization_code";
        public string Code { get; set; }
        public string RedirectUri { get; set; } = "http://localhost:3000/";
    }
}

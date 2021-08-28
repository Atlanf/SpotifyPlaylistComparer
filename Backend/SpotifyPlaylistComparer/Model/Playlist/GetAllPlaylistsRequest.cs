using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Model.Playlist
{
    public class GetAllPlaylistsRequest
    {
        [Required]
        public string AuthHeader { get; set; }

        [Range(1, 50)]
        public int Limit { get; set; }
        
        [Range(0, 100000)]
        public int Page { get; set; }
    }
}

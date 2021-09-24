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

        [Range(1, 50, ErrorMessage = "Limit must be less than 50.")]
        public int Limit { get; set; } = -1;

        [Range(0, 100000, ErrorMessage = "Invalid page number.")]
        public int Offset { get; set; } = -1;
    }
}

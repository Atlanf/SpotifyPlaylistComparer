using SpotifyPlaylistComparer.Model.Playlist;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Logic.Helpers
{
    public class PlaylistRequestMessageGenerator
    {
        public string PersonalPlaylistsEndpoint
        {
            get
            {
                return "https://api.spotify.com/v1/me/playlists";
            }
        }

        public HttpRequestMessage GeneratePersonalPlaylistsRequestMessage(GetAllPlaylistsRequest request)
        {
            var endpoint = PersonalPlaylistsEndpoint;
            if (request.Limit > 0)
            {
                endpoint += $"&limit={request.Limit}";
            }
            if (request.Offset > 0)
            {
                endpoint += $"&offset={request.Offset}";
            }
            var requestMessage = new HttpRequestMessage(HttpMethod.Get, endpoint);
            


            return requestMessage;
        }
    }
}

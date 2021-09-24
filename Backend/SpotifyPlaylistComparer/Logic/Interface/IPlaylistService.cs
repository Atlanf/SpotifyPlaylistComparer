using SpotifyPlaylistComparer.Model.Playlist;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Service.Interface
{
    public interface IPlaylistService
    {
        Task<GetAllPlaylistsResponse> GetAllPlaylistsAsync(GetAllPlaylistsRequest request);
    }
}

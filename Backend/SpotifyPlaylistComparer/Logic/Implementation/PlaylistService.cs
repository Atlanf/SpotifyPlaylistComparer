using SpotifyPlaylistComparer.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.Extensions.Logging;
using SpotifyPlaylistComparer.Model.Playlist;
using SpotifyPlaylistComparer.Logic.Helpers;

namespace SpotifyPlaylistComparer.Service.Implementation
{
    public class PlaylistService : IPlaylistService
    {
        private readonly ILogger<PlaylistService> _logger;
        private readonly HttpClient _client;
        public PlaylistService(HttpClient client, ILogger<PlaylistService> logger)
        {
            _client = client;
            _logger = logger;
        }

        public async Task<GetAllPlaylistsResponse> GetAllPlaylistsAsync(GetAllPlaylistsRequest request)
        {
            HttpResponseMessage response = null;
            var messageGenerator = new PlaylistRequestMessageGenerator();


            return null;
        }
    }
}

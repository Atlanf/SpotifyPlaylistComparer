using SpotifyPlaylistComparer.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.Extensions.Logging;

namespace SpotifyPlaylistComparer.Service.Implementation
{
    public class PlaylistService : IPlaylistService
    {
        private readonly ILogger<PlaylistService> _logger;
        public PlaylistService(ILogger<PlaylistService> logger)
        {
            _logger = logger;
        }


    }
}

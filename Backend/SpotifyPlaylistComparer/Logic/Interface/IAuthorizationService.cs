using SpotifyPlaylistComparer.Model.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Service
{
    public interface IAuthorizationService
    {
        Task<AccessTokenResponse> GetSpotifyAccessTokenAsync(AccessTokenRequest request, string clientId, string secret);

        Task<AccessTokenResponse> RefreshAccessTokenAsync(RefreshAccessTokenRequest request, string clientId, string secret);
    }
}

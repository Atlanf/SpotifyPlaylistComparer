using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using SpotifyPlaylistComparer.Model;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Microsoft.Extensions.Logging;
using System.Net;
using SpotifyPlaylistComparer.Logic.Helpers;

namespace SpotifyPlaylistComparer.Service.Implementation
{
    public class AuthorizationService : IAuthorizationService
    {
        private readonly HttpClient _client;
        private readonly ILogger<AuthorizationService> _logger;

        public AuthorizationService(HttpClient client, ILogger<AuthorizationService> logger)
        {
            _logger = logger;
            _client = client;
        }

        public async Task<AccessTokenResponse> GetSpotifyAccessTokenAsync(AccessTokenRequest request, string clientId, string secret)
        {
            HttpResponseMessage response = null;
            var requestMessageGenerator = new AuthRequestMessageGenerator();

            using (var requestMessage = requestMessageGenerator.GenerateAuthRequestMessage(request, clientId, secret))
            {
                response = await _client.SendAsync(requestMessage);

                _logger.LogInformation("GetSpotifyAccessTokenAsync response message: {@responseCode}", response.StatusCode);
            }

            if (response.StatusCode == HttpStatusCode.OK)
            {
                return JsonConvert.DeserializeObject<AccessTokenResponse>(await response.Content.ReadAsStringAsync());
            }

            return null;
        }
    }
}

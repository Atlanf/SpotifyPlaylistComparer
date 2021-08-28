using SpotifyPlaylistComparer.Model.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Logic.Helpers
{
    public class AuthRequestMessageGenerator
    {
        private readonly string _accessTokenEndpoint = "https://accounts.spotify.com/api/token";

        public string AccessTokenEndpoint 
        {
            get
            {
                return _accessTokenEndpoint;
            }
        }

        public HttpRequestMessage GenerateRefreshAccessTokenRequestMessage(RefreshAccessTokenRequest request, string clientId, string secret)
        {
            var requestMessage = new HttpRequestMessage(HttpMethod.Post, _accessTokenEndpoint);
            var authCreds = GenerateCredentialsString(clientId, secret);
            var content = GenerateRefreshAccessTokenRequestContent(request);

            requestMessage.IncludeAccessTokenRequestHeader(authCreds);
            requestMessage.Content = new StringContent(content, Encoding.UTF8, "application/x-www-form-urlencoded");

            return requestMessage;
        }

        public HttpRequestMessage GenerateAccessTokenRequestMessage(AccessTokenRequest request, string clientId, string secret)
        {
            var requestMessage = new HttpRequestMessage(HttpMethod.Post, _accessTokenEndpoint);
            var authCreds = GenerateCredentialsString(clientId, secret);
            var content = GenerateAccessTokenRequestContent(request);

            requestMessage.IncludeAccessTokenRequestHeader(authCreds);
            requestMessage.Content = new StringContent(content, Encoding.UTF8, "application/x-www-form-urlencoded");

            return requestMessage;
        }

        private string GenerateCredentialsString(string clientId, string secret)
        {
            return Convert.ToBase64String(Encoding.Default.GetBytes($"{clientId}:{secret}"));
        }

        private string GenerateAccessTokenRequestContent(AccessTokenRequest request)
        {
            return $"grant_type={request.GrantType}&code={request.Code}&redirect_uri={request.RedirectUri}";
        }

        private string GenerateRefreshAccessTokenRequestContent(RefreshAccessTokenRequest request)
        {
            return $"grant_type={request.GrantType}&refresh_token={request.RefreshToken}";
        }
    }
}

using SpotifyPlaylistComparer.Model;
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

        public HttpRequestMessage GenerateAuthRequestMessage(AccessTokenRequest request, string clientId, string secret)
        {
            var authCreds = GenerateCredentialsString(clientId, secret);
            var requestMessage = new HttpRequestMessage(HttpMethod.Post, _accessTokenEndpoint);
            var content = GenerateContent(request);

            requestMessage.Headers.Authorization = new AuthenticationHeaderValue("Basic", authCreds);
            requestMessage.Content = new StringContent(content, Encoding.UTF8, "application/x-www-form-urlencoded");

            return requestMessage;
        }

        private string GenerateCredentialsString(string clientId, string secret)
        {
            return Convert.ToBase64String(Encoding.Default.GetBytes($"{clientId}:{secret}"));
        }

        private string GenerateContent(AccessTokenRequest request)
        {
            return $"grant_type={request.GrantType}&code={request.Code}&redirect_uri={request.RedirectUri}";
        }
    }
}

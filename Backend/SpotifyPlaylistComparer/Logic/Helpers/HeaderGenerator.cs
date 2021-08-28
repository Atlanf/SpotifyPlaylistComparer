using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Logic.Helpers
{
    public static class HeaderGenerator
    {
        public static void IncludeAuthTokenHeader(this HttpRequestMessage message, string token)
        {
            message.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }

        public static void IncludeAccessTokenRequestHeader(this HttpRequestMessage message, string creds)
        {
            message.Headers.Authorization = new AuthenticationHeaderValue("Basic", creds);
        }
    }
}

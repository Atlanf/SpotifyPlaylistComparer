using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using System.IO;

namespace SpotifyPlaylistComparer
{
	public static class HttpClientExtensions
	{
		private static readonly JsonSerializer _jsonSerializer = new JsonSerializer();

		public static async Task<T> ReadAsJsonAsync<T>(this HttpContent httpContent)
		{
			using (var stream = await httpContent.ReadAsStreamAsync())
			{
				var jsonReader = new JsonTextReader(new StreamReader(stream));

				return _jsonSerializer.Deserialize<T>(jsonReader);
			}
		}

		public static Task<HttpResponseMessage> PostJsonAsync<T>(this HttpClient client, string url, T value, bool isAuth = false)
		{
			return SendJsonAsync<T>(client, HttpMethod.Post, url, value, isAuth);
		}
		public static Task<HttpResponseMessage> PutJsonAsync<T>(this HttpClient client, string url, T value)
		{
			return SendJsonAsync<T>(client, HttpMethod.Put, url, value);
		}

		public static Task<HttpResponseMessage> SendJsonAsync<T>(this HttpClient client, HttpMethod method, string url, T value, bool isAuth = false)
		{
			var stream = new MemoryStream();
			var jsonWriter = new JsonTextWriter(new StreamWriter(stream));

			_jsonSerializer.Serialize(jsonWriter, value);

			jsonWriter.Flush();

			stream.Position = 0;

			var request = new HttpRequestMessage(method, url)
			{
				Content = new StreamContent(stream)
			};

			if (isAuth)
            {
				request.Content.Headers.TryAddWithoutValidation("Content-Type", "application/x-www-form-urlencoded");
			}
			else
            {
				request.Content.Headers.TryAddWithoutValidation("Content-Type", "application/json");
			}
			

			return client.SendAsync(request);
		}
	}

}

using Microsoft.Extensions.DependencyInjection;
using SpotifyPlaylistComparer.Service.Implementation;
using SpotifyPlaylistComparer.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyPlaylistComparer.Service
{
    public static class LogicExtension
    {
        public static void AddLogicServices(this IServiceCollection services)
        {
            services.AddTransient<IAuthorizationService, AuthorizationService>();
            services.AddTransient<IPlaylistService, PlaylistService>();
        }
    }
}

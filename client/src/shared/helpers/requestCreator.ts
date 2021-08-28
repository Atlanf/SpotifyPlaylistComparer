import { API_SPOTIFY_AUTH_CODE, REDIRECT_URI } from "../const/apiRoutes";
import { scopes } from "../const/scopes";

export const createAccessTokenRequestString = (clientId: string): string => {
    var params = `client_id=${clientId}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}`;

    return `${API_SPOTIFY_AUTH_CODE}?${params}`;
}


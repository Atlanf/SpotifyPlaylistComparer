import axios from "axios";
import { API_BACKEND, API_SPOTIFY_AUTH_CODE } from "../../shared/apiRoutes";
import { createAccessTokenRequestString } from "../../shared/requestCreator";

const getClientId = async (): Promise<string> => {
    var result = "";
    
    await axios.get(API_BACKEND + "authorization/clientId").then((response) => {
        result = response.data;
    }).catch(() => {
        result = "";
    });

    return result;
}

export const getAccessCode = async () => {
    var clientId = "";

    await getClientId().then((id) => { clientId = id });
    window.location.href = createAccessTokenRequestString(clientId);
}

export const getAccessToken = async (): Promise<string> => {
    var result = "";


    return result;
}
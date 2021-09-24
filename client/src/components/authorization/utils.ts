import axios, { AxiosResponse } from "axios";
import { API_BACKEND, API_BACKEND_AUTH_TOKEN } from "../../shared/const/apiRoutes";
import { setExpireTimeInSeconds } from "../../shared/helpers/dateConverter";
import { setAccessToken } from "../../shared/helpers/localStorageWorker";
import { createAccessTokenRequestString } from "../../shared/helpers/requestCreator";
import { IAccessToken } from "../../shared/interface/authorization.interface";

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

export const getAccessToken = async (code: string): Promise<boolean> => {
    let recieved: boolean = false;

    if (code !== null) {
        await axios.post(API_BACKEND_AUTH_TOKEN, {code}).then((response:AxiosResponse<IAccessToken>) => {
            let token: IAccessToken = response.data;
            token.expires_At = setExpireTimeInSeconds(token.expires_In);
            setAccessToken(response.data);
            recieved = true;
            return recieved;
        }).catch(() => {
            window.location.href = "/signin";
            recieved = false;
        })
    }

    return recieved;
}
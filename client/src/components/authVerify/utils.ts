import axios from "axios";
import { API_BACKEND_REFRESH_TOKEN } from "../../shared/const/apiRoutes";
import { setExpireTimeInSeconds } from "../../shared/helpers/dateConverter";
import { getStoredAccessToken, setAccessToken } from "../../shared/helpers/localStorageWorker";
import { IAccessToken, IRefreshAccessTokenRequest } from "../../shared/interface";

export const sendRefreshToken = async (): Promise<boolean> => {
    var recieved: boolean = false;
    var storedAccessToken: IAccessToken | null = getStoredAccessToken();

    if (storedAccessToken !== null) {
        var requestBody: IRefreshAccessTokenRequest = {refreshToken: storedAccessToken.refresh_Token}
        await axios.post(API_BACKEND_REFRESH_TOKEN, requestBody)
            .then((response) => {
                let token: IAccessToken = response.data;
                token.expires_At = setExpireTimeInSeconds(token.expires_In);
                setAccessToken(response.data);
                recieved = true;
            }
            ).catch((error) => {
                recieved = false;
            });
    }

    return recieved; 
}
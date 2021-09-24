import { IAccessToken } from "../interface";
import { getStoredAccessToken } from "./localStorageWorker";
import { TokenVerifier } from "./tokenVerifier";

export const authHeader = () => {
    var result = {};
    var token = getStoredAccessToken();

    if (token !== null) {
        return {Authorization: "Bearer " + token.access_Token};
    }

    return result;
}
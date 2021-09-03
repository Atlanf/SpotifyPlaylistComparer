import { IAccessToken } from "../interface";
import { tokenExists } from "./tokenExists";

export const authHeader = () => {
    var result = {};

    if (tokenExists()) {
        var user = JSON.parse(localStorage.getItem("user")!) as IAccessToken;
        
        return {Authorization: "Bearer " + user.access_Token};
    }

    return result;
}
import { IAccessToken } from "../interface";

export const tokenExists = (): boolean => {
    var userJson = localStorage.getItem("user");
    
    if (userJson === null) {
        return false;
    }

    return true;
}
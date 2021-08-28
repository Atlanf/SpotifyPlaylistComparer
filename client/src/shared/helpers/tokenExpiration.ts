import { IAccessToken } from "../interface";

/* TODO: IMPLEMENT (?) */
export const expired = (): boolean => {
    var token: IAccessToken = JSON.parse(localStorage.getItem("user")!) as IAccessToken;

    

    return true;
}
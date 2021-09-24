import { IAccessToken } from "../interface"


export const setAccessToken = (token: IAccessToken) => {
    localStorage.setItem("user", JSON.stringify(token));
}

export const getStoredRefreshToken = (): string => {
    var refreshToken = "";
    
    var accessToken: string | null = localStorage.getItem("user");
    if (accessToken !== null) {
        refreshToken = (JSON.parse(accessToken) as IAccessToken).refresh_Token;
    }

    return refreshToken;
}

export const getStoredAccessToken = (): IAccessToken | null => {
    var token = localStorage.getItem("user");
    if (token !== null) {
        return JSON.parse(token) as IAccessToken;
    }
    return null;
}

export const removeStoredAccessToken = () => {
    localStorage.removeItem("user");
}
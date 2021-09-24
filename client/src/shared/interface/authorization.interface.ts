export interface IAccessToken {
    access_Token: string,
    token_Type: string,
    scope: string,
    expires_In: number,
    refresh_Token: string,
    expires_At: number
}

export interface IRefreshAccessTokenRequest {
    refreshToken: string
}
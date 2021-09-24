import React, {useState, useEffect} from "react";
import TestComponent from "../components/testComponent";
import { IAccessToken } from "../shared/interface";
import { AuthorizedRequestSender } from "../shared/helpers/authorizedRequestSender";
import { CurrentUserPlaylists } from "../components/currentUserPlaylists";
import { TokenVerifier } from "../shared/helpers/tokenVerifier";
import { Link, NavLink } from "react-router-dom";

const isAuthorized: boolean = TokenVerifier.tokenExists();

export const HomePage: React.FC = () => {
    let token: IAccessToken = JSON.parse(localStorage.getItem("user")!) as IAccessToken;
    return (
        <div>
            <h1>You are currently on Home page</h1>
            <p>Your token is: {token.access_Token}</p>
            <NavLink to="/signin">Sign in</NavLink>
            <CurrentUserPlaylists />
        </div>
    )
}
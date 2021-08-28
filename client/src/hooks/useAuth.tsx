import {useState, useEffect} from "react";
import axios from "axios";

import {IAccessToken} from "../shared/interface";
import { API_BACKEND_AUTH_TOKEN } from "../shared/const/apiRoutes";

interface IProps {
    code: string | null;
}

export const useAuth = ({code}: IProps) => {
    const [accessToken, setAccessToken] = useState<IAccessToken>();

    useEffect(() => {
        axios.post(API_BACKEND_AUTH_TOKEN, {code}).then((response) => {
            window.history.pushState({}, "", "/");
            setAccessToken(response.data);
            localStorage.setItem("user", response.data);
        }).catch(() => {
            window.location.href = "/";
        })
    }, [code]);

    console.log(accessToken);

    return accessToken;
}
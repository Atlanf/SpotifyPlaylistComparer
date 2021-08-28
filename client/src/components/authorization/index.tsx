import React, {useState} from "react";
import { API_SPOTIFY_AUTH_CODE } from "../../shared/const/apiRoutes";
import { getAccessCode } from "./utils";

export const Authorization: React.FC = () => {
    const [clientId, setClientId] = useState("");

    return (
        <div>
            <input type="button" onClick={(event) => { handleAuthorize(event, setClientId); }} value="Sign In" />
            <a href={API_SPOTIFY_AUTH_CODE}>Login here</a>
            <h1>{clientId}</h1>
        </div>
    )
}

function handleAuthorize(e: React.MouseEvent<HTMLElement>, setClientId: React.Dispatch<React.SetStateAction<string>>) {
    e.preventDefault();

    getAccessCode();
}
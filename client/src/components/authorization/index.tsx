import React, {useState, useEffect} from "react";
import { LoadingSpinner } from "../loadingSpinner";
import { getAccessCode, getAccessToken } from "./utils";

const code = new URLSearchParams(window.location.search).get("code");

export const Authorization: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [tokenRecieved, setTokenRecieved] = useState<boolean>(false);

    useEffect(() => {
        if (code != null && !tokenRecieved) {
            setLoading(true);
            getAccessToken(code).then((token) => { setTokenRecieved(token) });
        }
        if (tokenRecieved) {
            setLoading(false);
            window.location.href = "/";
        }
    }, [code, tokenRecieved]);

    const input = <input type="button" onClick={(event) => { handleAuthorize(event); }} value="Sign In" />;

    return (
        <div>
            {isLoading ? <LoadingSpinner /> : input}
        </div>
    )
}

function handleAuthorize(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    getAccessCode();
}
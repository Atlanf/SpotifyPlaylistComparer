import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useLocation, withRouter } from "react-router-dom";
import { removeStoredAccessToken } from "../../shared/helpers/localStorageWorker";
import { TokenVerifier } from "../../shared/helpers/tokenVerifier";
import { sendRefreshToken } from "./utils";

const AuthVerify: React.FC = () => {
    const history = useHistory();
    const location = useLocation();
    const [redirect, setRedirect] = useState(false);
    var recieved: boolean = false;
    console.log("AuthVerify fired");
    useEffect(() => {
        let expired = TokenVerifier.tokenExpired();
        if (expired !== null) {
            if (expired) {
                // send refresh token; get new access token
                sendRefreshToken().then((res) => recieved = res);
                if (!recieved) {
                    removeStoredAccessToken();
                    setRedirect(true);
                }
                else {
                    setRedirect(false);
                }
            }
            else {
                // token is OK
                setRedirect(false);
            }
        }
        else {
            // user was not authenticated
            setRedirect(true);
        }
    }, [location]);
    if (redirect) {
        return <Redirect to="/signin" />
    }
    return (
        <div>

        </div>
    )
}

export const AuthVerification = withRouter(AuthVerify);
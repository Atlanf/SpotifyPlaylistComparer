import { IAccessToken } from "../interface";
import { getCurrentTimeInSeconds } from "./dateConverter";

export class TokenVerifier {
    static tokenExpired(): boolean | null {
        let userToken: string | null = localStorage.getItem("user");
        console.log(userToken);
        if (userToken !== null) {
            let userObject = JSON.parse(userToken) as IAccessToken;
            console.log("expires at(seconds): " + userObject.expires_At);
            console.log("current time in seconds: " + getCurrentTimeInSeconds());
            if (userObject.expires_At <= getCurrentTimeInSeconds()) {

                return true;
            }
            else {
                return false;
            }
        }
        
        return null;
    }

    static tokenExists(): boolean {
        let userToken: string | null = localStorage.getItem("user");

        if (userToken !== null) {
            return true
        }
        else {
            return false;
        }
    }
}
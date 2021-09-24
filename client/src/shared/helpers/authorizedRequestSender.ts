import axios from "axios";

export class AuthorizedRequestSender {
    sendGet(getRequest: (...args: any[]) => any, uri: string, ...args: any[]) {
        console.log("In AuthorizedRequestSender");
        getRequest(uri, args);
        
    }
}
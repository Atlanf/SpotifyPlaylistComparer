import axios from "axios";
import React, {useEffect} from "react";
import { API_BACKEND } from "../../shared/const/apiRoutes";
import { authHeader } from "../../shared/helpers/authHeader";

export default function TestComponent() {
    useEffect(() => {
        let result = axiosResult();
    })

    return (<div>

    </div>)
}

const axiosResult = () => {
    var authHead = authHeader();
    console.log(authHead);
    const config = {
        headers: {

        }
    }
    Object.assign(config.headers, authHeader());

    console.log(config);

    axios.get(API_BACKEND + "authorization/testPath", config).then((response) => {
        console.log(response.data);
    })
}
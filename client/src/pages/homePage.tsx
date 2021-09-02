import React, {useState, useEffect} from "react";
import { tokenExists } from "../shared/helpers/tokenExists";

const isAuthorized: boolean = tokenExists();

export const HomePage: React.FC = () => {
    return (
        <div>
            <h1>You are currently on Home page</h1>
        </div>
    )
}
import React, {useState, useEffect} from "react";
import TestComponent from "../components/testComponent";
import { tokenExists } from "../shared/helpers/tokenExists";

const isAuthorized: boolean = tokenExists();

export const HomePage: React.FC = () => {
    return (
        <div>
            <TestComponent />
            <h1>You are currently on Home page</h1>
        </div>
    )
}
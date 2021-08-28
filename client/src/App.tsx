import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Authorization } from './components';
import { Dashboard } from './components/dashboard';
import { HomePage } from './pages/homePage';

import { tokenExists } from './shared/helpers/tokenExists';


const code = new URLSearchParams(window.location.search).get("code");
const isAuthenticated: boolean = tokenExists();

function App() {
    return (
        <BrowserRouter>
            <div>
                {code ? <Dashboard code={code} /> : <Authorization/> }
            </div>
        </BrowserRouter>
    );
}

export default App;

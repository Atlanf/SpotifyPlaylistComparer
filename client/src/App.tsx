import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Authorization } from './components';
import { AuthVerification } from './components/authVerify';
import { ComparerPage } from './pages/comparerPage';
import { HomePage } from './pages/homePage';

import { TokenVerifier } from './shared/helpers/tokenVerifier';

const isAuthenticated: boolean = TokenVerifier.tokenExists();

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signin" component={Authorization} />
                <Route exact path="/comparer" render={() => 
                    isAuthenticated ? <ComparerPage /> : <Redirect to="/signin" />
                }/>
            </Switch>
            <AuthVerification />
        </BrowserRouter>
    );
}

export default App;

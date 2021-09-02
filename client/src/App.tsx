import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Authorization } from './components';
import { ComparerPage } from './pages/comparerPage';
import { HomePage } from './pages/homePage';

import { tokenExists } from './shared/helpers/tokenExists';

const isAuthenticated: boolean = tokenExists();

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
        </BrowserRouter>
    );
}

export default App;

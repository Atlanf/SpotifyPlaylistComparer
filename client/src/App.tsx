import React from 'react';
import { Authorization } from './components';
import { Dashboard } from './components/dashboard';

const code = new URLSearchParams(window.location.search).get("code");

function App() {
    return (
        <div>
            {code ? <Dashboard code={code} /> : <Authorization/> }
        </div>
    );
}

export default App;

import React from 'react';
import {useRoutes} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    const routes = useRoutes()
    return (
        <div>
            <Router>
                {routes}
            </Router>
        </div>
    );
}

export default App;

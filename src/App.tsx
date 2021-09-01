import React from "react";

import { Route, Switch } from "react-router-dom";

import { Home, PageEnter, Signin } from "./pages";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Signin} />
                <Route path="/enter" component={PageEnter} />
            </Switch>
        </div>
    );
}

export default App;

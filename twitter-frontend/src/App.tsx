import React from "react";

import { Route } from "react-router-dom";

import { Home, PageEnter, Signin } from "./pages";

function App() {
    return (
        <div className="App">
            <Route path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Signin />
            </Route>
            <Route exact path="/enter">
                <PageEnter />
            </Route>
        </div>
    );
}

export default App;

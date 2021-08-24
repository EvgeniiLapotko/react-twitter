import React from "react";

import { Route } from "react-router-dom";

import { Home, PageEnter, Signin } from "./pages";

function App() {
    return (
        <div className="App">
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <Signin />
            </Route>
            <Route path="/enter">
                <PageEnter />
            </Route>
        </div>
    );
}

export default App;

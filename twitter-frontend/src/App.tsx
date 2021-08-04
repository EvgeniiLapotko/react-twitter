import React from "react";
import Signin from "./pages/Signin";
import PageEnter from "./pages/pageEnter/PageEnter";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

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

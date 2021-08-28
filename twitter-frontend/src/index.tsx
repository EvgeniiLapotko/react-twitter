import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

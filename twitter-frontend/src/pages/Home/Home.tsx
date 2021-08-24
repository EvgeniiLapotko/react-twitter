import React from "react";
import { Link } from "react-router-dom";
import "home.scss";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Войти</Link>
        </div>
    );
}

export default Home;

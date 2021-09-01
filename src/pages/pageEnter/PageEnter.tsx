import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./enterStyle.scss";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function PageEnter() {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    return (
        <div className="wrapper-enter">
            <div className="enter">
                <div className="enter-icon">
                    <TwitterIcon className="enter-icon-twitter" />
                </div>
                <div className="enter-title">Войти в Твиттер</div>
                <div className="enter-form">
                    <form onSubmit={handleSubmit}>
                        <div className="enter-form-inputBlock">
                            <TextField
                                id="outlined-basic"
                                label="Телефон или email"
                                variant="outlined"
                                className="enter-form-input"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Пароль"
                                variant="outlined"
                                className="enter-form-input"
                            />
                        </div>

                        <div className="enter-btn">
                            <Link to="/home">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Войти
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="enter-fotter">
                    <Link to="/login" className="enter-fotter-link">
                        Забыли пароль
                    </Link>
                    <Link to="/login" className="enter-fotter-link">
                        Зарегистрироваться в Твиттере
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageEnter;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import { Button } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    wrapper: {
        display: "flex",
        height: "100vh",
    },
    blueSide: {
        backgroundColor: "#aedef9",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
    },
    blueSideWrapper: {
        position: "relative",
        maxWidth: 380,
    },
    blueSideTwitterBG: {
        position: "absolute",
        fontSize: 1200,
        top: "-40%",
    },
    blueSideList: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        color: "#fff",
        "& h6": {
            fontWeight: 700,
        },
        "& li": {
            display: "flex",
            alignItems: "center",
            marginBottom: 15,
            fontSize: 20,
        },
    },
    blueSideListIcon: {
        paddingRight: 10,
        fontSize: 28,
    },

    loginSide: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hiden",
        position: "relative",
    },
    twitterIcon: {
        fontSize: 50,
    },
    loginSideWrapper: {
        maxWidth: 380,
        padding: "0 10px",
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 40,
        marginTop: 15,
    },
    loginSideBtn: {
        margin: "10px 0",
    },
    loginSideSubtitle: {
        marginBottom: 10,
    },
}));

function Signin() {
    const classes = useStyle();
    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <TwitterIcon
                    className={classes.blueSideTwitterBG}
                    color="primary"
                />
                <div className={classes.blueSideWrapper}>
                    <ul className={classes.blueSideList}>
                        <li>
                            <SearchIcon className={classes.blueSideListIcon} />
                            <Typography variant="h6">
                                Читай о том, что тебе нитересно
                            </Typography>
                        </li>
                        <li>
                            <PeopleOutlineIcon
                                className={classes.blueSideListIcon}
                            />
                            <Typography variant="h6">
                                Узнайте, о чем говорят в мире
                            </Typography>
                        </li>
                        <li>
                            <ModeCommentOutlinedIcon
                                className={classes.blueSideListIcon}
                            />
                            <Typography variant="h6">
                                Присоединяйтесь к сообществу
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <div>
                        <TwitterIcon
                            className={classes.twitterIcon}
                            color="primary"
                        />
                    </div>
                    <Typography variant="h2" className={classes.loginSideTitle}>
                        В курсе происходящего
                    </Typography>
                    <Typography>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
                    </Typography>

                    <div className="btn-wrapper">
                        <Button
                            className={classes.loginSideBtn}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Зарегестрироваться
                        </Button>
                        <Button
                            className={classes.loginSideBtn}
                            variant="outlined"
                            color="primary"
                            fullWidth
                        >
                            Войти
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;

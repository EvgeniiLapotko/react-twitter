import React from "react";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import FlareIcon from "@material-ui/icons/Flare";

import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Input,
    InputAdornment,
    Paper,
    Box,
} from "@material-ui/core";

import { Tweet, Navbar } from "../../components";

import "./home.scss";

export const useHomeStyle = makeStyles(() => ({
    gridContainer: {
        height: "100vh",
    },
    twitterPaper: {
        borderRadius: "0",
        borderTop: "none",
        boorderBottom: "none",
        height: "100%",
    },
    homeTitleWrapper: {
        borderRight: "none",
        borderLeft: "none",

        borderRadius: "0",
    },
    homeTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 15px",
        "& h6": {
            fontWeight: "700",
        },
    },
    homeTitleIcon: {
        color: "#1da1f2",
        fontSize: "30px",
    },

    searchUnderline: {
        "&::before": {
            borderBottom: "none",
        },
    },
    twittWrapper: {
        borderRadius: "0",
        borderLeft: "none",
        borderRight: "none",
        padding: "15px",
        transition: "all 0.3s",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgb(244, 248, 249)",
        },
    },
    twittAvatar: {
        display: "flex",
        justifyContent: "center",
    },
    twittInfo: {
        position: "relative",
        paddingRight: "50px",
    },

    twittTitleButton: {
        padding: "6px",
        position: "absolute",
        top: "2px",
        right: "10px",
    },
    iconBox: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "450px",
        position: "relative",
        left: "-15px",
    },
    iconBoxItem: {
        "& svg:hover": {
            color: "#1da1f2",
        },
        "&:hover": {
            "& span": {
                color: "#1da1f2",
            },
        },
    },
    tweetAvatar: {
        width: "65px",
        height: "65px",
    },
    navBarList: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        li: {
            textAlign: "center",
            marginTop: 15,
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
        },
    },
    navBarIcon: {
        fontSize: 36,
    },
    navBarLabel: {
        fontWeight: 700,
        fontSize: 20,
        paddingLeft: 25,
    },
    navBarIconButton: {
        borderRadius: 35,
        padding: "10px 15px",
        transition: "all 0.25s",
        "&:hover": {
            "& h6": {
                color: "#1da1f2",
            },
            "& svg": {
                color: "#1da1f2 !important",
            },
        },
    },
    btnNavbar: {
        marginTop: 30,
        padding: "25px",
    },
}));

function Home() {
    const classes = useHomeStyle();
    return (
        <section className="home">
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item xs={2} sm={3}>
                    <Navbar classes={classes} />
                </Grid>
                <Grid item xs={6}>
                    <Paper variant="outlined" className={classes.twitterPaper}>
                        <Paper
                            variant="outlined"
                            className={classes.homeTitleWrapper}
                        >
                            <Box className={classes.homeTitle}>
                                <Typography variant="h6">Главная</Typography>
                                <IconButton>
                                    <FlareIcon
                                        className={classes.homeTitleIcon}
                                    />
                                </IconButton>
                            </Box>
                        </Paper>
                        {[
                            ...new Array(10).fill(
                                <Tweet
                                    classes={classes}
                                    text={
                                        "Когда мне кажется, что я вот вот брошу все и уеду в Новосибирск работать официанткой (не в поликлинику же идти), я подвожу итоги того, что я уже сделала здесь. И это не считая путешествий, знакомств и подработок. Вроде я даже рада, что универ настолько критично оценил диплом НГУ"
                                    }
                                    user={{
                                        avatar: "https://images.unsplash.com/photo-1440504738219-a74a11143d50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                        fullname: "Jen Simmons",
                                        username: "@jensimmons",
                                    }}
                                />
                            ),
                        ]}
                    </Paper>
                </Grid>
                <Grid item xs={3} className="search">
                    <Input
                        className="search__form-input"
                        id="input-with-icon-adornment"
                        placeholder={"Поиск в Твиттере"}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchRoundedIcon className="search__form-input-icon" />
                            </InputAdornment>
                        }
                        fullWidth
                    />
                </Grid>
            </Grid>
        </section>
    );
}

export default Home;

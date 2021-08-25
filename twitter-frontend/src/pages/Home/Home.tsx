import React from "react";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import FlareIcon from "@material-ui/icons/Flare";
import DotsIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Input,
    InputAdornment,
    Paper,
    Box,
    Avatar,
} from "@material-ui/core";

import "./home.scss";

const useHomeStyle = makeStyles(() => ({
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
        borderBottom: "none",
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
}));

function Home() {
    const classes = useHomeStyle();
    return (
        <section className="home">
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item xs={2} sm={3}>
                    <ul className="home__item-list">
                        <li>
                            <IconButton color="primary">
                                <TwitterIcon
                                    color="primary"
                                    className="home__item-list-icon"
                                />
                            </IconButton>
                        </li>

                        <li>
                            <IconButton>
                                <SearchRoundedIcon className="home__item-list-icon" />
                                <Typography
                                    className="home__item-list-label"
                                    variant="h6"
                                >
                                    Поиск
                                </Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <NotificationsOutlinedIcon className="home__item-list-icon" />
                                <Typography
                                    className="home__item-list-label"
                                    variant="h6"
                                >
                                    Уведомления
                                </Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <EmailOutlinedIcon className="home__item-list-icon" />
                                <Typography
                                    className="home__item-list-label"
                                    variant="h6"
                                >
                                    Сообщения
                                </Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <BookmarkBorderOutlinedIcon className="home__item-list-icon" />
                                <Typography
                                    className="home__item-list-label"
                                    variant="h6"
                                >
                                    Закладки
                                </Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <ListAltRoundedIcon className="home__item-list-icon" />
                                <Typography
                                    className="home__item-list-label"
                                    variant="h6"
                                >
                                    Список
                                </Typography>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <PersonOutlineOutlinedIcon className="home__item-list-icon" />
                                <Typography
                                    className="home__item-list-label"
                                    variant="h6"
                                >
                                    Профиль
                                </Typography>
                            </IconButton>
                        </li>
                    </ul>
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
                        <Paper
                            variant="outlined"
                            className={classes.twittWrapper}
                        >
                            <Grid container spacing={1}>
                                <Grid
                                    item
                                    xs={2}
                                    className={classes.twittAvatar}
                                >
                                    <Avatar alt="avatar">A</Avatar>
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
                                    className={classes.twittInfo}
                                >
                                    <Typography>
                                        <b>I Am Developer</b> @iamdeveloper
                                    </Typography>

                                    <IconButton
                                        className={classes.twittTitleButton}
                                    >
                                        <DotsIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
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

import React from "react";
import { Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import FlareIcon from "@material-ui/icons/Flare";
import SettingsIcon from "@material-ui/icons/Settings";

import { Typography, Paper, Box, CircularProgress } from "@material-ui/core";

import {
    Tweet,
    Navbar,
    SerachFormInput,
    Thems,
    RecomendFollow,
    AddedTweet,
} from "../../components";

import { useHomeStyle } from "./theme";
import { useDispatch, useSelector } from "react-redux";

import {
    selectIsErrorTweets,
    selectIsLoadingTweets,
    selectTweetsItem,
} from "../../store/ducks/tweets/selectors";
import { fetchTags } from "../../store/ducks/tags/actionsCreators/actionCreators";
import { fetchTweets } from "../../store/ducks/tweets/actionsCreators/actionCreators";
import {
    selectIsErrorTags,
    selectIsLoadingTags,
    selectTagsItem,
} from "../../store/ducks/tags/selectors";
import {
    selectIsErrorRecomend,
    selectIsLoadingRecomend,
    selectRecomendUsersItem,
} from "../../store/ducks/recomendUsers/selectors";
import { fetchRecomendUsers } from "../../store/ducks/recomendUsers/actionsCreators/actionCreators";

import FullTweet from "./components/FullTweet";

const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyle();
    const dispatch = useDispatch();

    const tweets = useSelector(selectTweetsItem);
    const tags = useSelector(selectTagsItem);
    const recommendUsers = useSelector(selectRecomendUsersItem);

    const isLoading = useSelector(selectIsLoadingTweets);
    const isLoadingTag = useSelector(selectIsLoadingTags);
    const isLoadingRecommendUser = useSelector(selectIsLoadingRecomend);

    const isErrorTweets = useSelector(selectIsErrorTweets);
    const isErrorTags = useSelector(selectIsErrorTags);
    const isErrorRecommendUsers = useSelector(selectIsErrorRecomend);

    React.useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
        dispatch(fetchRecomendUsers());
    }, [dispatch]);

    return (
        <section className={classes.home}>
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item xs={2} sm={3}>
                    <Navbar classes={classes} />
                </Grid>
                <Grid item xs={6}>
                    <Paper variant="outlined" className={classes.twitterPaper}>
                        <Route path={["/home"]}>
                            <Paper
                                variant="outlined"
                                className={classes.homeTitleWrapper}
                            >
                                <Box className={classes.homeTitle}>
                                    <Typography variant="h6">Твиты</Typography>
                                    <IconButton>
                                        <FlareIcon
                                            className={classes.homeTitleIcon}
                                        />
                                    </IconButton>
                                </Box>
                            </Paper>
                        </Route>
                        <Route path={["/tweet"]}>
                            <Paper
                                variant="outlined"
                                className={classes.homeTitleWrapper}
                            >
                                <Box className={classes.homeTitle}>
                                    <div className={classes.tweetTitle}>
                                        <Link to="/home">
                                            <IconButton color="primary">
                                                <ArrowBackIcon />
                                            </IconButton>
                                        </Link>

                                        <Typography variant="h6">
                                            Твитнуть
                                        </Typography>
                                    </div>

                                    <IconButton>
                                        <FlareIcon
                                            className={classes.homeTitleIcon}
                                        />
                                    </IconButton>
                                </Box>
                            </Paper>
                        </Route>

                        <Route path={["/home", "/search"]}>
                            <AddedTweet classes={classes} rowsMin={5} />
                        </Route>
                        <Route path={["/home"]} exact>
                            {isErrorTweets ? (
                                <h1 style={{ textAlign: "center" }}>
                                    Ничего не найдено проверьте соединение с
                                    интернетом
                                </h1>
                            ) : isLoading ? (
                                <div
                                    style={{
                                        textAlign: "center",
                                        marginTop: "25px",
                                    }}
                                >
                                    <CircularProgress />
                                </div>
                            ) : (
                                tweets
                                    .map((item) => (
                                        <Tweet
                                            key={item._id}
                                            id={item._id}
                                            classes={classes}
                                            text={item.text}
                                            user={{
                                                avatar: item.user.avatar,
                                                fullname: item.user.fullname,
                                                username: item.user.username,
                                            }}
                                        />
                                    ))
                                    .reverse()
                            )}
                        </Route>
                        <Route path="/tweet/:id">
                            <FullTweet />
                        </Route>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.aside}>
                        <SerachFormInput />
                        <Paper className={classes.thems}>
                            <div className={classes.themsTitle}>
                                <Typography variant="h6">
                                    Актуальные темы
                                </Typography>
                                <IconButton color="primary">
                                    <SettingsIcon />
                                </IconButton>
                            </div>
                            {isErrorTags ? (
                                <h6
                                    style={{
                                        textAlign: "center",
                                        paddingBottom: "25px",
                                    }}
                                >
                                    Ничего не найдено
                                </h6>
                            ) : isLoadingTag ? (
                                <div
                                    style={{
                                        textAlign: "center",
                                        paddingTop: "25px",
                                        paddingBottom: "25px",
                                    }}
                                >
                                    <CircularProgress />
                                </div>
                            ) : (
                                tags.map((item) => (
                                    <Thems
                                        key={item._id}
                                        classes={classes}
                                        title={item.tags}
                                        tweets={item.count}
                                    />
                                ))
                            )}
                        </Paper>
                        <Paper className={classes.thems}>
                            <div className={classes.themsTitle}>
                                <Typography variant="h6">
                                    Кого читать
                                </Typography>
                            </div>
                            {isErrorRecommendUsers ? (
                                <h6
                                    style={{
                                        textAlign: "center",
                                        paddingBottom: "25px",
                                    }}
                                >
                                    Нет рекомендаций
                                </h6>
                            ) : isLoadingRecommendUser ? (
                                <div
                                    style={{
                                        textAlign: "center",
                                        paddingTop: "25px",
                                        paddingBottom: "25px",
                                    }}
                                >
                                    <CircularProgress />
                                </div>
                            ) : (
                                recommendUsers.map((item) => (
                                    <RecomendFollow
                                        key={item._id}
                                        classes={classes}
                                        avatar={item.avatar}
                                        user={{
                                            fullname: item.fullname,
                                            username: item.username,
                                        }}
                                    />
                                ))
                            )}
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default Home;

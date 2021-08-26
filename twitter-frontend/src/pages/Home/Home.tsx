import React from "react";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";

import FlareIcon from "@material-ui/icons/Flare";
import SettingsIcon from "@material-ui/icons/Settings";

import { Typography, Paper, Box } from "@material-ui/core";

import {
    Tweet,
    Navbar,
    SerachFormInput,
    Thems,
    RecomendFollow,
    AddedTweet,
} from "../../components";

import { useHomeStyle } from "./theme";

const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyle();
    return (
        <section className={classes.home}>
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
                        <AddedTweet classes={classes} />

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
                            {[
                                ...new Array(3).fill(
                                    <Thems
                                        classes={classes}
                                        title={"Kabul"}
                                        tweets={156}
                                    />
                                ),
                            ]}
                        </Paper>
                        <Paper className={classes.thems}>
                            <div className={classes.themsTitle}>
                                <Typography variant="h6">
                                    Кого читать
                                </Typography>
                            </div>
                            {[
                                ...new Array(2).fill(
                                    <RecomendFollow
                                        avatar="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                        classes={classes}
                                        user={{
                                            fullname: "Fursona Pins",
                                            username: "@FursonaPins",
                                        }}
                                    />
                                ),
                            ]}
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default Home;

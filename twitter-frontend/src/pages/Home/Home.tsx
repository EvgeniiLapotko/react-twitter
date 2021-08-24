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
import { Typography, Input, InputAdornment } from "@material-ui/core";

import "./home.scss";

function Home() {
    return (
        <section className="home">
            <div className="home__inner">
                <Grid container spacing={2}>
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
                        xs6
                    </Grid>
                    <Grid item xs={3} className="search">
                        <Input
                            className="search__form-input"
                            id="input-with-icon-adornment"
                            placeholder={"Поиск в Твиттере"}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchRoundedIcon />
                                </InputAdornment>
                            }
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}

export default Home;

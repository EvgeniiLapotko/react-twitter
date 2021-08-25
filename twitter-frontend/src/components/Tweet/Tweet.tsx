import React from "react";
import { Typography, Paper, Box, Avatar, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import DotsIcon from "@material-ui/icons/MoreHoriz";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RetwittIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

import { useHomeStyle } from "../../pages/Home/Home";

interface TypeTweet {
    text: string;
    classes: ReturnType<typeof useHomeStyle>;
    user: {
        fullname: string;
        username: string;
        avatar: string;
    };
}

const Tweet: React.FC<TypeTweet> = ({
    classes,
    text,
    user,
}: TypeTweet): React.ReactElement => {
    return (
        <Paper variant="outlined" className={classes.twittWrapper}>
            <Grid container spacing={1}>
                <Grid item xs={2} className={classes.twittAvatar}>
                    <Avatar
                        alt={`user avatar ${user.username}`}
                        src={user.avatar}
                        className={classes.tweetAvatar}
                    >
                        A
                    </Avatar>
                </Grid>
                <Grid item xs={10} className={classes.twittInfo}>
                    <Typography>
                        <b>{user.fullname}</b> {user.username}
                        <span>-</span>
                        <span>1 ч</span>
                    </Typography>

                    <IconButton className={classes.twittTitleButton}>
                        <DotsIcon />
                    </IconButton>
                    <Typography>{text}</Typography>
                    <Box className={classes.iconBox}>
                        <div className={classes.iconBoxItem}>
                            <IconButton>
                                <CommentIcon />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div className={classes.iconBoxItem}>
                            <IconButton>
                                <RetwittIcon />
                            </IconButton>
                            <span>116</span>
                        </div>
                        <div className={classes.iconBoxItem}>
                            <IconButton>
                                <LikeIcon />
                            </IconButton>
                            <span>100</span>
                        </div>
                        <div className={classes.iconBoxItem}>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                            <span>15</span>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Tweet;

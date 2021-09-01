import {
    Avatar,
    Box,
    CircularProgress,
    IconButton,
    Paper,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DotsIcon from "@material-ui/icons/MoreHoriz";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RetwittIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import {
    fetchSelectTweetAction,
    setSelectTweet,
} from "../../../store/ducks/tweetSelect/actionsCreators/actionCreators";
import {
    selectIsLoadingSelectTweet,
    selectTweetItem,
} from "../../../store/ducks/tweetSelect/selectors";
import { useHomeStyle } from "../theme";

const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyle();
    const params: { id?: string } = useParams();

    const id = params.id;
    console.log(useParams());
    const dispatch = useDispatch();

    const selectTweet = useSelector(selectTweetItem);
    const isLoadingSelectTweet = useSelector(selectIsLoadingSelectTweet);
    React.useEffect(() => {
        if (id) {
            dispatch(fetchSelectTweetAction(id));
        }

        return () => {
            dispatch(setSelectTweet(undefined));
        };
    }, [dispatch, id]);

    return (
        <div>
            {isLoadingSelectTweet ? (
                <div
                    style={{
                        textAlign: "center",
                        paddingTop: "25px",
                        paddingBottom: "25px",
                    }}
                >
                    <CircularProgress />
                </div>
            ) : selectTweet ? (
                <Paper variant="outlined" className={classes.twittWrapper}>
                    <Box className={classes.tweetUserInfo}>
                        <Box className={classes.tweetUserInfoAvatar}>
                            <Avatar
                                alt={`user avatar ${selectTweet.user.username}`}
                                src={selectTweet.user.avatar}
                                className={classes.tweetAvatar}
                            >
                                A
                            </Avatar>
                        </Box>
                        <Box>
                            <Typography>
                                <b>{selectTweet.user.fullname} </b>
                                <span>-</span>
                                <span>1 ч</span>
                                <div className={classes.tweetUserName}>
                                    {selectTweet.user.username}
                                </div>
                            </Typography>

                            <IconButton className={classes.twittTitleButton}>
                                <DotsIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box>
                        <Typography className={classes.userTwittText}>
                            {selectTweet.text}
                        </Typography>

                        <Box className={classes.userIconBox}>
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
                    </Box>
                </Paper>
            ) : null}
        </div>
    );
};

export default FullTweet;

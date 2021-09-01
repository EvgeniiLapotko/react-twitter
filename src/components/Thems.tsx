import { IconButton, Typography } from "@material-ui/core";
import React from "react";

import { useHomeStyle } from "../pages/Home/theme";
import DotsIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { fetchFilterTweets } from "../store/ducks/tweets/actionsCreators/actionCreators";

interface TypeTheme {
    classes: ReturnType<typeof useHomeStyle>;
    title: string;
    tweets: number;
    tag: string;
}

const Thems: React.FC<TypeTheme> = ({
    classes,
    title,
    tweets,
    tag,
}: TypeTheme): React.ReactElement => {
    const dispatch = useDispatch();
    const chooseTag = (): void => {
        dispatch(fetchFilterTweets(tag));
    };
    return (
        <div className={classes.themsTweet}>
            <div className={classes.tagsWraperLink} onClick={chooseTag}>
                <div>
                    <Typography className={classes.themsTweetTitle}>
                        {title}
                    </Typography>
                    <Typography className={classes.themsTweetSubTitle}>
                        Твитов: {tweets}
                    </Typography>
                </div>
            </div>
            <IconButton>
                <DotsIcon />
            </IconButton>
        </div>
    );
};

export default Thems;

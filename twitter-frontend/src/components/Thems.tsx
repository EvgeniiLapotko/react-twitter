import { IconButton, Typography } from "@material-ui/core";
import React from "react";
import { useHomeStyle } from "../pages/Home/theme";
import DotsIcon from "@material-ui/icons/MoreHoriz";

interface TypeTheme {
    classes: ReturnType<typeof useHomeStyle>;
    title: string;
    tweets: number;
}

const Thems: React.FC<TypeTheme> = ({
    classes,
    title,
    tweets,
}: TypeTheme): React.ReactElement => {
    return (
        <div className={classes.themsTweet}>
            <div>
                <Typography className={classes.themsTweetTitle}>
                    {title}
                </Typography>
                <Typography className={classes.themsTweetSubTitle}>
                    Твитов: {tweets}
                </Typography>
            </div>
            <IconButton>
                <DotsIcon />
            </IconButton>
        </div>
    );
};

export default Thems;

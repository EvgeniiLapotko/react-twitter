import { IconButton, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/search?q=${title}`} className={classes.tagsWraperLink}>
                <div>
                    <Typography className={classes.themsTweetTitle}>
                        {title}
                    </Typography>
                    <Typography className={classes.themsTweetSubTitle}>
                        Твитов: {tweets}
                    </Typography>
                </div>
            </Link>
            <IconButton>
                <DotsIcon />
            </IconButton>
        </div>
    );
};

export default Thems;

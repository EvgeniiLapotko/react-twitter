import { Avatar, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { useHomeStyle } from "../../pages/Home/theme";
import AddedUserIcon from "@material-ui/icons/PersonAddOutlined";

interface TypeTheme {
    classes: ReturnType<typeof useHomeStyle>;
    avatar: string;
    user: {
        fullname: string;
        username: string;
    };
}

const RecomendFollow: React.FC<TypeTheme> = ({
    classes,
    avatar,
    user,
}: TypeTheme): React.ReactElement => {
    return (
        <div className={classes.themsTweet}>
            <div className={classes.recomendBlock}>
                <Avatar alt={`user avatar ` + user.username} src={avatar}>
                    A
                </Avatar>
                <div className={classes.recomendBlockInfo}>
                    <Typography className={classes.themsTweetTitle}>
                        {user.fullname}
                    </Typography>
                    <Typography className={classes.themsTweetSubTitle}>
                        {user.username}
                    </Typography>
                </div>
            </div>
            <IconButton>
                <AddedUserIcon />
            </IconButton>
        </div>
    );
};

export default RecomendFollow;

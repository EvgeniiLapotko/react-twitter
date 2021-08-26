import { Avatar, Box } from "@material-ui/core";
import React from "react";
import { useHomeStyle } from "../../pages/Home/theme";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

interface TypeAddedTweet {
    classes: ReturnType<typeof useHomeStyle>;
}

const AddedTweet: React.FC<TypeAddedTweet> = ({
    classes,
}: TypeAddedTweet): React.ReactElement => {
    return (
        <Box className={classes.addWrapper}>
            <div className={classes.addHeader}>
                <Avatar
                    alt="avatar"
                    src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className={classes.addHeaderAvatar}
                >
                    U
                </Avatar>
                <TextareaAutosize
                    placeholder="Что происходит?"
                    rowsMin={5}
                    className={classes.addHeaderInput}
                />
            </div>
        </Box>
    );
};

export default AddedTweet;

import React from "react";
import { Avatar, Box, Button, IconButton } from "@material-ui/core";
import { useHomeStyle } from "../../pages/Home/theme";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CircularProgress from "@material-ui/core/CircularProgress";

import SmileIcon from "@material-ui/icons/SentimentSatisfied";
import PictureIcon from "@material-ui/icons/CropOriginal";

interface TypeAddedTweet {
    classes: ReturnType<typeof useHomeStyle>;
}

const AddedTweet: React.FC<TypeAddedTweet> = ({
    classes,
}: TypeAddedTweet): React.ReactElement => {
    const [inputFeild, setInputFeild] = React.useState<string>("");

    const MAX_LENGTH = 290;

    const textLimiPercent = Math.floor((inputFeild.length / MAX_LENGTH) * 100);

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setInputFeild(e.currentTarget.value);
        }
    };

    const handleAddTweet = (): void => {
        setInputFeild("");
    };
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
                    onChange={handleChange}
                    value={inputFeild}
                    placeholder="Что происходит?"
                    rowsMin={5}
                    className={classes.addHeaderInput}
                />
            </div>
            <div className={classes.addFooter}>
                <div>
                    <IconButton color="primary">
                        <PictureIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <SmileIcon />
                    </IconButton>
                </div>
                <div className={classes.addProgress}>
                    {inputFeild.length > 0 ? (
                        <>
                            <div style={{ color: "grey", fontSize: 14 }}>
                                {MAX_LENGTH - inputFeild.length}
                            </div>
                            <div className={classes.addProgressBlockWrapper}>
                                <CircularProgress
                                    className={classes.addProgressBlockAbs}
                                    variant="determinate"
                                    value={100}
                                />
                                <CircularProgress
                                    className={classes.addProgressBlock}
                                    variant="determinate"
                                    value={
                                        textLimiPercent > 100
                                            ? 100
                                            : textLimiPercent
                                    }
                                    style={
                                        textLimiPercent >= 100
                                            ? { color: "red" }
                                            : undefined
                                    }
                                />
                            </div>
                        </>
                    ) : null}

                    <Button
                        color="primary"
                        variant="contained"
                        disabled={textLimiPercent >= 100}
                        onClick={handleAddTweet}
                    >
                        Tweet
                    </Button>
                </div>
            </div>
        </Box>
    );
};

export default AddedTweet;

import React from "react";
import { Avatar, Box, Button, IconButton, Snackbar } from "@material-ui/core";
import { useHomeStyle } from "../pages/Home/theme";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "@material-ui/core/Tooltip";

import SmileIcon from "@material-ui/icons/SentimentSatisfied";
import PictureIcon from "@material-ui/icons/CropOriginal";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddTweets } from "../store/ducks/tweets/actionsCreators/actionCreators";
import {
    addIsErrorTweets,
    addIsLoadingTweets,
} from "../store/ducks/tweets/selectors";

interface TypeAddedTweet {
    classes: ReturnType<typeof useHomeStyle>;
    rowsMax?: number;
    rowsMin?: number;
}

const AddedTweet: React.FC<TypeAddedTweet> = ({
    classes,
    rowsMax,
    rowsMin,
}: TypeAddedTweet): React.ReactElement => {
    const dispatch = useDispatch();
    const [inputFeild, setInputFeild] = React.useState<string>("");
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const addIsLoadingTweet = useSelector(addIsLoadingTweets);
    const addIsErrorTweet = useSelector(addIsErrorTweets);

    const MAX_LENGTH = 290;

    const textLimiPercent = Math.floor((inputFeild.length / MAX_LENGTH) * 100);

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setInputFeild(e.currentTarget.value);
        }
    };

    const handleClose = (): void => {
        setIsOpen(false);
    };

    const handleAddTweet = (): void => {
        dispatch(fetchAddTweets(inputFeild));
        setInputFeild("");

        setIsOpen(true);
    };
    return (
        <>
            {addIsErrorTweet ? (
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={isOpen}
                    onClose={handleClose}
                    message={"Произошла ошибка добавления твита"}
                    autoHideDuration={2000}
                    key="123"
                />
            ) : (
                false
            )}

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
                        rowsMin={rowsMin}
                        rowsMax={rowsMax}
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
                                <div
                                    className={classes.addProgressBlockWrapper}
                                >
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
                        <>
                            {textLimiPercent >= 100 ? (
                                <Tooltip title="Невозможно отправить твит">
                                    <div>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            disabled
                                            onClick={handleAddTweet}
                                        >
                                            Tweet
                                        </Button>
                                    </div>
                                </Tooltip>
                            ) : !addIsLoadingTweet ? (
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={handleAddTweet}
                                    disabled={!inputFeild}
                                >
                                    Tweet
                                </Button>
                            ) : (
                                <span>
                                    <CircularProgress />
                                </span>
                            )}
                        </>
                    </div>
                </div>
            </Box>
        </>
    );
};

export default AddedTweet;

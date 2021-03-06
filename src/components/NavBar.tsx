import React from "react";

import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import TwitterIcon from "@material-ui/icons/Twitter";

import IconButton from "@material-ui/core/IconButton";
import { Button, Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { useHomeStyle } from "../pages/Home/theme";
import AddedTweet from "./AddedTweet";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchTweets } from "../store/ducks/tweets/actionsCreators/actionCreators";

interface TypeNavbar {
    classes: ReturnType<typeof useHomeStyle>;
}

const NavBar: React.FC<TypeNavbar> = ({
    classes,
}: TypeNavbar): React.ReactElement => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState<boolean>(false);
    const backHome = (): void => {
        dispatch(fetchTweets());
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <ul className={classes.navBarList}>
                <li>
                    <Link to="/home" onClick={backHome}>
                        <IconButton color="primary">
                            <TwitterIcon
                                color="primary"
                                className={classes.navBarIcon}
                            />
                        </IconButton>
                    </Link>
                </li>

                <li>
                    <IconButton className={classes.navBarIconButton}>
                        <SearchRoundedIcon className={classes.navBarIcon} />
                        <Typography
                            className={classes.navBarLabel}
                            variant="h6"
                        >
                            ??????????
                        </Typography>
                    </IconButton>
                </li>
                <li>
                    <IconButton className={classes.navBarIconButton}>
                        <NotificationsOutlinedIcon
                            className={classes.navBarIcon}
                        />
                        <Typography
                            className={classes.navBarLabel}
                            variant="h6"
                        >
                            ??????????????????????
                        </Typography>
                    </IconButton>
                </li>
                <li>
                    <IconButton className={classes.navBarIconButton}>
                        <EmailOutlinedIcon className={classes.navBarIcon} />
                        <Typography
                            className={classes.navBarLabel}
                            variant="h6"
                        >
                            ??????????????????
                        </Typography>
                    </IconButton>
                </li>
                <li>
                    <IconButton className={classes.navBarIconButton}>
                        <BookmarkBorderOutlinedIcon
                            className={classes.navBarIcon}
                        />
                        <Typography
                            className={classes.navBarLabel}
                            variant="h6"
                        >
                            ????????????????
                        </Typography>
                    </IconButton>
                </li>
                <li>
                    <IconButton className={classes.navBarIconButton}>
                        <ListAltRoundedIcon className={classes.navBarIcon} />
                        <Typography
                            className={classes.navBarLabel}
                            variant="h6"
                        >
                            ????????????
                        </Typography>
                    </IconButton>
                </li>
                <li>
                    <IconButton className={classes.navBarIconButton}>
                        <PersonOutlineOutlinedIcon
                            className={classes.navBarIcon}
                        />
                        <Typography
                            className={classes.navBarLabel}
                            variant="h6"
                        >
                            ??????????????
                        </Typography>
                    </IconButton>
                </li>
                <li>
                    <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        className={classes.btnNavbar}
                        onClick={handleOpen}
                    >
                        ????????????????
                    </Button>
                </li>
            </ul>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modalWrapper}>
                    <AddedTweet classes={classes} rowsMax={15} rowsMin={15} />
                </div>
            </Modal>
        </>
    );
};

export default NavBar;

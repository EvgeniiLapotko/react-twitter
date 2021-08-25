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
import { useHomeStyle } from "../../pages/Home/Home";

interface TypeNavbar {
    classes: ReturnType<typeof useHomeStyle>;
}

const NavBar: React.FC<TypeNavbar> = ({
    classes,
}: TypeNavbar): React.ReactElement => {
    return (
        <ul className={classes.navBarList}>
            <li>
                <IconButton color="primary">
                    <TwitterIcon
                        color="primary"
                        className={classes.navBarIcon}
                    />
                </IconButton>
            </li>

            <li>
                <IconButton className={classes.navBarIconButton}>
                    <SearchRoundedIcon className={classes.navBarIcon} />
                    <Typography className={classes.navBarLabel} variant="h6">
                        Поиск
                    </Typography>
                </IconButton>
            </li>
            <li>
                <IconButton className={classes.navBarIconButton}>
                    <NotificationsOutlinedIcon className={classes.navBarIcon} />
                    <Typography className={classes.navBarLabel} variant="h6">
                        Уведомления
                    </Typography>
                </IconButton>
            </li>
            <li>
                <IconButton className={classes.navBarIconButton}>
                    <EmailOutlinedIcon className={classes.navBarIcon} />
                    <Typography className={classes.navBarLabel} variant="h6">
                        Сообщения
                    </Typography>
                </IconButton>
            </li>
            <li>
                <IconButton className={classes.navBarIconButton}>
                    <BookmarkBorderOutlinedIcon
                        className={classes.navBarIcon}
                    />
                    <Typography className={classes.navBarLabel} variant="h6">
                        Закладки
                    </Typography>
                </IconButton>
            </li>
            <li>
                <IconButton className={classes.navBarIconButton}>
                    <ListAltRoundedIcon className={classes.navBarIcon} />
                    <Typography className={classes.navBarLabel} variant="h6">
                        Список
                    </Typography>
                </IconButton>
            </li>
            <li>
                <IconButton className={classes.navBarIconButton}>
                    <PersonOutlineOutlinedIcon className={classes.navBarIcon} />
                    <Typography className={classes.navBarLabel} variant="h6">
                        Профиль
                    </Typography>
                </IconButton>
            </li>
            <li>
                <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    className={classes.btnNavbar}
                >
                    Твитнуть
                </Button>
            </li>
        </ul>
    );
};

export default NavBar;

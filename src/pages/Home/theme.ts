import { makeStyles } from "@material-ui/core/styles";

export const useHomeStyle = makeStyles(() => ({
    home: {
        width: "100%",
        maxWidth: "1230px",
        margin: "0 auto",
        padding: "0 10px",
        height: "100vh",
    },
    gridContainer: {
        height: "100vh",
    },
    twitterPaper: {
        borderRadius: "0",
        borderTop: "none",
        boorderBottom: "none",
        height: "100%",
    },
    homeTitleWrapper: {
        borderRight: "none",
        borderLeft: "none",

        borderRadius: "0",
    },
    homeTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 15px",
        "& h6": {
            fontWeight: "700",
        },
    },
    homeTitleIcon: {
        color: "#1da1f2",
        fontSize: "30px",
    },

    searchUnderline: {
        "&::before": {
            borderBottom: "none",
        },
    },
    tweetUserInfo: {
        display: "flex",
        marginBottom: "25px",
        position: "relative",
    },
    tweetUserInfoAvatar: {
        marginRight: "25px",
    },
    twittWrapper: {
        borderRadius: "0",
        borderLeft: "none",
        borderRight: "none",
        padding: "15px",
        transition: "all 0.3s",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgb(244, 248, 249)",
        },
    },
    twittAvatar: {
        display: "flex",
        justifyContent: "center",
    },
    twittInfo: {
        position: "relative",
        paddingRight: "50px",
    },
    userTwetInfo: {
        position: "relative",
    },
    tweetUserName: {
        color: "grey",
    },
    userTwittText: {
        fontSize: 24,
        lineHeight: 1.35,
        color: "#555",
        marginBottom: "20px",
    },

    twittTitleButton: {
        padding: "6px",
        position: "absolute",
        top: "2px",
        right: "10px",
    },
    iconBox: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "450px",
        position: "relative",
        left: "-15px",
    },
    userIconBox: {
        display: "flex",
        justifyContent: "space-around",
        position: "relative",
    },
    iconBoxItem: {
        "& svg:hover": {
            color: "#1da1f2",
        },
        "&:hover": {
            "& span": {
                color: "#1da1f2",
            },
        },
    },
    tweetAvatar: {
        width: "65px",
        height: "65px",
    },
    navBarList: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        position: "sticky",
        top: 0,
        li: {
            textAlign: "center",
            marginTop: 15,
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
        },
    },
    navBarIcon: {
        fontSize: 36,
    },
    navBarLabel: {
        fontWeight: 700,
        fontSize: 20,
        paddingLeft: 25,
    },
    navBarIconButton: {
        borderRadius: 35,
        padding: "10px 15px",
        transition: "all 0.25s",
        "&:hover": {
            "& h6": {
                color: "#1da1f2",
            },
            "& svg": {
                color: "#1da1f2 !important",
            },
        },
    },
    btnNavbar: {
        marginTop: 30,
        padding: "25px",
    },
    aside: {
        position: "sticky",
        top: 0,
    },
    thems: {
        backgroundColor: "rgb(240, 247, 248)",
        marginBottom: "25px",
    },
    themsTitle: {
        display: "flex",
        justifyContent: "space-between",
        padding: "7px 15px",
        alignItems: "center",
        "& h6": {
            fontWeight: "700",
        },
    },
    themsTweet: {
        display: "flex",
        justifyContent: "space-between",
        padding: "7px 15px",
        alignItems: "center",
        "&:hover": {
            backgroundColor: "rgb(235, 245, 246)",
        },
    },
    themsTweetTitle: {
        fontWeight: 700,
    },
    themsTweetSubTitle: {
        fontSize: "14px",
        color: "#aaa",
    },
    recomendBlock: {
        display: "flex",
        alignItems: "center",
    },
    recomendBlockInfo: {
        marginLeft: "8px",
    },
    addWrapper: {
        padding: "7px 25px",
    },
    addHeader: {
        display: "flex",
    },
    addHeaderAvatar: {
        width: "70px",
        height: "70px",
        marginRight: "20px",
    },
    addHeaderInput: {
        width: "100%",
        flexGrow: 1,
        outline: "none",
        resize: "none",
        padding: "10px",
        border: "none",
    },
    addFooter: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "470px",
        marginLeft: "auto",
    },
    addProgress: {
        display: "flex",
        alignItems: "center",
    },
    addProgressBlockWrapper: {
        position: "relative",
    },
    addProgressBlock: {
        width: "25px !important",
        height: "25px !important",

        marginRight: "10px",
        marginLeft: "10px",
        zIndex: 1,
    },
    addProgressBlockAbs: {
        position: "absolute",
        top: 0,
        left: "10px",
        width: "25px !important",
        height: "25px !important",
        color: "rgba(0,0,0, 0.2)",
        zIndex: 0,
    },
    modalWrapper: {
        maxWidth: "600px",
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        backgroundColor: "#fff",
        padding: "25px",
        transform: "translate(-50%, -50%)",
        borderRadius: "15px",
        boxShadow: "0 0 5px #ddd",
    },
    tagsWraperLink: {
        textDecoration: "none",
        color: "inherit",
    },
    tweetTitle: {
        display: "flex",
        alignItems: "center",
        "& a": {
            paddingRight: "20px",
            paddingTop: "7px",
            textDecoration: "none",
            color: "inherit",
        },
    },
}));

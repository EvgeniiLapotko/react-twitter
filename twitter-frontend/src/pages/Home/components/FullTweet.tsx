import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tweet } from "../../../components";
import {
    fetchSelectTweetAction,
    setSelectTweet,
} from "../../../store/ducks/tweetSelect/actionsCreators/actionCreators";
import {
    selectIsLoadingSelectTweet,
    selectTweetItem,
} from "../../../store/ducks/tweetSelect/selectors";
import { useHomeStyle } from "../theme";

const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyle();
    const params: { id?: string } = useParams();
    const id = params.id;
    const dispatch = useDispatch();

    const selectTweet = useSelector(selectTweetItem);
    const isLoadingSelectTweet = useSelector(selectIsLoadingSelectTweet);
    React.useEffect(() => {
        if (id) {
            dispatch(fetchSelectTweetAction(id));
        }

        return () => {
            dispatch(setSelectTweet(undefined));
        };
    }, [dispatch, id]);

    return (
        <div>
            {isLoadingSelectTweet ? (
                <div
                    style={{
                        textAlign: "center",
                        paddingTop: "25px",
                        paddingBottom: "25px",
                    }}
                >
                    <CircularProgress />
                </div>
            ) : selectTweet ? (
                <Tweet
                    classes={classes}
                    id={selectTweet?._id}
                    text={selectTweet?.text}
                    user={selectTweet?.user}
                />
            ) : null}
        </div>
    );
};

export default FullTweet;

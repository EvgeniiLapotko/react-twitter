import { call, put, takeEvery } from "redux-saga/effects";
import { fetchApi } from "../../../services/api/fetchApi";
import {
    addTweets,
    FetcFilterTweetsActionInterface,
    FetchAddTweetsActionInterface,
    setStatusAdd,
    setStatusTweets,
    setTweets,
    TweetsActionsType,
} from "./actionsCreators/actionCreators";
import { AddLoadingState, LoadingState } from "./contracts/types";

export function* fetchTweetsRequest(): any {
    try {
        const data = yield call(fetchApi.fetchTweet);
        yield put(setTweets(data));
    } catch (error) {
        yield put(setStatusTweets(LoadingState.ERROR));
    }
}
export function* addTweetsRequest({
    payload,
}: FetchAddTweetsActionInterface): any {
    try {
        const data = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            tag: "moscow",
            user: {
                fullname: "Игорь Лиепас",
                username: "@igorkushnarev2",
                avatar: "https://pbs.twimg.com/profile_images/1348214579877326854/5GZmXCmd_200x200.jpg",
            },
        };
        const items = yield call(fetchApi.addTweet, data);
        yield put(addTweets(items));
    } catch (error) {
        yield put(setStatusAdd(AddLoadingState.ERROR));
    }
}

export function* fetchFilterTweetsRequest({
    payload: tag,
}: FetcFilterTweetsActionInterface): any {
    try {
        const data = yield call(fetchApi.filterTweets, tag);

        yield put(setTweets(data));
    } catch (error) {
        yield put(setStatusTweets(LoadingState.ERROR));
    }
}
export function* watchTweetsAsync() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEETS, addTweetsRequest);
    yield takeEvery(
        TweetsActionsType.FETCH_FILTER_TWETS,
        fetchFilterTweetsRequest
    );
}

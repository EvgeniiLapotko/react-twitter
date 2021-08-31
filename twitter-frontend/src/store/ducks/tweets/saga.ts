import { call, put, takeEvery } from "redux-saga/effects";
import { fetchApi } from "../../../services/api/fetchApi";
import {
    addTweets,
    FetchAddTweetsActionInterface,
    setStatusTweets,
    setTweets,
    TweetsActionsType,
} from "./actionsCreators/actionCreators";
import { LoadingState } from "./contracts/types";

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
            user: {
                fullname: "Test",
                username: "@testuser",
                avatar: "https://source.unsplash.com/random/150x150?2",
            },
        };
        const items = yield call(fetchApi.addTweet, data);
        yield put(addTweets(items));
    } catch (error) {
        yield put(setStatusTweets(LoadingState.ERROR));
    }
}
export function* watchTweetsAsync() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEETS, addTweetsRequest);
}

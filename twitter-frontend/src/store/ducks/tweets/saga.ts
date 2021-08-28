import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTweetApi } from "../../../services/api/fetchApi";
import {
    setStatusTweets,
    setTweets,
    TweetsActionsType,
} from "./actionsCreators/actionCreators";
import { LoadingState } from "./contracts/types";

export function* fetchTweetsRequest(): any {
    try {
        const data = yield call(fetchTweetApi.fetchTweet);
        yield put(setTweets(data));
    } catch (error) {
        yield put(setStatusTweets(LoadingState.ERROR));
    }
}
export function* watchTweetsAsync() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}

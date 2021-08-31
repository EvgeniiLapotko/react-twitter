import { call, put, takeEvery } from "redux-saga/effects";
import { fetchApi } from "../../../services/api/fetchApi";
import {
    setStatusSelecteTweet,
    setSelectTweet,
    SelectTweetActionsType,
    FetchSelectTweetActionInterface,
} from "./actionsCreators/actionCreators";
import { LoadingState, Tweet } from "./contracts/types";

export function* fetchSelectTweetRequest({
    payload: tweetId,
}: FetchSelectTweetActionInterface): any {
    try {
        const data: Tweet[] = yield call(fetchApi.fetchSelectTweet, tweetId);

        yield put(setSelectTweet(data[0]));
    } catch (error) {
        yield put(setStatusSelecteTweet(LoadingState.ERROR));
    }
}
export function* watchSelectTweetAsync() {
    yield takeEvery(
        SelectTweetActionsType.FETCH_SELECT_TWEET,
        fetchSelectTweetRequest
    );
}

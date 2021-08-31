import { all } from "redux-saga/effects";
import { watchRecomendUserAsync } from "./ducks/recomendUsers/saga";
import { watchTagsAsync } from "./ducks/tags/saga";
import { watchTweetsAsync } from "./ducks/tweets/saga";
import { watchSelectTweetAsync } from "./ducks/tweetSelect/saga";

export default function* rootSaga() {
    yield all([
        watchTweetsAsync(),
        watchTagsAsync(),
        watchRecomendUserAsync(),
        watchSelectTweetAsync(),
    ]);
}

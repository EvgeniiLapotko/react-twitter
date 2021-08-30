import { all } from "redux-saga/effects";
import { watchRecomendUserAsync } from "./ducks/recomendUsers/saga";
import { watchTagsAsync } from "./ducks/tags/saga";
import { watchTweetsAsync } from "./ducks/tweets/saga";

export default function* rootSaga() {
    yield all([watchTweetsAsync(), watchTagsAsync(), watchRecomendUserAsync()]);
}

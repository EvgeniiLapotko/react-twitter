import { all } from "redux-saga/effects";
import { watchTweetsAsync } from "./ducks/tweets/saga";

export default function* rootSaga() {
    yield all([watchTweetsAsync()]);
}

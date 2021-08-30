import { call, put, takeEvery } from "redux-saga/effects";
import { fetchApi } from "../../../services/api/fetchApi";
import {
    setStatusTags,
    setTags,
    TagsActionsType,
} from "./actionsCreators/actionCreators";
import { LoadingState } from "./contracts/types";

export function* fetchTagsRequest(): any {
    try {
        const data = yield call(fetchApi.fetchTags);
        yield put(setTags(data));
    } catch (error) {
        yield put(setStatusTags(LoadingState.ERROR));
    }
}
export function* watchTagsAsync() {
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}

import { call, put, takeEvery } from "redux-saga/effects";
import { fetchApi } from "../../../services/api/fetchApi";
import {
    setStatusRecomendUser,
    setRecomendUsers,
    RecomendUserActionsType,
} from "./actionsCreators/actionCreators";
import { LoadingState } from "./contracts/types";

export function* fetchRecomendUserRequest(): any {
    try {
        const data = yield call(fetchApi.fetchRecommendUsers);
        yield put(setRecomendUsers(data));
    } catch (error) {
        yield put(setStatusRecomendUser(LoadingState.ERROR));
    }
}
export function* watchRecomendUserAsync() {
    yield takeEvery(
        RecomendUserActionsType.FETCH_RECOMEND_USER,
        fetchRecomendUserRequest
    );
}

import { RootState } from "../../store";
import { LoadingState } from "./contracts/types";

const selectRecomendUsers = (state: RootState) => state.recommendUsers;

export const selectRecomendUsersItem = (state: RootState) =>
    selectRecomendUsers(state).item;

export const selectLoadingState = (state: RootState) =>
    selectRecomendUsers(state).loadingState;

export const selectIsLoadingRecomend = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoadedRecomend = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADED;

export const selectIsErrorRecomend = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.ERROR;

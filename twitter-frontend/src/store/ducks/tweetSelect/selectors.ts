import { RootState } from "../../store";
import { LoadingState } from "./contracts/types";

const selectTwet = (state: RootState) => state.selectTweet;

export const selectTweetItem = (state: RootState) => selectTwet(state).item;

export const selectLoadingState = (state: RootState) =>
    selectTwet(state).loadingState;

export const selectIsLoadingSelectTweet = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoadedSelectTweet = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADED;

export const selectIsErrorSelectTweet = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.ERROR;

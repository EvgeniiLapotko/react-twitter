import { RootState } from "../../store";
import { LoadingState } from "./contracts/types";

const selectTweets = (state: RootState) => state.tweets;

export const selectTweetsItem = (state: RootState) => selectTweets(state).item;

export const selectLoadingState = (state: RootState) =>
    selectTweets(state).loadingState;

export const selectIsLoadingTweets = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoadedTweets = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADED;

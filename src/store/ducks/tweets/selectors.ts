import { RootState } from "../../store";
import { AddLoadingState, LoadingState } from "./contracts/types";

const selectTweets = (state: RootState) => state.tweets;

//select loading add tweet
export const selectTweetsItem = (state: RootState) => selectTweets(state).item;

export const selectLoadingState = (state: RootState) =>
    selectTweets(state).loadingState;

export const selectIsLoadingTweets = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoadedTweets = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADED;

export const selectIsErrorTweets = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.ERROR;

//add new tweet state selector

export const addLoadingState = (state: RootState) =>
    selectTweets(state).addTweetState;

export const addIsLoadingTweets = (state: RootState): boolean =>
    addLoadingState(state) === AddLoadingState.LOADING;

export const addIsErrorTweets = (state: RootState): boolean =>
    addLoadingState(state) === AddLoadingState.ERROR;

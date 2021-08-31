import { Action } from "redux";
import { LoadingState, SelectTweetType } from "../contracts/types";

export enum SelectTweetActionsType {
    SET_SELECT_TWEET = "tweet/SET_SELECT_TWEET",
    FETCH_SELECT_TWEET = "tweet/FETCH_SELECT_TWEET",
    SET_STATUS = "tweet/SET_STATUS",
}

export interface SetSelectTweetActionInterface
    extends Action<SelectTweetActionsType> {
    type: SelectTweetActionsType.SET_SELECT_TWEET;
    payload: SelectTweetType["item"];
}

export interface FetchSelectTweetActionInterface
    extends Action<SelectTweetActionsType> {
    type: SelectTweetActionsType.FETCH_SELECT_TWEET;
    payload: string;
}
export interface SetStatusActionInterface
    extends Action<SelectTweetActionsType> {
    type: SelectTweetActionsType.SET_STATUS;
    payload: LoadingState;
}

export const setSelectTweet = (
    payload: SelectTweetType["item"]
): SetSelectTweetActionInterface => ({
    type: SelectTweetActionsType.SET_SELECT_TWEET,
    payload,
});

export const setStatusSelecteTweet = (
    payload: LoadingState
): SetStatusActionInterface => ({
    type: SelectTweetActionsType.SET_STATUS,
    payload,
});
export const fetchSelectTweetAction = (
    payload: string
): FetchSelectTweetActionInterface => ({
    type: SelectTweetActionsType.FETCH_SELECT_TWEET,
    payload,
});

export type SelectTweetAction =
    | SetSelectTweetActionInterface
    | FetchSelectTweetActionInterface
    | SetStatusActionInterface;

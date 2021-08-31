import { Action } from "redux";
import { LoadingState, Tweets } from "../contracts/types";

export enum TweetsActionsType {
    SET_TWEETS = "tweets/SET_TWEETS",
    FETCH_ADD_TWEETS = "tweets/FETCH_ADD_TWEETS",
    ADD_TWEETS = "tweets/ADD_TWEETS",
    FETCH_TWEETS = "tweets/FETCH_TWEETS",
    SET_STATUS = "tweets/SET_STATUS",
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS;
    payload: Tweets[];
}

export interface FetchAddTweetsActionInterface
    extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEETS;
    payload: string;
}
export interface AddTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEETS;
    payload: Tweets;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS;
}
export interface SetStatusActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_STATUS;
    payload: LoadingState;
}

export const setTweets = (payload: Tweets[]): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});
export const fetchAddTweets = (
    payload: string
): FetchAddTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEETS,
    payload,
});
export const addTweets = (payload: Tweets): AddTweetsActionInterface => ({
    type: TweetsActionsType.ADD_TWEETS,
    payload,
});

export const setStatusTweets = (
    payload: LoadingState
): SetStatusActionInterface => ({
    type: TweetsActionsType.SET_STATUS,
    payload,
});
export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsAction =
    | SetTweetsActionInterface
    | FetchTweetsActionInterface
    | SetStatusActionInterface
    | FetchAddTweetsActionInterface
    | AddTweetsActionInterface;

import { Action } from "redux";
import { LoadingState, Tags } from "../contracts/types";

export enum TagsActionsType {
    SET_TAGS = "tags/SET_Tags",
    FETCH_TAGS = "tags/FETCH_Tags",
    SET_STATUS = "tags/SET_STATUS",
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS;
    payload: Tags[];
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS;
}
export interface SetStatusActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_STATUS;
    payload: LoadingState;
}

export const setTags = (payload: Tags[]): SetTagsActionInterface => ({
    type: TagsActionsType.SET_TAGS,
    payload,
});

export const setStatusTags = (
    payload: LoadingState
): SetStatusActionInterface => ({
    type: TagsActionsType.SET_STATUS,
    payload,
});
export const fetchTags = (): FetchTagsActionInterface => ({
    type: TagsActionsType.FETCH_TAGS,
});

export type TagsAction =
    | SetTagsActionInterface
    | FetchTagsActionInterface
    | SetStatusActionInterface;

import { Action } from "redux";
import { LoadingState, RecommendUser } from "../contracts/types";

export enum RecomendUserActionsType {
    SET_RECOMEND_USER = "recomendUser/SET_RECOMEND_USER",
    FETCH_RECOMEND_USER = "recomendUser/FETCH_RECOMEND_USER",
    SET_STATUS = "recomendUser/SET_STATUS",
}

export interface SetRecomendUserActionInterface
    extends Action<RecomendUserActionsType> {
    type: RecomendUserActionsType.SET_RECOMEND_USER;
    payload: RecommendUser[];
}

export interface FetchRecomendUserActionInterface
    extends Action<RecomendUserActionsType> {
    type: RecomendUserActionsType.FETCH_RECOMEND_USER;
}
export interface SetStatusActionInterface
    extends Action<RecomendUserActionsType> {
    type: RecomendUserActionsType.SET_STATUS;
    payload: LoadingState;
}

export const setRecomendUsers = (
    payload: RecommendUser[]
): SetRecomendUserActionInterface => ({
    type: RecomendUserActionsType.SET_RECOMEND_USER,
    payload,
});

export const setStatusRecomendUser = (
    payload: LoadingState
): SetStatusActionInterface => ({
    type: RecomendUserActionsType.SET_STATUS,
    payload,
});
export const fetchRecomendUsers = (): FetchRecomendUserActionInterface => ({
    type: RecomendUserActionsType.FETCH_RECOMEND_USER,
});

export type RecomendAction =
    | SetRecomendUserActionInterface
    | FetchRecomendUserActionInterface
    | SetStatusActionInterface;

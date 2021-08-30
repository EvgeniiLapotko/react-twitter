import { RootState } from "../../store";
import { LoadingState } from "./contracts/types";

const selectTags = (state: RootState) => state.tags;

export const selectTagsItem = (state: RootState) => selectTags(state).item;

export const selectLoadingState = (state: RootState) =>
    selectTags(state).loadingState;

export const selectIsLoadingTags = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADING;

export const selectIsLoadedTags = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADED;

export const selectIsErrorTags = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.ERROR;

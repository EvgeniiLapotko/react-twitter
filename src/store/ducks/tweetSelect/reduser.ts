import produce, { Draft } from "immer";
import {
    SelectTweetAction,
    SelectTweetActionsType,
} from "./actionsCreators/actionCreators";
import { LoadingState, SelectTweetType } from "./contracts/types";

const initialTweetState: SelectTweetType | null = {
    item: undefined,
    loadingState: LoadingState.NEVER,
};

export const selectTweetReduser = produce(
    (draft: Draft<SelectTweetType>, action: SelectTweetAction) => {
        if (action.type === SelectTweetActionsType.SET_SELECT_TWEET) {
            draft.item = action.payload;
            draft.loadingState = LoadingState.LOADED;
        }
        if (action.type === SelectTweetActionsType.SET_STATUS) {
            draft.loadingState = action.payload;
        }
        if (action.type === SelectTweetActionsType.FETCH_SELECT_TWEET) {
            draft.item = undefined;
            draft.loadingState = LoadingState.LOADING;
        }
    },
    initialTweetState
);

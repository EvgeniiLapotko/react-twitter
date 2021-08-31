import produce, { Draft } from "immer";
import {
    TweetsAction,
    TweetsActionsType,
} from "./actionsCreators/actionCreators";
import { LoadingState, TweetsType } from "./contracts/types";

const initialTweetsState: TweetsType = {
    item: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReduser = produce(
    (draft: Draft<TweetsType>, action: TweetsAction) => {
        if (action.type === TweetsActionsType.SET_TWEETS) {
            draft.item = action.payload;
            draft.loadingState = LoadingState.LOADED;
        }
        if (action.type === TweetsActionsType.SET_STATUS) {
            draft.loadingState = action.payload;
        }
        if (action.type === TweetsActionsType.FETCH_TWEETS) {
            draft.item = [];
            draft.loadingState = LoadingState.LOADING;
        }
        if (action.type === TweetsActionsType.ADD_TWEETS) {
            draft.item.push(action.payload);
        }
    },
    initialTweetsState
);

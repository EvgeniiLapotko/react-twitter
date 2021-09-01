import produce, { Draft } from "immer";
import { TagsAction, TagsActionsType } from "./actionsCreators/actionCreators";
import { LoadingState, TagsType } from "./contracts/types";

const initialTweetsState: TagsType = {
    item: [],
    loadingState: LoadingState.NEVER,
};

export const tagsReduser = produce(
    (draft: Draft<TagsType>, action: TagsAction) => {
        if (action.type === TagsActionsType.SET_TAGS) {
            draft.item = action.payload;
            draft.loadingState = LoadingState.LOADED;
        }
        if (action.type === TagsActionsType.SET_STATUS) {
            draft.loadingState = action.payload;
        }
        if (action.type === TagsActionsType.FETCH_TAGS) {
            draft.item = [];
            draft.loadingState = LoadingState.LOADING;
        }
    },
    initialTweetsState
);

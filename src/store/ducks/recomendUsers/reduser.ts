import produce, { Draft } from "immer";
import {
    RecomendAction,
    RecomendUserActionsType,
} from "./actionsCreators/actionCreators";
import { LoadingState, RecomendUserType } from "./contracts/types";

const initialTweetsState: RecomendUserType = {
    item: [],
    loadingState: LoadingState.NEVER,
};

export const recomendUserReduser = produce(
    (draft: Draft<RecomendUserType>, action: RecomendAction) => {
        if (action.type === RecomendUserActionsType.SET_RECOMEND_USER) {
            draft.item = action.payload;
            draft.loadingState = LoadingState.LOADED;
        }
        if (action.type === RecomendUserActionsType.SET_STATUS) {
            draft.loadingState = action.payload;
        }
        if (action.type === RecomendUserActionsType.FETCH_RECOMEND_USER) {
            draft.item = [];
            draft.loadingState = LoadingState.LOADING;
        }
    },
    initialTweetsState
);

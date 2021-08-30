import { createStore, compose, applyMiddleware } from "redux";
import { rootReduser } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { TweetsType } from "./ducks/tweets/contracts/types";
import { TagsType } from "./ducks/tags/contracts/types";
import { RecomendUserType } from "./ducks/recomendUsers/contracts/types";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export interface RootState {
    tweets: TweetsType;
    tags: TagsType;
    recommendUsers: RecomendUserType;
}

export const store = createStore(
    rootReduser,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

import { combineReducers } from "redux";
import { tweetsReduser } from "./ducks/tweets/reduser";

export const rootReduser = combineReducers({
    tweets: tweetsReduser,
});

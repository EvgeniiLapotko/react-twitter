import { combineReducers } from "redux";
import { recomendUserReduser } from "./ducks/recomendUsers/reduser";
import { tagsReduser } from "./ducks/tags/reduser";
import { tweetsReduser } from "./ducks/tweets/reduser";

export const rootReduser = combineReducers({
    tweets: tweetsReduser,
    tags: tagsReduser,
    recommendUsers: recomendUserReduser,
});

import axios from "axios";
import { Tweets } from "../../store/ducks/tweets/contracts/types";

export const fetchTweetApi = {
    fetchTweet(): Promise<Tweets[]> {
        return axios
            .get("https://trycode.pw/c/2L083.json")
            .then(({ data }) => data);
    },
};

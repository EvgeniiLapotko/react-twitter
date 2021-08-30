import axios from "axios";
import { Tags } from "../../store/ducks/tags/contracts/types";
import { Tweets } from "../../store/ducks/tweets/contracts/types";

export const fetchApi = {
    fetchTweet(): Promise<Tweets[]> {
        return axios.get("/tweets").then(({ data }) => data);
    },
    fetchTags(): Promise<Tags[]> {
        return axios.get("/tags").then(({ data }) => data);
    },
    fetchRecommendUsers(): Promise<Tags[]> {
        return axios.get("/recommendUsers").then(({ data }) => data);
    },
};

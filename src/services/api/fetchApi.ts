import axios from "axios";
import { Tags } from "../../store/ducks/tags/contracts/types";
import { Tweets } from "../../store/ducks/tweets/contracts/types";
import { Tweet } from "../../store/ducks/tweetSelect/contracts/types";

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
    fetchSelectTweet(id: string): Promise<Tweet[]> {
        return axios.get(`/tweets?q=${id}`).then(({ data }) => data);
    },
    addTweet(payload: Tweets): Promise<Tweets> {
        return axios.post("/tweets", payload).then(({ data }) => data);
    },
};

export enum LoadingState {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}
export enum AddLoadingState {
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export interface Tweets {
    _id: string;
    text: string;
    tag: string;
    user: {
        fullname: string;
        username: string;
        avatar: string;
    };
}

export interface TweetsType {
    item: Tweets[];
    loadingState: LoadingState;
    addTweetState: AddLoadingState;
}

export enum LoadingState {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export interface Tweets {
    _id: string;
    text: string;
    user: {
        fullname: string;
        username: string;
        avatar: string;
    };
}

export interface TweetsType {
    item: Tweets[];
    loadingState: LoadingState;
}

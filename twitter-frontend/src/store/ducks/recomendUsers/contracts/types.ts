export enum LoadingState {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export interface RecommendUser {
    _id: string;
    fullname: string;
    username: string;
    avatar: string;
}

export interface RecomendUserType {
    item: RecommendUser[];
    loadingState: LoadingState;
}

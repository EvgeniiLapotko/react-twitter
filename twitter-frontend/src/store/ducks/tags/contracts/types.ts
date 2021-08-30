export enum LoadingState {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export interface Tags {
    _id: string;
    tags: string;
    count: number
}

export interface TagsType {
    item: Tags[];
    loadingState: LoadingState;
}

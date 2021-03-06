import { RootState } from "..";

export const selectFeeds = (state: RootState) => state.feed;

export * from "./actions";
export * from "./actionsTypes";
export * from "./reducer";
export * from "./types";

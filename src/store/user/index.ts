import { RootState } from "..";

export const selectUser = (state: RootState) => state.user;

export * from "./actions";
export * from "./actionsTypes";
export * from "./reducer";
export * from "./types";

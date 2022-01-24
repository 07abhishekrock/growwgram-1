import { Dispatch } from "redux";
import { fetchFeeds } from "utils/api";
import { AppThunk } from "..";
import { Action, FeedActionTypes } from "./types";

export const getFeeds =
  (): AppThunk => async (dispatch: Dispatch<Action>, getState) => {
    try {
      const currentState = getState();
      const asyncResp: any = await fetchFeeds(currentState.feed.page + 1);
      dispatch({ type: FeedActionTypes.FETCH_SUCCESS, payload: asyncResp });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: FeedActionTypes.FETCH_ERROR, payload: error });
    }
  };

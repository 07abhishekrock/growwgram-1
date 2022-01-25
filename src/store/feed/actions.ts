import { Dispatch } from "redux";
import { fetchFeeds } from "utils";
import { Feed } from ".";
import { AppThunk } from "..";
import { Action, FeedActionTypes } from "./types";

const getTopUsers = (feeds: Feed[]) => {
  return feeds.slice(0, 5).map((feed) => feed.user);
};

export const getFeeds =
  (): AppThunk => async (dispatch: Dispatch<Action>, getState) => {
    try {
      const currentState = getState();
      const feeds = await fetchFeeds<Feed[]>(currentState.feed.page + 1);
      dispatch({
        type: FeedActionTypes.FETCH_SUCCESS,
        payload: { feeds, suggestedUsers: getTopUsers(feeds) },
      });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: FeedActionTypes.FETCH_ERROR, payload: error });
    }
  };

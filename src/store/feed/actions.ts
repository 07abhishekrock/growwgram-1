import { Dispatch } from "redux";
import { fetchFeeds } from "utils";
import { Feed, FeedActionTypes } from ".";
import { AppThunk, FeedAction } from "..";

const getTopUsers = (feeds: Feed[]) => {
  return feeds.slice(0, 5).map((feed) => feed.user);
};

export const getFeeds =
  (): AppThunk => async (dispatch: Dispatch<FeedAction>, getState) => {
    try {
      const currentState = getState();
      const currentPage = currentState.feed.page;
      dispatch({ type: FeedActionTypes.FETCH_REQUEST });
      const feeds = await fetchFeeds<Feed[]>(currentPage + 1);
      dispatch({
        type: FeedActionTypes.FETCH_SUCCESS,
        payload: {
          feeds: [...currentState.feed.data.feeds, ...feeds],
          ...(currentPage === 0 && { suggestedUsers: getTopUsers(feeds) }),
        },
      });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: FeedActionTypes.FETCH_ERROR, payload: error });
    }
  };

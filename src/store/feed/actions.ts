import { Dispatch } from "redux";
import { toast } from "react-toastify";

import { fetchFeeds } from "utils";
import { Feed, FeedActionTypes } from ".";
import { AppThunk, FeedAction } from "..";

const getTopUsers = (feeds: Feed[]) => {
  return feeds.slice(0, 5).map((feed) => feed.user);
};

export const getFeeds =
  (hardRefresh?: boolean): AppThunk =>
  async (dispatch: Dispatch<FeedAction>, getState) => {
    try {
      if (hardRefresh) {
        dispatch({ type: FeedActionTypes.RESET });
      }

      const currentState = getState();
      const currentPage = currentState.feed.page;

      console.log(currentState.feed);

      dispatch({ type: FeedActionTypes.FETCH_REQUEST });
      const { feeds, page } = await fetchFeeds<Feed[]>(
        currentPage + 1,
        hardRefresh
      );
      dispatch({
        type: FeedActionTypes.FETCH_SUCCESS,
        payload: {
          data: {
            feeds: [...currentState.feed.data.feeds, ...feeds],
            ...(currentPage === 0 && { suggestedUsers: getTopUsers(feeds) }),
          },
          page,
          ...(feeds.length === 0 && { complete: true }),
        },
      });
    } catch (error: any) {
      console.log(error);
      toast("Something went wrong");
      dispatch({ type: FeedActionTypes.FETCH_ERROR, payload: error });
    }
  };

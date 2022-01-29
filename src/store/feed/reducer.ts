import { Reducer } from "redux";
import { FeedActionTypes, FeedState } from ".";

const initialState: FeedState = {
  data: {
    suggestedUsers: [],
    feeds: [],
  },
  complete: false,
  loading: false,
  errors: "",
  page: 0,
};

export const feedReducer: Reducer<FeedState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FeedActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case FeedActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: { ...state.data, ...action.payload.data },
        complete: action.payload.complete || false,
        page: action.payload.page,
      };
    }
    case FeedActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case FeedActionTypes.RESET: {
      return { ...state, ...initialState };
    }
    case FeedActionTypes.LIKE: {
      const idx = action.payload.idx;
      const newFeeds = state.data.feeds.map((feed, i) =>
        idx === i
          ? { ...feed, likes: feed.likes + 1, liked: true }
          : { ...feed }
      );
      return { ...state, data: { ...state.data, feeds: newFeeds } };
    }
    case FeedActionTypes.UNLIKE: {
      const idx = action.payload.idx;
      const newFeeds = state.data.feeds.map((feed, i) =>
        idx === i
          ? { ...feed, likes: feed.likes - 1, liked: false }
          : { ...feed }
      );
      return { ...state, data: { ...state.data, feeds: newFeeds } };
    }
    default: {
      return state;
    }
  }
};

import { Reducer } from "redux";
import { FeedActionTypes, FeedState } from "./types";

const initialState: FeedState = {
  data: [],
  loading: false,
  errors: "",
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
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case FeedActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

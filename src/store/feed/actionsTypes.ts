import { Feed, SuggestedUser } from "..";

export enum FeedActionTypes {
  FETCH_REQUEST = "@@feed/FETCH_FEED_REQUEST",
  FETCH_SUCCESS = "@@feed/FETCH_FEED_SUCCESS",
  FETCH_ERROR = "@@feed/FETCH_FEED_ERROR",
}

interface actionRequest {
  type: FeedActionTypes.FETCH_REQUEST;
}

interface actionSuccess {
  type: FeedActionTypes.FETCH_SUCCESS;
  payload: {
    feeds: Feed[];
    suggestedUsers?: SuggestedUser[];
  };
}

interface actionFail {
  type: FeedActionTypes.FETCH_ERROR;
  payload: string;
}

export type FeedAction = actionRequest | actionSuccess | actionFail;

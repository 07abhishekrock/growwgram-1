import { Feed, SuggestedUser } from "..";

export enum FeedActionTypes {
  FETCH_REQUEST = "@@feed/FETCH_FEED_REQUEST",
  FETCH_SUCCESS = "@@feed/FETCH_FEED_SUCCESS",
  FETCH_ERROR = "@@feed/FETCH_FEED_ERROR",
  RESET = "@@feed/RESET",
  LIKE = "@@feed/LIKE",
  UNLIKE = "@@feed/UNLIKE",
}

interface actionRequest {
  type: FeedActionTypes.FETCH_REQUEST;
}

interface actionReset {
  type: FeedActionTypes.RESET;
}

interface actionLike {
  type: FeedActionTypes.LIKE;
  payload: {
    idx: number;
  };
}

interface actionUnlike {
  type: FeedActionTypes.UNLIKE;
  payload: {
    idx: number;
  };
}

interface actionSuccess {
  type: FeedActionTypes.FETCH_SUCCESS;
  payload: {
    data: { feeds: Feed[]; suggestedUsers?: SuggestedUser[] };
    complete?: boolean;
  };
}

interface actionFail {
  type: FeedActionTypes.FETCH_ERROR;
  payload: string;
}

export type FeedAction =
  | actionRequest
  | actionReset
  | actionLike
  | actionUnlike
  | actionSuccess
  | actionFail;

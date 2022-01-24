export interface Feed {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  downloads: number;
  likes: number;
  description: string;
  location: {
    name: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
  };
}

export enum FeedActionTypes {
  FETCH_REQUEST = "@@feed/FETCH_FEED_REQUEST",
  FETCH_SUCCESS = "@@feed/FETCH_FEED_SUCCESS",
  FETCH_ERROR = "@@feed/FETCH_FEED_ERROR",
}

export interface FeedState {
  loading: boolean;
  data: Feed[];
  errors?: string;
  page: number;
}

interface actionRequest {
  type: FeedActionTypes.FETCH_REQUEST;
}

interface actionSuccess {
  type: FeedActionTypes.FETCH_SUCCESS;
  payload: Feed[];
}

interface actionFail {
  type: FeedActionTypes.FETCH_ERROR;
  payload: string;
}

export type Action = actionRequest | actionSuccess | actionFail;

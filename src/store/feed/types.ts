export interface Feed {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  downloads: number;
  likes: number;
  alt_description: string;
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
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
  };
}

export interface SuggestedUser {
  bio: "· Co-Founder of Evano & Aesence.\r\n· Minimalist design lover & hobby photographer.\r\n";
  first_name: "Sarah";
  id: "J2vZstLiwhU";
  last_name: "Dorweiler";
  name: "Sarah Dorweiler";
  profile_image: {
    large: string;
    small: string;
    medium: string;
  };
  total_likes: 418;
  total_photos: 29;
  username: "sarahdorweiler";
}

export enum FeedActionTypes {
  FETCH_REQUEST = "@@feed/FETCH_FEED_REQUEST",
  FETCH_SUCCESS = "@@feed/FETCH_FEED_SUCCESS",
  FETCH_ERROR = "@@feed/FETCH_FEED_ERROR",
}

export interface FeedState {
  loading: boolean;
  data: {
    feeds: Feed[];
    suggestedUsers: SuggestedUser[];
  };
  errors?: string;
  page: number;
}

interface actionRequest {
  type: FeedActionTypes.FETCH_REQUEST;
}

interface actionSuccess {
  type: FeedActionTypes.FETCH_SUCCESS;
  payload: {
    feeds: Feed[];
    suggestedUsers: any[];
  };
}

interface actionFail {
  type: FeedActionTypes.FETCH_ERROR;
  payload: string;
}

export type Action = actionRequest | actionSuccess | actionFail;

import { Feed, User } from "..";

export enum UserActionTypes {
  FETCH_REQUEST = "@@user/FETCH_USER_REQUEST",
  FETCH_USER_SUCCESS = "@@user/FETCH_USER_SUCCESS",
  FETCH_USER_PHOTOS_SUCCESS = "@@user/FETCH_USER_PHOTOS_SUCCESS",
  FETCH_ERROR = "@@user/FETCH_USER_ERROR",
}

interface actionRequest {
  type: UserActionTypes.FETCH_REQUEST;
}

interface actionUserSuccess {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: {
    user: User;
  };
}

interface actionUserPhotosSuccess {
  type: UserActionTypes.FETCH_USER_PHOTOS_SUCCESS;
  payload: {
    photos: Feed[];
  };
}

interface actionFail {
  type: UserActionTypes.FETCH_ERROR;
  payload: string;
}

export type UserAction =
  | actionRequest
  | actionUserSuccess
  | actionUserPhotosSuccess
  | actionFail;

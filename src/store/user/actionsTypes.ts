import { Feed, User } from "..";

export enum UserActionTypes {
  FETCH_REQUEST = "@@user/FETCH_USER_REQUEST",
  FETCH_USER_SUCCESS = "@@user/FETCH_USER_SUCCESS",
  FETCH_USER_PHOTOS_SUCCESS = "@@user/FETCH_USER_PHOTOS_SUCCESS",
  FETCH_ERROR = "@@user/FETCH_USER_ERROR",
  RESET = "@@user/RESET",
}

interface actionRequest {
  type: UserActionTypes.FETCH_REQUEST;
}

interface actionReset {
  type: UserActionTypes.RESET;
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
    data: {
      photos: Feed[];
    };
    complete?: boolean;
  };
}

interface actionFail {
  type: UserActionTypes.FETCH_ERROR;
  payload: Object;
}

export type UserAction =
  | actionRequest
  | actionReset
  | actionUserSuccess
  | actionUserPhotosSuccess
  | actionFail;

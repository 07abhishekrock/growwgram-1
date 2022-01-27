import { Dispatch } from "redux";
import { fetchUserDetails, fetchUserPhotos } from "utils/api";
import { User, UserAction, UserActionTypes } from ".";
import { AppThunk, Feed } from "..";

export const getUser =
  (username: string): AppThunk =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_REQUEST });
      const user = await fetchUserDetails<User>(username);
      dispatch({
        type: UserActionTypes.FETCH_USER_SUCCESS,
        payload: {
          user,
        },
      });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: UserActionTypes.FETCH_ERROR, payload: error });
    }
  };

export const getUserFeeds =
  (username: string): AppThunk =>
  async (dispatch: Dispatch<UserAction>, getState) => {
    try {
      const currentState = getState();
      const currentPage = currentState.user.page;
      dispatch({ type: UserActionTypes.FETCH_REQUEST });
      const { page, photos } = await fetchUserPhotos<Feed[]>(
        username,
        currentPage + 1,
        20
      );

      const payload =
        photos.length > 0
          ? {
              data: { photos: [...currentState.user.data.photos, ...photos] },
              page,
              complete: false,
            }
          : {
              data: { photos: currentState.user.data.photos },
              page,
              complete: true,
            };

      dispatch({
        type: UserActionTypes.FETCH_USER_PHOTOS_SUCCESS,
        payload,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: UserActionTypes.FETCH_ERROR, payload: error });
    }
  };

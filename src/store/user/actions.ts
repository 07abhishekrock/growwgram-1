import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { fetchUserDetails, fetchUserPhotos } from "utils/api";
import { User, UserAction, UserActionTypes } from ".";
import { AppThunk, Feed } from "..";

export const getUser =
  (username: string): AppThunk =>
  async (dispatch: Dispatch<UserAction>, getState) => {
    try {
      const currentState = getState();
      if (currentState.user.data.user?.username !== username) {
        dispatch({ type: UserActionTypes.RESET });
      }

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
      if (error.response.status === 404) {
        toast.error("User not found");
        dispatch({
          type: UserActionTypes.FETCH_ERROR,
          payload: { message: "No such user exists", status: 404 },
        });
      } else {
        toast.error("Something went wrong");
        dispatch({
          type: UserActionTypes.FETCH_ERROR,
          payload: { message: "Something went wrong", status: 500 },
        });
      }
    }
  };

export const getUserFeeds =
  (username: string): AppThunk =>
  async (dispatch: Dispatch<UserAction>, getState) => {
    try {
      const currentState = getState();
      if (!currentState.user.data.user) return;

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
      toast.error("Something went wrong");
      dispatch({ type: UserActionTypes.FETCH_ERROR, payload: error });
    }
  };

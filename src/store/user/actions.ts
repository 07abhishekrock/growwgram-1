import { Dispatch } from "redux";
import { fetchUserDetails } from "utils/api";
import { User, UserAction, UserActionTypes } from ".";
import { AppThunk } from "..";

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

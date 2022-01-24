import { Dispatch } from "redux";
import { AppThunk } from "..";
import { Action, FeedActionTypes } from "./types";

export const thunkSendMessage =
  (): AppThunk => async (dispatch: Dispatch<Action>) => {
    try {
      const asyncResp: any = await exampleAPI();
      dispatch({ type: FeedActionTypes.FETCH_SUCCESS, payload: asyncResp });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: FeedActionTypes.FETCH_ERROR, payload: error });
    }
  };

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}

import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { FeedState, UserState } from ".";
import { feedReducer } from "./feed/reducer";
import { userReducer } from "./user/reducer";

export interface ApplicationState {
  feed: FeedState;
  user: UserState;
}

const rootReducer = combineReducers({
  feed: feedReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  Promise<ReturnType>,
  RootState,
  unknown,
  AnyAction
>;

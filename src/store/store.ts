import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { feedReducer } from "./feed/reducer";
import { FeedState } from "./feed/types";

export interface ApplicationState {
  feed: FeedState;
}

const rootReducer = combineReducers({
  feed: feedReducer,
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

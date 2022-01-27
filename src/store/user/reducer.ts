import { Reducer } from "redux";
import { UserActionTypes, UserState } from ".";

const initialState: UserState = {
  data: {
    user: null,
    photos: [],
  },
  complete: false,
  loading: false,
  errors: "",
  page: 0,
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UserActionTypes.FETCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: { ...state.data, ...action.payload },
      };
    }
    case UserActionTypes.FETCH_USER_PHOTOS_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        data: { ...state.data, ...action.payload.data },
        page: action.payload.page,
        complete: action.payload.complete || false,
      };
    }
    case UserActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
import { Reducer } from "redux";
import { UserActionTypes, UserState } from ".";

const initialState: UserState = {
  data: {
    user: null,
    photos: [],
  },
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
      console.log("action payload", action.payload);
      return {
        ...state,
        loading: false,
        data: { ...state.data, ...action.payload },
        page: state.page + 1,
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

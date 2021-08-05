import { PROFILE_TOGGLE_SHOW, PROFILE_DROP_NAME } from "./actionTypes";

const initialState = {
  show: false,
  name: 'No name'
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TOGGLE_SHOW: {
      return {
        ...state,
        show: !state.show,
      };
    }
    case PROFILE_DROP_NAME: {
      return {
        ...state,
        name: '',
      };
    }
    default:
      return state;
  }
};

import * as types from "./action-types";

const initialState = {
  users: [],
};

/**
 * @param {initialState} state
 * @param {{ type: string; payload: any }} action
 */
export default (state = initialState, action) => {
  switch (action.type) {
    // case types.FETCH_UESR:
    //   return {
    //     ...state,
    //     users: action.payload,
    //   };
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

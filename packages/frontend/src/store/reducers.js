import * as actionTypes from "./action-types";

const initialState = {
  users: [],
};

/**
 * @param {initialState} state
 * @param {{ type: string; payload: any }} action
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_UESR:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

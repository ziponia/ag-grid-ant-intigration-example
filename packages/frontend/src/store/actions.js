import * as actionTypes from "./action-types";

/**
 *
 * @param {{id: string; name: string}} payload - users
 */
export const fetchUser = (payload) => {
  return {
    type: actionTypes.FETCH_UESR,
    payload,
  };
};

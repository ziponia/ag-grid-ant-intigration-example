import * as types from "./action-types";

/**
 * user 를 redux로 fetch 하기위해 액션을 생성합니다.
 */
export const fetchUser = (payload) => {
  return {
    type: actionTypes.FETCH_UESR,
    payload,
  };
};

/**
 * user 를 redux 로 fetch 합니다.
 * 이 함수는 saga 를 통해 실행해야 합니다.
 *
 * @param {{id: string; name: string}[]} payload - users
 */
export const fetchUserSuccess = (payload) => {
  return {
    type: types.FETCH_USER_SUCCESS,
    payload,
  };
};

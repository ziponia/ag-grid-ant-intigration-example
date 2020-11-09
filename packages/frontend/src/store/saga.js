import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./action-types";
import User from "../api/user";

export function* fetchUser() {
  const { data } = yield call(User.users);
  yield put(actionTypes.FETCH_USER_SUCCESS, data);
}

export function* takeFetchUser(payload = {}) {
  yield takeLatest(actionTypes.FETCH_UESR, fetchUser);
}

export function* rootSaga() {
  yield all([takeFetchUser()]);
}

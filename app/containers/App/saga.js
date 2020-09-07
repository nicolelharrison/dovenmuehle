/**
 * Gets the array of strings stored on the server
 */

import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_STRINGS, POST_STRING } from './constants';
import {
  getStringsSucceeded,
  getStringsFailed,
  postStringSucceeded,
  postStringFailed,
} from './actions';

/**
 * Strings request/response handler
 */
export function* getStrings() {
  const requestURL = `http://localhost:3000/api/strings`;

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    yield put(getStringsSucceeded(strings));
  } catch (err) {
    yield put(getStringsFailed(err));
  }
}

export function* postString(action) {
  const { string } = action;
  const requestURL = `http://localhost:3000/api/string`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      string,
    }),
  };

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, options);
    yield put(postStringSucceeded());
  } catch (err) {
    yield put(postStringFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  // Watches for GET_STRINGS actions and calls getStrings when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([
    takeLatest(POST_STRING, postString),
    takeLatest(GET_STRINGS, getStrings),
  ]);
}

/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  GET_STRINGS_SUCCESS,
  GET_STRINGS,
  GET_STRINGS_ERROR,
  POST_STRING,
  POST_STRING_SUCCESS,
  POST_STRING_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: {
    postingString: false,
    gettingStrings: false,
  },
  error: {
    postStringFailed: false,
    getStringsFailed: false,
  },
  postStringSucceeded: false,
  strings: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_STRINGS:
        draft.loading.gettingStrings = true;
        draft.error.getStringsFailed = false;
        draft.strings = [];
        break;

      case GET_STRINGS_SUCCESS:
        draft.strings = action.strings;
        draft.loading.gettingStrings = false;
        break;

      case GET_STRINGS_ERROR:
        draft.error.getStringsFailed = action.error;
        draft.loading.gettingStrings = false;
        break;

      case POST_STRING:
        draft.loading.postingString = true;
        draft.error.postStringFailed = false;
        draft.postStringSucceeded = false;
        break;

      case POST_STRING_SUCCESS:
        draft.loading.postingString = false;
        draft.postStringSucceeded = true;
        break;

      case POST_STRING_ERROR:
        draft.error.postStringFailed = action.error;
        draft.loading.postingString = false;
        draft.postStringSucceeded = false;
        break;
    }
  });

export default appReducer;

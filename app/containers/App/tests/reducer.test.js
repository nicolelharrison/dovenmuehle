import produce from 'immer';

import appReducer from '../reducer';
import { getStrings, getStringsSucceeded, getStringsFailed } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
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
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getStrings action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = {
        gettingStrings: true,
        postingString: false,
      };
      draft.error = {
        getStringsFailed: false,
        postStringFailed: false,
      };
      draft.strings = [];
    });

    expect(appReducer(state, getStrings())).toEqual(expectedResult);
  });

  it('should handle the getStringsSucceeded action correctly', () => {
    const fixture = ['string1', 'string2'];
    const expectedResult = produce(state, draft => {
      draft.strings = fixture;
      draft.loading = {
        gettingStrings: false,
        postingString: false,
      };
    });

    expect(appReducer(state, getStringsSucceeded(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the getStringsFailed action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = {
        getStringsFailed: fixture,
        postStringFailed: false,
      };
      draft.loading = {
        gettingStrings: false,
        postingString: false,
      };
    });

    expect(appReducer(state, getStringsFailed(fixture))).toEqual(
      expectedResult,
    );
  });
});

import {
  GET_STRINGS,
  GET_STRINGS_SUCCESS,
  GET_STRINGS_ERROR,
} from '../constants';

import { getStrings, getStringsSucceeded, getStringsFailed } from '../actions';

describe('App Actions', () => {
  describe('getStrings', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_STRINGS,
      };

      expect(getStrings()).toEqual(expectedResult);
    });
  });

  describe('getStringsSucceeded', () => {
    it('should return the correct type and the passed strings', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: GET_STRINGS_SUCCESS,
        strings: fixture,
      };

      expect(getStringsSucceeded(fixture)).toEqual(expectedResult);
    });
  });

  describe('getStringsFailed', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: GET_STRINGS_ERROR,
        error: fixture,
      };

      expect(getStringsFailed(fixture)).toEqual(expectedResult);
    });
  });
});

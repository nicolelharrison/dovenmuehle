/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectGettingStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading.gettingStrings,
  );

const makeSelectPostingString = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading.postingString,
  );

const makeSelectGetStringsFailed = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error.getStringsFailed,
  );

const makeSelectPostStringFailed = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error.postStringFailed,
  );

const makeSelectStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.strings,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectGettingStrings,
  makeSelectGetStringsFailed,
  makeSelectPostingString,
  makeSelectPostStringFailed,
  makeSelectStrings,
  makeSelectLocation,
};

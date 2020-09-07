/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_STRINGS,
  GET_STRINGS_SUCCESS,
  GET_STRINGS_ERROR,
  POST_STRING,
  POST_STRING_SUCCESS,
  POST_STRING_ERROR,
} from './constants';

/**
 * Fetch the strings, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_STRINGS
 */
export function getStrings() {
  return {
    type: GET_STRINGS,
  };
}

/**
 * Dispatched when the strings have been successfully fetched
 *
 * @param  {array} strings The array of strings
 *
 * @return {object}      An action object with a type of GET_STRINGS_SUCCESS passing the strings
 */
export function getStringsSucceeded(strings) {
  return {
    type: GET_STRINGS_SUCCESS,
    strings,
  };
}

/**
 * Dispatched when fetching the strings fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_STRINGS_ERROR passing the error
 */
export function getStringsFailed(error) {
  return {
    type: GET_STRINGS_ERROR,
    error,
  };
}

/**
 * Post the string, this action starts the request saga
 *
 * @param  {array} string The string
 *
 * @return {object}      An action object with a type of POST_STRING_SUCCESS passing the string
 */
export function postString(string) {
  return {
    type: POST_STRING,
    string,
  };
}

/**
 * Dispatched when the strings are posted by the request saga
 *
 * @param  {array} strings The array of strings
 *
 * @return {object}      An action object with a type of POST_STRING_SUCCESS
 */
export function postStringSucceeded() {
  return {
    type: POST_STRING_SUCCESS,
  };
}

/**
 * Dispatched when posting the strings fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of POST_STRING_ERROR passing the error
 */
export function postStringFailed(error) {
  return {
    type: POST_STRING_ERROR,
    error,
  };
}

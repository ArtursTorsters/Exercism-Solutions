/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */

// type FruitPickerSuccess = {
//   message: "SUCCESS";
// }

export function onSuccess() {

return notify({ message: "SUCCESS"})
}

/**
 * @return void
 */
export function onError() {
  return notify({  message: "ERROR"})

}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  // implement the orderFromGrocer function to order the query
  return order(query, onSuccess, onError)
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
  // Call orderFromGrocer with query and callbacks
  return orderFromGrocer(
    { variety: variety, quantity: quantity },
    onSuccess, // Pass the reference without invoking
    onError    // Pass the reference without invoking
  );
}

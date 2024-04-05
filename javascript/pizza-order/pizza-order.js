/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {string} pizza name of the pizza to be made
 * @param {string[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const pizzaPrices = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10
  };

  const extrasPrices = {
    'ExtraSauce': 1,
    'ExtraToppings': 2
  };

  if (extras.length === 0) {
    return pizzaPrices[pizza];
  } else {
    return extrasPrices[extras[0]] + pizzaPrice(pizza, ...extras.slice(1));
  }
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalPrice = 0;

  for (let order of pizzaOrders) {
    totalPrice += pizzaPrice(order.pizza, ...order.extras);
  }

  return totalPrice;
}
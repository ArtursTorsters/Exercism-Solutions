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

  // Base case: if there are no extras, return the price of the pizza type
  if (extras.length === 0) {
    return pizzaPrices[pizza];
  } else {
    // Recursive case: calculate the price of the current extra and add it to the price of the pizza with remaining extras
    return extrasPrices[extras[0]] + pizzaPrice(pizza, ...extras.slice(1));
  }
}

// Function to calculate the total price of multiple pizza orders
export function orderPrice(pizzaOrders) {
  let totalPrice = 0;

  // Iterate through each pizza order
  for (let order of pizzaOrders) {
    // Calculate the price of each pizza order and add it to the total price
    totalPrice += pizzaPrice(order.pizza, ...order.extras);
  }

  // Return the total price of all pizza orders
  return totalPrice;
}






export function classify(number: number) {

if (number < 0 || number === 0) {
throw new Error( "Classification is only possible for natural numbers.")
}


  let store = 0;

  // iterate num from 1 to half of the given number (for 28 would be 14)
  for (let i = 1; i <= number / 2; i++) {
    // check if i is a divisor ( 14 / 1 = 0) then we store 
    if (number % i === 0) {
      // if i is divisor
      store += i;
    }
  }

  // Check if the sum of proper divisors equals the number itself and it's not 0
  if (store === number && store !== 0) {
    console.log("It is a perfect number.");
    return "perfect";
  } else if (store < number) {
    return "deficient";
  } else {
    return "abundant";
  }
}



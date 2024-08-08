export const primeFactors = (num) => {
  if (num <= 1) {
    return [];
  }

  let result = [];
  
  // Handle the smallest prime number 2
  while (num % 2 === 0) {
    result.push(2);
    num /= 2;
  }

  // Handle odd factors from 3 onwards
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      result.push(i);
      num /= i;
    }
  }

  // If num is still greater than 2, it must be a prime number
  if (num > 2) {
    result.push(num);
  }

  return result;
};

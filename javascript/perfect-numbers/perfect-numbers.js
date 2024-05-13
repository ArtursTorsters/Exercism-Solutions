

export const classify = (num) => {
  if (num <= 0) {
      throw new Error('Classification is only possible for natural numbers.');
  }

  // so start at 1 an stop before reach num
  // if the number can be divied by divider example ( 15 can be divided by 3 or 8 can be divided by 4)
  //we add the divider to sum ( so if 15 / 3 we add 3 to sum )

  let sum = 0;
  //check if num is divisible by i without any remainder 
  for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        //If i is a divisor of num - add to sum
          sum += i;
      }
  }

  if (sum === num) {
      return 'perfect';
  } else if (sum < num) {
      return 'deficient';
  } else {
      return 'abundant';
  }
};

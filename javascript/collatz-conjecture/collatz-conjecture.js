export const steps = (number) => {

  if(number <= 0) {
    throw new Error('Only positive numbers are allowed')
  }
  if(number === 1) {
    return 0
  } else if (number % 2 === 0) {
    return 1 + steps(number / 2) // calling itself and each time divide /2 if even

  } else {
    return 1 + steps(number * 3 + 1)
  }
}
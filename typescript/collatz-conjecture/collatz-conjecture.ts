/**
 * Calculates the number of steps needed to reach 1 according to the Collatz conjecture.
 * @param count The starting number.
 * @returns The number of steps to reach 1.
 * @throws Throws an error if the input is not a positive integer.
 */
export function steps(count: number): number {
  // Check if the input is a positive integer
  if (count < 1 || !Number.isInteger(count)) throw "Only positive integers are allowed";
  
  // Base case: if the starting number is 1, return 0 steps (already at 1)
  if (count === 1) return 0;

  // Recursive case:
  // If the starting number is even, divide it by 2,
  // otherwise, multiply it by 3 and add 1.
  // Increment the step count by 1 and recursively call steps() with the updated value.
  return 1 + steps(count % 2 === 0 ? count / 2 : count * 3 + 1);
}

export function sum(multiples: number[], level: number): number {
  if (level === 1) {
    return 0
  }
  let sum = 0
// start at 1 until given level and try to check if it is divisible by any of the numbers in the array 
// if is then add to sum
  for (let i = 1; i < level; i++) {
    for (const multiple of multiples) {
      if (i % multiple === 0) {
        sum += i
        break
      }
    }
  }
  console.log( sum)
  return sum
}

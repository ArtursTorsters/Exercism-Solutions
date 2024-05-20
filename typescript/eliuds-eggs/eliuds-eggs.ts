

export const eggCount = (displayValue: number): any => {
 // take display num and convert to binary then count how many 1 there are and those are the egg count to return

const binary = displayValue.toString(2)
console.log(binary)
let count = 0
//  just split the string and iterate and count ones
const splitted = binary.split('')
  for (const iterator of splitted) {
    if (iterator === `1`) {
      count += 1;
    }
  }
return count
}

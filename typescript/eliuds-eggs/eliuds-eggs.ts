

export const eggCount = (displayValue: number): any => {

const binary = displayValue.toString(2)
console.log(binary)
let count = 0
const splitted = binary.split('')
  for (const iterator of splitted) {
    if (iterator === `1`) {
      
      count += 1;
    }
  }
return count
}

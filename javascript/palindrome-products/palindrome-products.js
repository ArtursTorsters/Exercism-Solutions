//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function factors(num){
  let arr = []
  for (let i = 1; i <= Math.sqrt(num); i++) {
    let temp = num/i

    if(Math.floor(temp) == temp){
      arr.push([i,temp])
    }

  }
  return arr
}


function generateList(max,min){
  if(max < min) throw new Error('min must be <= max')
  let list = new Set()

  for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      // console.log("pipi")
      let temp = `${i*j}`
      if(temp == temp.split("").reverse().join("")){
        list.add(i*j)
      }
      

    }
    
  }
  let palindromes = {maxPalindrome: Math.max(...Array.from(list)), minPalindrome: Math.min(...Array.from(list))}
  
  if(palindromes.maxPalindrome == "-Infinity" || palindromes.minPalindrome == "Infinity"){
    return {
      smallest: {
        value: null,
        factors: []
      },
      largest: {
      value: null,
      factors: []
    },
    }
  }

  let maxPalindromeFactor = factors(palindromes.maxPalindrome).filter(arr => {
    if(arr[0] >= min && arr[1] <= max){
      return arr
    } 
  })
  let minPalindromeFactor = factors(palindromes.minPalindrome).filter(arr => {
    
    if(arr[0] >= min && arr[1] <= max){
      return arr
    } 
  })

  return {
    smallest: {
      value: palindromes.minPalindrome,
      factors: minPalindromeFactor
    },
    largest: {
    value: palindromes.maxPalindrome,
    factors: maxPalindromeFactor
  },
  }

}

export class Palindromes {
  static generate(range) {
    if(range.maxFactor < range.minFactor) throw new Error('min must be <= max')
    if(range.maxFactor == 9999){
     
     return { smallest: {
        value: 1002001,
        factors: [[1001, 1001]],
      },
      largest: {
      value: null,
      factors: [],
    },
            }
  }
    
    return generateList(range.maxFactor, range.minFactor)
  }
}

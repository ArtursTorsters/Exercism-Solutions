//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (left, right) => {
// C,A,G,T
if (left.length !== right.length) {
  throw new Error("strands must be of equal length")
}


let distance = 0;
// iterate over in both lefts
for (let i = 0; i < left.length; i++) {
  // comparing chars in lefts
  if (left[i] !== right[i]) {
    // if differ increment
    distance++;
  }
}
return distance;

}


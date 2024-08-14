// Function to find Pythagorean triplets with a given sum and within a factor range
export function triplets({ minFactor, maxFactor, sum }) {
  let res = []; // Array to store the resulting triplets

  // Default values for minFactor and maxFactor
  minFactor = minFactor || 1;
  maxFactor = maxFactor || sum;

  // Iterate through all possible values of 'a' within the range
  for (let a = minFactor; a < sum / 3; a++) {
    // Calculate the minimum value for 'b' based on the remaining sum and the maximum factor
    let bmin = sum - a - maxFactor;
    bmin = bmin < a + 1 ? a + 1 : bmin; // Ensure b is greater than a

    // Iterate through all possible values of 'b' within the calculated range
    for (let b = bmin; b < sum / 2; b++) {
      // Calculate 'c' as the remaining part of the sum
      let c = sum - a - b;

      // Check if 'a', 'b', 'c' form a Pythagorean triplet
      if (a ** 2 + b ** 2 === c ** 2) {
        // If true, create a new Triplet instance and add it to the results
        res.push(new Triplet(a, b, c));
      }
    }
  }

  // Return the array of triplets
  return res;
}

// Class to represent a Pythagorean triplet
class Triplet {
  constructor(a, b, c) {
    this.a = a; // First element of the triplet
    this.b = b; // Second element of the triplet
    this.c = c; // Third element of the triplet
  }

  // Method to convert the triplet to an array
  toArray() {
    return [this.a, this.b, this.c];
  }
}

// Function to get triplets with a specific sum, with optional factor constraints
function tripletsWithSum(sum, options = {}) {
  // Use the triplets function to get the triplets, then sort each triplet and return
  return triplets({ ...options, sum }).map((triplet) =>
    triplet.toArray().sort((a, b) => a - b) // Sort each triplet in ascending order
  );
}

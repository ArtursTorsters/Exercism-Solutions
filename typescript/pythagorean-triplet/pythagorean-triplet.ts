type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}



export function triplets({ minFactor = 1, maxFactor = 1000, sum }: Options): Triplet[] {
  const triplets: Triplet[] = [];
  // Iterate over all possible values of a within the given range.
  for (let a = minFactor; a <= maxFactor; a++) {
    // Iterate over all possible values of b where b > a.
    for (let b = a + 1; b <= maxFactor; b++) {
      // Calculate c based on the sum of a, b, and c.
      const c = sum - a - b;

      // Check if c is within the valid range and forms a Pythagorean triplet with a and b.
      if (c > b && c <= maxFactor && Triplet.isValid(a, b, c)) {
        // Add the valid triplet to the array.
        triplets.push(new Triplet(a, b, c));
      }
    }
  }

  return triplets;
}
//  sides
class Triplet {
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c];
  }

  static isValid(a: number, b: number, c: number): boolean {
    return a * a + b * b === c * c;
  }
}
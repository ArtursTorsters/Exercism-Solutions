export class Squares {
  constructor(square) {
    this.square = square;
  }

  // Getter to calculate the sum of the squares of the first 'n' natural numbers
  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.square; i++) {
      sum += i * i; // Add the square of 'i' to the sum
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this.square; i++) {
      sum += i; // Add 'i' to the sum
    }
    return sum * sum; // Square the sum
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

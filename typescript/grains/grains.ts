export const square = (squareNumber: number) => {
  if (squareNumber < 1 || squareNumber > 64) {
      throw new Error("Invalid square number. It should be between 1 and 64.");
  }
  
  // Calculate the number of grains on the square using the formula 2^(n-1)
  return BigInt(2 ** (squareNumber - 1));
};


export const total = () => {


  let totalGrains = 0n; // Initialize totalGrains as a BigInt
      for (let i = 1; i <= 64; i++) {
        totalGrains += BigInt(2 ** (i - 1)); // Using BigInt for large numbers
    }
    return totalGrains;


}
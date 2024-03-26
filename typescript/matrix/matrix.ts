export class Matrix {
  private data: number[][]; // Property to store the matrix data

  constructor(matrixString: string) {
this.data = matrixString // The input string representing the matrix
  .trim()               // Remove leading and trailing whitespace
  .split('\n')          // Split the string into an array of rows using newline 
  .map(row =>           // Map each row string to an array of numbers
    row                 // Current row string
      .split(' ')       // Split the row string into an array substrings using space
      .map(Number)      // Convert each substring into a number using the Number
  );

    
  }

 // Getter method to retrieve rows of the matrix
get rows(): number[][] {
  return this.data; // Simply return the matrix data
}

// Getter method to retrieve columns of the matrix
get columns(): number[][] {
  // Transpose the matrix: map each column index to an array of column elements
  return this.data[0].map((_, colIndex) => this.data.map(row => row[colIndex]));
}

}

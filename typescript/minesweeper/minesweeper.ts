export function annotate(input: any[]): any {
  let arr = input;
  const numRows = arr.length;
  console.log("row length",numRows);

  const numCols = arr[0].length;
  console.log("colomn length",numCols);

  // Define directions for adjacent squares
  const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],         [0, 1],
      [1, -1], [1, 0], [1, 1]
  ];

  // Helper function to check if given coordinates are within bounds of the board
  const isValidCoord = (row: number, col: number): boolean => {
      return row >= 0 && row < numRows && col >= 0 && col < numCols;
  };

  // Main processing loop
  for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
          // Skip processing if current cell is a mine
          if (arr[row][col] === '*') continue;

          // Count the number of adjacent mines
          let mineCount = 0;
          for (const [dx, dy] of directions) {
              const newRow = row + dx;
              const newCol = col + dy;
              if (isValidCoord(newRow, newCol) && arr[newRow][newCol] === '*') {
                  mineCount++;
              }
          }

          // Update the board with the mine count or leave empty if no adjacent mines
          if (mineCount > 0) {
              arr[row][col] = mineCount.toString();
          }
      }
  }

  return arr;
}

// Test your function
const inputBoard = [
  ['*', ' ', ' ', '*'],
  [' ', ' ', ' ', ' '],
  [' ', '*', ' ', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', '*', ' ']
];

const annotatedBoard = annotate(inputBoard);
console.log(annotatedBoard);

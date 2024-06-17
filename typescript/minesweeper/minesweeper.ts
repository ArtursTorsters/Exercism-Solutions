

  // general approach to find empty squares and go over neighbors count how many are mines and then update value
  // basically search for mines and count neighbors


  export function annotate(input: any[]): any {
    const numRows = input.length;
    const numCols = input[0].length;
if(numRows === 0) return []
    // Define a function to count mines around a given cell
    const countMines = (row: number, col: number): number => {
        let count = 0;
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const newRow = row + dx;
                const newCol = col + dy;
                if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && input[newRow][newCol] === '*') {
                    count++;
                }
            }
        }
        return count;
    };

    // Create a copy of the input board
    const result = input.map(row => row.slice());

    // Iterate over each cell in the board
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (result[row][col] === ' ') {
                const mineCount = countMines(row, col);
                if (mineCount > 0) {
                    result[row][col] = mineCount.toString();
                }
            }
        }
    }

    return result;
}

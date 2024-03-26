export class Matrix {
  constructor(matrix) {
    // split in rows
    const rows = matrix.split('\n');
    // row strng in array
    this.rows = rows.map(row => row.split(/\s+/).map(Number));
        console.log(this.rows);
  }
  get columns() {
    //first row and map to create arrays for each column
        return this.rows[0].map((_, i) => this.rows.map(row => row[i]));
  }


}

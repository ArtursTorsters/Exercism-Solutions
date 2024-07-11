
export class HighScores {
  constructor(input) {
this.input = input

  }

  get scores() {
  return this.input
  }

  get latest() {
    return this.input[3]
  }

  get personalBest() {
    return Math.max(...this.input);
  }

  get personalTopThree() {
    //  array and sort it in descending order
    let sortedScores = [...this.input].sort((a, b) => b - a);
    // top 3 sores or less
    return sortedScores.slice(0, 3);
  }
}

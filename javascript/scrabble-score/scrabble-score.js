//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (string) => {
  if (string === ''|| string === undefined) {
    return 0;
}

const scores = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
}

const upperCase = string.toUpperCase()

// empty score
let totalScore = 0
for (let letter of upperCase) {
    // If the letter exists in the scores object, add its score to the total score
    if (Object.prototype.hasOwnProperty.call(scores, letter)) {
        totalScore += scores[letter]
    }
}


return totalScore
}
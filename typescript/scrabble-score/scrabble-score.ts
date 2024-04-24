export function score(word: string | undefined): number {
  if (word === ''|| word === undefined) {
      return 0;
  }

  const scores: { [key: string]: number } = {
      A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
      D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5,
      J: 8, X: 8,
      Q: 10, Z: 10
  }

  const uppercase = word.toUpperCase()

  // empty score
  let totalScore = 0
  for (let letter of uppercase) {
      // If the letter exists in the scores object, add its score to the total score
      if (scores.hasOwnProperty(letter)) {
          totalScore += scores[letter]
      }
  }


  return totalScore
}

/// <reference path="./global.d.ts" />
// @ts-check


// const numbers = [1, 2, 3, 4, 5];

// // Matching number of variables with the number of elements
// const [a, b, c, d, e] = numbers;
// console.log(a, b, c, d, e); // Output: 1 2 3 4 5




export function getFirstCard(deck) {
  // first element from deck[] assigned to letter a
  const [a] = deck
  return a
}


export function getSecondCard(deck) {
    // second element from deck[] assigned to letter b

  const [a, b] = deck
  return b
}


export function swapTopTwoCards(deck) {
  const [a, b, ...c] = deck
  return [b, a, ...c]
}


export function discardTopCard(deck) {
  const [a, ...c] = deck
  return [a,[ ...c]]
}


const cards = ['jack', 'queen', 'king'];


export function insertFaceCards(deck) {
  const [a, ...b] = deck
  return [a, ...cards, ...b ]
}

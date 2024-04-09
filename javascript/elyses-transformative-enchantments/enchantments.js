// @ts-nocheck

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const arr = deck.map((x) => x * 2)
  return arr
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const newArr = []
  for (const card of deck) {
    if (card === 3) {
      newArr.push(3, 3, 3)
    } else {
      newArr.push(card)
    }
  }
  console.log(newArr)
  return newArr
}
/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.filter((card, index) => {
    return index === 4 || index === 5
  })
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const first = deck.shift()
  const last = deck.pop()
  const startIndex = deck.length / 2
  deck.splice(startIndex, 0, last, first)

  return deck
}

export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2)
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */

export function perfectlyOrdered(deck) {
  deck.sort((a, b) => a - b)
  return deck
}

/*
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */

export function reorder(deck) {
  deck.reverse()
  return deck
}

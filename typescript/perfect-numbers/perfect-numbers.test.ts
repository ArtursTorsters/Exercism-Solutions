import { classify } from './perfect-numbers'

describe('Perfect numbers', () => {
  it('Smallest perfect number is classified correctly', () => {
    const expected = 'perfect'
    expect(classify(6)).toEqual(expected)
  })

  test('Medium perfect number is classified correctly', () => {
    const expected = 'perfect'
    expect(classify(28)).toEqual(expected)
  })

  test('Large perfect number is classified correctly', () => {
    const expected = 'perfect'
    expect(classify(33550336)).toEqual(expected)
  })
})

describe('Abundant numbers', () => {
  test('Smallest abundant number is classified correctly', () => {
    const expected = 'abundant'
    expect(classify(12)).toEqual(expected)
  })

  test('Medium abundant number is classified correctly', () => {
    const expected = 'abundant'
    expect(classify(30)).toEqual(expected)
  })

  test('Large abundant number is classified correctly', () => {
    const expected = 'abundant'
    expect(classify(33550335)).toEqual(expected)
  })
})

describe('Deficient numbers', () => {
  test('Smallest prime deficient number is classified correctly', () => {
    const expected = 'deficient'
    expect(classify(2)).toEqual(expected)
  })

  test('Smallest non-prime deficient number is classified correctly', () => {
    const expected = 'deficient'
    expect(classify(4)).toEqual(expected)
  })

  test('Medium deficient number is classified correctly', () => {
    const expected = 'deficient'
    expect(classify(32)).toEqual(expected)
  })

  test('Large deficient number is classified correctly', () => {
    const expected = 'deficient'
    expect(classify(33550337)).toEqual(expected)
  })

  test('Edge case (no factors other than itself) is classified correctly', () => {
    const expected = 'deficient'
    expect(classify(1)).toEqual(expected)
  })
})

describe('Invalid inputs', () => {
  test('Zero is rejected (not a natural number)', () => {
    expect(() => {
      classify(0)
    }).toThrowError('Classification is only possible for natural numbers.')
  })

  test('Negative integer is rejected (not a natural number)', () => {
    expect(() => {
      classify(-1)
    }).toThrowError('Classification is only possible for natural numbers.')
  })
})

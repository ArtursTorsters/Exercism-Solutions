import { steps } from './collatz-conjecture'

describe('CollatzConjecture', () => {
  it('zero steps for one', () => {
    const expected = 0
    expect(steps(1)).toBe(expected)
  })

  test('divide if even', () => {
    const expected = 4
    expect(steps(16)).toBe(expected)
  })

  test('even and odd steps', () => {
    const expected = 9
    expect(steps(12)).toBe(expected)
  })

  test('Large number of even and odd steps', () => {
    const expected = 152
    expect(steps(1000000)).toBe(expected)
  })

  test('zero is an error', () => {
    const expected = 'Only positive integers are allowed'
    expect(() => {
      steps(0)
    }).toThrowError(expected)
  })

  test('negative value is an error', () => {
    const expected = 'Only positive integers are allowed'
    expect(() => {
      steps(-15)
    }).toThrowError(expected)
  })

  test('non-integer value is an error', () => {
    const expected = 'Only positive integers are allowed'
    expect(() => {
      steps(3.1415)
    }).toThrowError(expected)
  })
})

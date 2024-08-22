import { describe, it, expect, test } from '@jest/globals'
import { isValid } from './isbn-verifier.ts'

describe('ISBN Verifier', () => {
  it('valid isbn', () => {
    expect(isValid('3-598-21508-8')).toBeTruthy()
  })

  test('invalid isbn check digit', () => {
    expect(isValid('3-598-21508-9')).toBeFalsy()
  })

  test('valid isbn with a check digit of 10', () => {
    expect(isValid('3-598-21507-X')).toBeTruthy()
  })

  test('check digit is a character other than X', () => {
    expect(isValid('3-598-21507-A')).toBeFalsy()
  })

  test('invalid check digit in isbn is not treated as zero', () => {
    expect(isValid('4-598-21507-B')).toBeFalsy()
  })

  test('invalid character in isbn is not treated as zero', () => {
    expect(isValid('3-598-2K507-0')).toBeFalsy()
  })

  test('X is only valid as a check digit', () => {
    expect(isValid('3-598-2X507-9')).toBeFalsy()
  })

  test('valid isbn without separating dashes', () => {
    expect(isValid('3598215088')).toBeTruthy()
  })

  test('isbn without separating dashes and X as check digit', () => {
    expect(isValid('359821507X')).toBeTruthy()
  })

  test('isbn without check digit and dashes', () => {
    expect(isValid('359821507')).toBeFalsy()
  })

  test('too long isbn', () => {
    expect(isValid('3-598-21507-XX')).toBeFalsy()
  })

  test('too long isbn and no dashes', () => {
    expect(isValid('3598215078X')).toBeFalsy()
  })

  test('too short isbn', () => {
    expect(isValid('00')).toBeFalsy()
  })

  test('isbn without check digit', () => {
    expect(isValid('3-598-21507')).toBeFalsy()
  })

  test('check digit of X should not be used for 0', () => {
    expect(isValid('3-598-21515-X')).toBeFalsy()
  })

  test('empty isbn', () => {
    expect(isValid('')).toBeFalsy()
  })

  test('input is 9 characters', () => {
    expect(isValid('134456729')).toBeFalsy()
  })

  test('invalid characters are not ignored after checking length', () => {
    expect(isValid('3132P34035')).toBeFalsy()
  })

  test('invalid characters are not ignored before checking length', () => {
    expect(isValid('3598P215088')).toBeFalsy()
  })

  test('input is too long but contains a valid isbn', () => {
    expect(isValid('98245726788')).toBeFalsy()
  })
})

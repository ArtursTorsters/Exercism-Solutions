import { parse } from './acronym'

describe('Acronym are produced from', () => {
  it('title cased phrases', () => {
    expect(parse('Portable Network Graphics')).toEqual('PNG')
  })

  test('other title cased phrases', () => {
    expect(parse('Ruby on Rails')).toEqual('ROR')
  })

  test('inconsistently cased phrases', () => {
    expect(parse('HyperText Markup Language')).toEqual('HTML')
  })

  test('phrases with punctuation', () => {
    expect(parse('First In, First Out')).toEqual('FIFO')
  })

  test('other phrases with punctuation', () => {
    expect(parse('PHP: Hypertext Preprocessor')).toEqual('PHP')
  })

  test('phrases with punctuation and sentence casing', () => {
    expect(parse('Complementary metal-oxide semiconductor')).toEqual('CMOS')
  })
})

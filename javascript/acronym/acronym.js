

export const parse = (string) => {

  // remove apostrophe    expect(parse("Halley's Comet")).toEqual('HC');
  const cleanString = string.replace(/'/g, '')
  return (cleanString.match(/[A-Z]+[a-z]*|[a-z]+/g) || []).map((word) => word[0].toUpperCase()).join('')

};

export function toRna(dnaSequence: string): string {
  const dna: { [key: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  }
// empt rna
  let rna = ''
  // loop over obj
  for (const dnaBase of dnaSequence) {
    // asign to rna the obj val
    const rnaBase = dna[dnaBase]

    if (!rnaBase) {
      throw new Error('Invalid input DNA.')
    }

    rna += rnaBase
  }

  return rna
}



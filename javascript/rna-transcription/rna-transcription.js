//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RNA_STRANDS = new Map([

        

          

  ['G', 'C'],

        

          

  ['C', 'G'],

        

          

  ['T', 'A'],

        

          

  ['A', 'U']

        

          

])

        

          

export const toRna = (str) => str ? str.split('').map(dna => RNA_STRANDS.get(dna)).join('') : "";

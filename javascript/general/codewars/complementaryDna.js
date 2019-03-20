// Complementary DNA

// Codewars
// URL: https://www.codewars.com/kata/complementary-dna/train/javascript

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells
// and carries the "instructions" for the development and functioning of
// living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other,
// as "C" and "G". You have function with one side of the DNA (string);
// you need to get the other complementary side.
// DNA strand is never empty or there is no DNA at all.

function DNAStrand(dna) {
  if (!dna.length) return dna;
  else {
    let ret = "";
    for (let i = 0; i < dna.length; i++) {
      switch (dna[i]) {
        case "A":
          ret += "T";
          break;
        case "T":
          ret += "A";
          break;
        case "G":
          ret += "C";
          break;
        case "C":
          ret += "G";
          break;
      }
    }
    return ret;
  }
}

const assert = (test, ans) => (DNAStrand(test) === ans ? true : false);

console.log(assert("AAAA", "TTTT"));
console.log(assert("ATTGC", "TAACG"));
console.log(assert("GTAT", "CATA"));

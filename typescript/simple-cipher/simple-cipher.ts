export class SimpleCipher {
  key: string;
  private readonly rangeLength: number;
  private readonly inf: number;
  private readonly sup: number;

  constructor(key: string | null = null) {
    if (key === '') {
      throw new Error('Bad key');
    } else {
      this.inf = 'a'.charCodeAt(0);
      this.sup = 'z'.charCodeAt(0);
      this.rangeLength = this.sup - this.inf + 1;
      if (key == null) {
        this.key = '';
        for (let i = 0; i < 100; ++i) {
          this.key += String.fromCharCode(
            this.inf + Math.floor(Math.random() * (this.rangeLength - 1))
          );
        }
      } else {
        if (key.toLowerCase() !== key || !isNaN(Number(key)))
          throw new Error('Bad key');
        this.key = key;
      }
    }
  }

  encode(input: string): string {
    let output = '';
    [...input].forEach((char, index) => {
      let value = char.charCodeAt(0) + this.calcDelta(index);
      if (value > this.sup) {
        value -= this.rangeLength;
      }
      output += String.fromCharCode(value);
    });
    return output;
  }

  decode(input: string): string {
    let output = '';
    [...input].forEach((char, index) => {
      let value = char.charCodeAt(0) - this.calcDelta(index);
      if (value < this.inf) {
        value += this.rangeLength;
      }
      output += String.fromCharCode(value);
    });
    return output;
  }

  private calcDelta(index: number): number {
    return this.key.charCodeAt(index % this.key.length) - 'a'.charCodeAt(0);
  }
}

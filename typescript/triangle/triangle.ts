export class Triangle {
  a: number;
  b: number;
  c: number;
  
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isValid() {
    return (this.a + this.b >= this.c) && (this.a + this.c >= this.b) && (this.c + this.b >= this.a);
  }

  get isEquilateral() {
    return this.a === this.b && this.b === this.c && this.a !== 0;
  }

  get isIsosceles() {
    return this.isValid && ( (this.a === this.b) || 
           (this.a === this.c) ||
           (this.b === this.c))
  }

  get isScalene() {
    return this.isValid && this.a !== this.b && this.b !== this.c && this.a !== this.c;
  }
}

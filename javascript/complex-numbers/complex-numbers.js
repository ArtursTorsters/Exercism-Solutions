

// https://cratecode.com/info/complex-numbers-in-javascript

export class ComplexNumber {
  constructor(realNum, imaginary) {
    this.realNum = realNum;
    this.imaginary = imaginary;

    // console.log("given numbers", realNum, imaginary)
}
  get real() {
    return this.realNum;
  }

  get imag() {
    return this.imaginary;
  }

  add(complex) {
    return new ComplexNumber(this.realNum + complex.realNum, this.imaginary + complex.imaginary);
}

  sub(complex) {
    return new ComplexNumber(this.realNum - complex.realNum, this.imaginary - complex.imaginary);
  }

  div(complex) {
    const denominator = complex.realNum ** 2 + complex.imaginary ** 2;
        const realNum = (this.realNum * complex.realNum + this.imaginary * complex.imaginary) / denominator;
        const imaginary = (this.imaginary * complex.realNum - this.realNum * complex.imaginary) / denominator;
        return new ComplexNumber(realNum, imaginary);
  }

  mul(complex) {
    const realNum = this.realNum * complex.realNum - this.imaginary * complex.imaginary;
        const imaginary = this.realNum * complex.imaginary + this.imaginary * complex.realNum;
        return new ComplexNumber(realNum, imaginary);
  }

  get abs() {
    return Math.sqrt(this.realNum * this.realNum + this.imaginary * this.imaginary);
  }

  get conj() {
    return new ComplexNumber(this.realNum, this.imaginary ? -this.imaginary : 0)
  }

  get exp() {
    const eReal = Math.exp(this.realNum);
    return new ComplexNumber(
      eReal * Math.cos(this.imaginary),
      eReal * Math.sin(this.imaginary)
    );
  }

}
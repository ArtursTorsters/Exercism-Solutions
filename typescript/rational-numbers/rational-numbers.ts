export class Rational {
  constructor(private a: number, private b: number) {
    this.reduce();
  }

  get numerator() {
    return this.a;
  }

  get denominator() {
    return this.b;
  }

  add(r: Rational): Rational {
    return new Rational(this.a * r.b + this.b * r.a, this.b * r.b);
  }

  sub(r: Rational): Rational {
    return this.add(new Rational(-r.a, r.b));
  }

  mul(r: Rational): Rational {
    return new Rational(this.a * r.a, this.b * r.b);
  }

  div(r: Rational): Rational {
    return this.mul(new Rational(r.b, r.a));
  }

  abs(): Rational {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }

  exprational(n: number) {
    return (n >= 0) ? new Rational(this.a ** n, this.b ** n)
      : new Rational(this.b ** (-n), this.a ** (-n));
  }

  expreal(n: number): number {
    return (n ** this.a) ** (1 / this.b);
  }

  reduce(): Rational {
    let divisor = gcd(Math.abs(this.a), Math.abs(this.b));
    this.a = ((this.b >= 0) ? this.a : -this.a) / divisor;
    this.b = ((this.b >= 0) ? this.b : -this.b) / divisor;
    return this;
  }
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

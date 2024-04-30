export class Triangle {
  constructor(...sides) {
    // Sort the sides in ascending order
    const [a, b, c] = sides.sort();

    // Check if the triangle property holds true (sum of any two sides is greater than the third side)
    const triangleProperty = a + b > c;

    // Determine if the triangle is equilateral: all sides are equal and none of them are zero
    this.isEquilateral = a == b && b == c && a != 0;

    // Determine if the triangle is isosceles: the triangle property holds true and at least two sides are equal
    this.isIsosceles = triangleProperty && (a == b || b == c);

    // Determine if the triangle is scalene: the triangle property holds true and all sides are different
    this.isScalene = triangleProperty && a != b && b != c;
  }
}

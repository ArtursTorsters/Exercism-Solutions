import { Triangle } from './triangle'

describe('Triangle', () => {
  describe('equilateral triangle', () => {
    it('all sides are equal', () => {
      const triangle = new Triangle(2, 2, 2)
      expect(triangle.isEquilateral).toBe(true)
    })

    test('any side is unequal', () => {
      const triangle = new Triangle(2, 3, 2)
      expect(triangle.isEquilateral).toBe(false)
    })

    test('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6)
      expect(triangle.isEquilateral).toBe(false)
    })

    test('all zero sides is not a triangle', () => {
      const triangle = new Triangle(0, 0, 0)
      expect(triangle.isEquilateral).toBe(false)
    })

    test('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.5, 0.5)
      expect(triangle.isEquilateral).toBe(true)
    })
  })

  describe('isosceles triangle', () => {
    test('last two sides are equal', () => {
      const triangle = new Triangle(3, 4, 4)
      expect(triangle.isIsosceles).toBe(true)
    })

    test('first two sides are equal', () => {
      const triangle = new Triangle(4, 4, 3)
      expect(triangle.isIsosceles).toBe(true)
    })

    test('first and last sides are equal', () => {
      const triangle = new Triangle(4, 3, 4)
      expect(triangle.isIsosceles).toBe(true)
    })

    test('equilateral triangles are also isosceles', () => {
      const triangle = new Triangle(4, 4, 4)
      expect(triangle.isIsosceles).toBe(true)
    })

    test('no sides are equal', () => {
      const triangle = new Triangle(2, 3, 4)
      expect(triangle.isIsosceles).toBe(false)
    })

 // First triangle inequality violation
it('first triangle inequality violation', () => {
  const triangle = new Triangle(1, 1, 3); // Violation of a + b > c
  expect(triangle.isScalene).toBeFalsy();
});

// Second triangle inequality violation
it('second triangle inequality violation', () => {
  const triangle = new Triangle(3, 1, 1); // Violation of a + c > b
  expect(triangle.isScalene).toBeFalsy();
});

// Third triangle inequality violation
it('third triangle inequality violation', () => {
  const triangle = new Triangle(1, 3, 1); // Violation of b + c > a
  expect(triangle.isScalene).toBeFalsy();
});


    test('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.5)
      expect(triangle.isIsosceles).toBe(true)
    })
  })

  describe('scalene triangle', () => {
    test('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6)
      expect(triangle.isScalene).toBe(true)
    })

    test('all sides are equal', () => {
      const triangle = new Triangle(4, 4, 4)
      expect(triangle.isScalene).toBe(false)
    })

    test('first and second sides are equal', () => {
      const triangle = new Triangle(4, 4, 3)
      expect(triangle.isScalene).toBe(false)
    })

    test('first and third sides are equal', () => {
      const triangle = new Triangle(3, 4, 3)
      expect(triangle.isScalene).toBe(false)
    })

    test('second and third sides are equal', () => {
      const triangle = new Triangle(4, 3, 3)
      expect(triangle.isScalene).toBe(false)
    })

    test('may not violate triangle inequality', () => {
      const triangle = new Triangle(7, 3, 2)
      expect(triangle.isScalene).toBe(false)
    })

    test('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.6)
      expect(triangle.isScalene).toBe(true)
    })
  })
})

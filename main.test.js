const checkTriangleType = require('./main');

test('checkTriangleType: Not a Triangle', () => {
  expect(checkTriangleType(1, 2, 5)).toBe('NotATriangle');
});

test('checkTriangleType: Equilateral Triangle', () => {
  expect(checkTriangleType(5, 5, 5)).toBe('Equilateral');
});

test('checkTriangleType: Isosceles Triangle', () => {
  expect(checkTriangleType(5, 5, 6)).toBe('Isosceles');
});

test('checkTriangleType: Right Triangle', () => {
  expect(checkTriangleType(3, 4, 5)).toBe('RightTriangle');
});

test('checkTriangleType: Scalene Triangle', () => {
  expect(checkTriangleType(3, 4, 6)).toBe('Scalene');
});

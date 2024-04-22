function checkTriangleType(side1, side2, side3) {
  side1 = parseInt(side1);
  side2 = parseInt(side2);
  side3 = parseInt(side3);

  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    return 'NotATriangle';
  } else {
    if (side1 === side2 && side2 === side3) {
      return 'Equilateral';
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return 'Isosceles';
    } else {
      if (side1 * side1 + side2 * side2 === side3 * side3 || 
          side1 * side1 + side3 * side3 === side2 * side2 || 
          side2 * side2 + side3 * side3 === side1 * side1) {
        return 'RightTriangle';
      } else {
        return 'Scalene';
      }
    }
  }
}

module.exports = checkTriangleType;


// npx jest
// npm run test
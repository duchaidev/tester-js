const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkTriangleType(side1, side2, side3) {
  // Chuyển đổi các đầu vào thành số nguyên
  side1 = parseInt(side1);
  side2 = parseInt(side2);
  side3 = parseInt(side3);

  // Kiểm tra xem các đầu vào có phải là tam giác không
  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    return 'NotATriangle';
  } else {
    // Kiểm tra loại tam giác
    if (side1 === side2 && side2 === side3) {
      return 'Equilateral';
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return 'Isosceles';
    } else {
      // Kiểm tra tam giác vuông
      if (side1*side1 + side2*side2 === side3*side3 || 
          side1*side1 + side3*side3 === side2*side2 || 
          side2*side2 + side3*side3 === side1*side1) {
        return 'RightTriangle';
      } else {
        return 'Scalene';
      }
    }
  }
}

function inputTriangleSides() {
  rl.question("Enter the length of side 1: ", (side1) => {
    rl.question("Enter the length of side 2: ", (side2) => {
      rl.question("Enter the length of side 3: ", (side3) => {
        // Xác định loại tam giác
        const triangleType = checkTriangleType(side1, side2, side3);

        // Hiển thị kết quả trong console
        console.log("Triangle Type:", triangleType);

        rl.close();
      });
    });
  });
}

inputTriangleSides();

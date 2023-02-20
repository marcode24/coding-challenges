const landPerimeter = (arr) => {
  let perimeter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'X') {
        perimeter += 4;
        if (i > 0 && arr[i - 1][j] === 'X') perimeter -= 2;
        if (j > 0 && arr[i][j - 1] === 'X') perimeter -= 2;
      }
    }
  }
  return `Total land perimeter: ${perimeter}`;
};

module.exports = landPerimeter;

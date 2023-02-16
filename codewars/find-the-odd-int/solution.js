function findOdd(array) {
  const unique = [...new Set(array)];
  let odd = 0;
  unique.forEach((num) => {
    const count = array.filter((n) => n === num).length;
    if (count % 2 !== 0) return (odd = num);
    return odd;
  });
  return odd;
  // return array.reduce((a, b) => a ^ b, 0);
}

module.exports = findOdd;

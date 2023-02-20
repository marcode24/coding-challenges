function cube(size) {
  const topSide = [];
  const bottomSide = [];
  Array.from({ length: size }, (_, i) => i + 1).forEach((i) => {
    topSide.push(' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size));
    bottomSide.push(' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size));
  });
  return topSide.concat(bottomSide.reverse()).join('\n');
}

module.exports = cube;

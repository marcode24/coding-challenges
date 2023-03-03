const arraysSimilar = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  return arr1.every((el, index) => el === arr2[index]);
};

module.exports = arraysSimilar;
